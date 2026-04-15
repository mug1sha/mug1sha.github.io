import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askAI(prompt) {
  try {
    const res = await client.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 500,
      messages: [{ role: "user", content: prompt }],
    });
    return res.content[0].text;
  } catch (error) {
    if (error.status === 400 && error.error?.error?.message.includes("credit balance")) {
      return "Error: Your Anthropic API credit balance is too low. Please check your account.";
    }
    return `Error calling Anthropic API: ${error.message}`;
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
