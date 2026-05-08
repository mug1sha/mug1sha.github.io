import Groq from "groq-sdk";

const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
const allowedOrigin = process.env.ALLOWED_ORIGIN || "";
const maxChatMessageLength = 1200;
const maxContextLength = 1200;
const maxTranslationItems = 40;
const maxTranslationHtmlLength = 500;

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
  const language = typeof body.language === "string" ? body.language.trim() : "English";
  const context = typeof body.context === "string" ? body.context.trim() : "";

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
        content: `${portfolioContext}\nReply in ${language} unless the user explicitly asks for another language.`,
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
      html:
        typeof item.html === "string"
          ? item.html.trim().slice(0, maxTranslationHtmlLength)
          : "",
    }))
    .filter((item) => item.id && item.html);

  if (!sanitizedItems.length) {
    return sendJson(res, 400, { error: "No valid translation items were provided." });
  }

  const completion = await createChatCompletion(
    [
      {
        role: "system",
        content:
          "Translate each HTML snippet into the requested language. Preserve HTML tags, order, numbers, URLs, emails, brand names, and technical terms where appropriate. Return JSON only.",
      },
      {
        role: "user",
        content: JSON.stringify({
          targetLanguage,
          items: sanitizedItems,
          outputFormat: {
            items: [{ id: "same-as-input", translatedHtml: "translated html snippet" }],
          },
        }),
      },
    ],
    { temperature: 0.2, maxTokens: 1800 }
  );

  const raw = completion.choices?.[0]?.message?.content?.trim() || "";

  try {
    const parsed = JSON.parse(raw);
    const translatedItems = Array.isArray(parsed.items) ? parsed.items : [];
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
