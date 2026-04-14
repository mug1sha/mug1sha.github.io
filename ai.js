import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const res = await client.messages.create({
  model: "claude-3-haiku-20240307",
  max_tokens: 200,
  messages: [
    { role: "user", content: "Hello Claude" }
  ],
});

console.log(res.content[0].text);
