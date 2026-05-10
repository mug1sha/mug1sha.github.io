import Groq from "groq-sdk";

const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
const allowedOrigin = process.env.ALLOWED_ORIGIN || "";
const maxChatMessageLength = 1200;
const maxContextLength = 1200;
const maxTranslationItems = 25;
const maxTranslationContentLength = 3000;

const portfolioContext = `
You are Godson's portfolio AI assistant.
You speak accurately about Godson Mugisha based on this profile:
- Full Stack Developer, Python Automation Engineer, Junior Security Engineer
- Strong in Python, FastAPI, Django, automation, DevSecOps, backend systems, cybersecurity
- Projects include Simba Version 2.0, Villas, Phishing URL Analyzer, Secure Auth API, and an Enterprise SMTP Pipeline
- Contact email: godson.mugisha2015@gmail.com
- GitHub: https://github.com/mug1sha
- LinkedIn: https://www.linkedin.com/in/godson-mugisha-0870ba275
If something is not in the profile, say so plainly and avoid inventing details.
Keep responses concise, helpful, and professional.
`;

const supportedChatLanguages = ["English", "French", "Kinyarwanda"];

function getClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY environment variable.");
  }

  return new Groq({ apiKey });
}

function sendJson(res, status, payload) {
  res
    .status(status)
    .setHeader("Content-Type", "application/json")
    .setHeader("Cache-Control", "no-store, max-age=0");
  res.end(JSON.stringify(payload));
}

function getRequestOrigin(req) {
  const originHeader = req.headers.origin;

  if (typeof originHeader === "string" && originHeader) {
    return originHeader;
  }

  const protocol =
    req.headers["x-forwarded-proto"] ||
    (req.headers.host?.includes("localhost") ? "http" : "https");
  const host = req.headers["x-forwarded-host"] || req.headers.host || "";

  return host ? `${protocol}://${host}` : "";
}

function applyCors(req, res) {
  const requestOrigin = getRequestOrigin(req);
  const resolvedOrigin = allowedOrigin || requestOrigin || "*";

  res.setHeader("Access-Control-Allow-Origin", resolvedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
}

function assertAllowedOrigin(req) {
  if (!allowedOrigin) return;

  const requestOrigin = getRequestOrigin(req);
  if (requestOrigin && requestOrigin !== allowedOrigin) {
    throw new Error("Origin not allowed.");
  }
}

async function createChatCompletion(messages, options = {}) {
  const client = getClient();

  return client.chat.completions.create({
    model,
    temperature: options.temperature ?? 0.4,
    max_tokens: options.maxTokens ?? 900,
    messages,
  });
}

async function handleChat(body, res) {
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const requestedLanguage =
    typeof body.language === "string" ? body.language.trim() : "English";
  const context = typeof body.context === "string" ? body.context.trim() : "";
  const language = supportedChatLanguages.includes(requestedLanguage)
    ? requestedLanguage
    : "English";

  if (!message) {
    return sendJson(res, 400, { error: "Message is required." });
  }

  if (message.length > maxChatMessageLength) {
    return sendJson(res, 400, { error: "Message is too long." });
  }

  const completion = await createChatCompletion(
    [
      {
        role: "system",
        content: `${portfolioContext}
You must understand and respond clearly in these supported languages: English, French, and Kinyarwanda.
Default to ${language} for this request unless the user explicitly asks for a different language.
If the user writes in English, French, or Kinyarwanda, understand the request directly without asking them to switch languages.
Keep the reply natural for the chosen language, and do not mix languages unless the user asks for that.
If Kinyarwanda is requested or the user writes in Kinyarwanda, answer in Kinyarwanda only.
Do not switch to Swahili when Kinyarwanda is requested.`,
      },
      ...(context
        ? [
            {
              role: "system",
              content: `Useful page context:\n${context.slice(0, maxContextLength)}`,
            },
          ]
        : []),
      {
        role: "user",
        content: message,
      },
    ],
    { maxTokens: 700 }
  );

  const reply = completion.choices?.[0]?.message?.content?.trim();
  return sendJson(res, 200, { reply: reply || "I do not have a response right now." });
}

async function handlePageTranslation(body, res) {
  const targetLanguage =
    typeof body.targetLanguage === "string" ? body.targetLanguage.trim() : "";
  const items = Array.isArray(body.items) ? body.items : [];

  if (!targetLanguage || !items.length) {
    return sendJson(res, 400, { error: "targetLanguage and items are required." });
  }

  if (items.length > maxTranslationItems) {
    return sendJson(res, 400, { error: "Too many translation items." });
  }

  const sanitizedItems = items
    .map((item) => ({
      id: typeof item.id === "string" ? item.id : "",
      format: item.format === "text" ? "text" : "html",
      content:
        typeof item.content === "string"
          ? item.content.trim().slice(0, maxTranslationContentLength)
          : typeof item.html === "string"
            ? item.html.trim().slice(0, maxTranslationContentLength)
            : "",
    }))
    .filter((item) => item.id && item.content);

  if (!sanitizedItems.length) {
    return sendJson(res, 400, { error: "No valid translation items were provided." });
  }

  const completion = await createChatCompletion(
    [
      {
        role: "system",
        content:
          "Translate each item into the requested language. Items marked as html must preserve all HTML tags, structure, and order exactly. Items marked as text must return plain translated text only. Preserve numbers, URLs, emails, brand names, code syntax, and technical terms where appropriate. Return valid JSON only.",
      },
      {
        role: "user",
        content: JSON.stringify({
          targetLanguage,
          items: sanitizedItems,
          outputFormat: {
            items: [
              {
                id: "same-as-input",
                translatedContent: "translated content matching the input format",
              },
            ],
          },
        }),
      },
    ],
    { temperature: 0.2, maxTokens: 1800 }
  );

  const raw = completion.choices?.[0]?.message?.content?.trim() || "";

  try {
    const parsed = JSON.parse(raw);
    const translatedItems = Array.isArray(parsed.items)
      ? parsed.items
          .map((item) => ({
            id: item?.id,
            translatedContent:
              typeof item?.translatedContent === "string"
                ? item.translatedContent
                : typeof item?.content === "string"
                  ? item.content
                  : typeof item?.translatedHtml === "string"
                    ? item.translatedHtml
                    : "",
          }))
          .filter((item) => item.id && item.translatedContent)
      : [];
    return sendJson(res, 200, { items: translatedItems });
  } catch (error) {
    return sendJson(res, 502, {
      error: "Groq translation did not return valid JSON.",
      raw,
    });
  }
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  try {
    assertAllowedOrigin(req);

    const body = req.body && typeof req.body === "object" ? req.body : {};

    switch (body.mode) {
      case "translate_page":
        return await handlePageTranslation(body, res);
      case "chat":
      default:
        return await handleChat(body, res);
    }
  } catch (error) {
    if (error.message === "Origin not allowed.") {
      return sendJson(res, 403, { error: error.message });
    }

    return sendJson(res, 500, {
      error: error.message || "Unexpected Groq handler failure.",
    });
  }
}
