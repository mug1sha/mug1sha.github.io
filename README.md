PORTFOLIO WEBSITE

Live site: https://mug1sha.github.io/

About

This is Godson Mugisha's personal portfolio site. It now includes a Groq-backed AI assistant and AI-enhanced page translation for the richer content that was previously left in English.

Features

- Responsive portfolio UI
- Project showcase with live links
- Groq-powered assistant for portfolio Q&A
- AI-assisted language switching for dynamic section copy

Tech

- HTML, CSS, JavaScript
- Node.js CLI assistant
- Groq API via `groq-sdk`

Environment

Create a local `.env` file from `.env.example` and set:

```bash
GROQ_API_KEY=your_key_here
GROQ_MODEL=llama-3.1-8b-instant
```

Notes on deployment

The frontend is static, so the Groq key must stay server-side. The `api/groq.js` handler is designed for serverless platforms such as Vercel. GitHub Pages alone cannot safely run the Groq-backed assistant because it cannot host secret server-side functions.

CLI assistant

```bash
npm install
npm start
```

