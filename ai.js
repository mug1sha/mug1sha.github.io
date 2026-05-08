import Groq from "groq-sdk";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

const systemPrompt = `
You are Godson's portfolio AI assistant.
Answer concisely and accurately.
Focus on Godson Mugisha's skills, projects, security mindset, and contact details.
If the user asks for unsupported personal details, say you do not have that information.
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askAI(prompt) {
  try {
    const res = await client.chat.completions.create({
      model,
      temperature: 0.4,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
    });
    return res.choices?.[0]?.message?.content?.trim() || "No response returned.";
  } catch (error) {
    if (!process.env.GROQ_API_KEY) {
      return "Error: Missing GROQ_API_KEY. Add it to your environment before starting the CLI.";
    }
    return `Error calling Groq API: ${error.message}`;
  }
}

console.log("Welcome to Godson's Portfolio AI Assistant (CLI)");
console.log("Type 'exit' to quit.");

function startChat() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
      return;
    }

    process.stdout.write("AI: Thinking...");
    const response = await askAI(input);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    console.log(`AI: ${response}`);
    startChat();
  });
}

startChat();
