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
ALLOWED_ORIGIN=https://your-vercel-domain.vercel.app
```

Notes on deployment

The frontend is static, so the Groq key must stay server-side. The `api/groq.js` handler is designed for serverless platforms such as Vercel. GitHub Pages alone cannot safely run the Groq-backed assistant because it cannot host secret server-side functions.

Vercel setup

1. Import the GitHub repository into Vercel.
2. Keep the project as an "Other" framework project.
3. Set the root directory to the repository root.
4. Add these environment variables in Vercel:
   `GROQ_API_KEY`, `GROQ_MODEL`, and `ALLOWED_ORIGIN`.
5. Set `ALLOWED_ORIGIN` to your production Vercel URL or custom domain, for example `https://godson-portfolio.vercel.app`.
6. Deploy.

Production notes

- `vercel.json` adds security headers and disables API caching.
- The API now enforces an optional allowed origin check, limits payload sizes, and keeps Groq work bounded for better latency and lower token waste.
- If you later attach a custom domain, update `ALLOWED_ORIGIN` in Vercel to match it exactly.

CLI assistant

```bash
npm install
npm start
```

