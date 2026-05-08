/**
 * chatbot.js - Groq-backed assistant for Godson's portfolio.
 */

const chatUiCopy = {
    EN: {
        title: "Godson's AI",
        status: "Online",
        welcome: "Hi! I'm Godson's digital assistant. How can I help you today?",
        placeholder: "Ask me something...",
        quickActions: {
            skills: { label: "Skills", query: "Tell me about Godson's skills" },
            projects: { label: "Projects", query: "Tell me about Godson's projects" },
            contact: { label: "Contact", query: "How can I contact Godson?" }
        },
        fallback: {
            greeting: "Hello! I'm Godson's digital assistant. I can tell you about his skills, projects, or how to contact him. What would you like to know?",
            skills: "Godson is a Full Stack Developer and Security Engineer. His strongest areas include Python, FastAPI, backend architecture, automation, and cybersecurity.",
            projects: "Some highlighted projects are Simba Version 2.0, Villas, the Phishing URL Analyzer, and a Secure Auth API.",
            contact: "You can reach Godson by email at godson.mugisha2015@gmail.com, and you can also find him on GitHub and LinkedIn.",
            hire: "Godson is open to opportunities and brings a security-first mindset to software engineering and automation work.",
            default: "I can help with Godson's skills, projects, background, and contact details."
        },
        errors: {
            api: "The live AI endpoint is unavailable right now, so I'm using built-in answers.",
            generic: "I couldn't generate a response right now."
        }
    },
    FR: {
        title: "IA de Godson",
        status: "En ligne",
        welcome: "Bonjour. Je suis l'assistant numérique de Godson. Comment puis-je vous aider aujourd'hui ?",
        placeholder: "Posez votre question...",
        quickActions: {
            skills: { label: "Compétences", query: "Parle-moi des compétences de Godson" },
            projects: { label: "Projets", query: "Parle-moi des projets de Godson" },
            contact: { label: "Contact", query: "Comment puis-je contacter Godson ?" }
        },
        fallback: {
            greeting: "Bonjour. Je suis l'assistant numérique de Godson. Je peux vous parler de ses compétences, de ses projets et de ses coordonnées.",
            skills: "Godson est développeur full stack et ingénieur sécurité. Ses points forts incluent Python, FastAPI, l'architecture backend, l'automatisation et la cybersécurité.",
            projects: "Parmi ses projets notables figurent Simba Version 2.0, Villas, l'analyseur d'URL de phishing et une API d'authentification sécurisée.",
            contact: "Vous pouvez contacter Godson par email à godson.mugisha2015@gmail.com, et le retrouver aussi sur GitHub et LinkedIn.",
            hire: "Godson est ouvert aux opportunités et apporte une approche sécurité d'abord dans le développement logiciel et l'automatisation.",
            default: "Je peux vous aider sur les compétences, projets, expériences et contacts de Godson."
        },
        errors: {
            api: "Le point d'accès IA n'est pas disponible pour le moment. J'utilise donc les réponses intégrées.",
            generic: "Je n'ai pas pu générer une réponse pour le moment."
        }
    },
    RW: {
        title: "AI ya Godson",
        status: "Irahari",
        welcome: "Muraho. Ndi umufasha wa Godson ku rubuga rwe. Nagufasha iki uyu munsi?",
        placeholder: "Andika ikibazo cyawe...",
        quickActions: {
            skills: { label: "Ubumenyi", query: "Mbwira ubumenyi bwa Godson" },
            projects: { label: "Imishinga", query: "Mbwira imishinga ya Godson" },
            contact: { label: "Twandikire", query: "Nabona nte uko nabonana na Godson?" }
        },
        fallback: {
            greeting: "Muraho. Ndi umufasha wa Godson. Nshobora kukubwira ku bumenyi bwe, imishinga ye, cyangwa uko wamugeraho.",
            skills: "Godson ni Full Stack Developer kandi ni Security Engineer. Afite imbaraga muri Python, FastAPI, backend architecture, automation, na cybersecurity.",
            projects: "Imishinga ye y'ingenzi irimo Simba Version 2.0, Villas, Phishing URL Analyzer, na Secure Auth API.",
            contact: "Wamwandikira kuri godson.mugisha2015@gmail.com, kandi ari no kuri GitHub na LinkedIn.",
            hire: "Godson yiteguye amahirwe mashya kandi akora software ashyize imbere umutekano.",
            default: "Nshobora kugufasha ku bumenyi bwa Godson, imishinga ye, amateka ye, n'uko wamugeraho."
        },
        errors: {
            api: "AI endpoint ntabwo iri kuboneka ubu, rero ndakoresha ibisubizo byanditse imbere.",
            generic: "Ntabwo nabashije gutanga igisubizo ubu."
        }
    }
};

const initChatbot = () => {
    const trigger = document.getElementById('chatbot-trigger');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const qaButtons = document.querySelectorAll('.qa-btn');
    const titleEl = document.getElementById('chatbot-title');
    const statusEl = document.getElementById('chatbot-status');
    const welcomeEl = document.getElementById('chatbot-welcome-message');

    if (!trigger || !windowEl || !chatBody || !chatInput) return;

    const getCurrentLang = () => document.documentElement.dataset.language || 'EN';
    const getCopy = () => chatUiCopy[getCurrentLang()] || chatUiCopy.EN;

    const appendMessage = (sender, text) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const showTypingIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        chatBody.appendChild(indicator);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const removeTypingIndicator = () => {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    };

    const getLocalResponse = (input) => {
        const copy = getCopy();
        const query = input.toLowerCase();

        if (query.includes('skill') || query.includes('tech') || query.includes('comp') || query.includes('ubumenyi')) {
            return copy.fallback.skills;
        }
        if (query.includes('project') || query.includes('work') || query.includes('projet') || query.includes('mushinga')) {
            return copy.fallback.projects;
        }
        if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('contacter') || query.includes('twandik')) {
            return copy.fallback.contact;
        }
        if (query.includes('hire') || query.includes('opportunit') || query.includes('akazi')) {
            return copy.fallback.hire;
        }
        if (query.includes('hello') || query.includes('hi') || query.includes('bonjour') || query.includes('muraho')) {
            return copy.fallback.greeting;
        }

        return copy.fallback.default;
    };

    const getPortfolioContext = () => {
        const lang = getCurrentLang();
        const projectTitles = Array.from(document.querySelectorAll('#work .project-info h3'))
            .map(el => el.textContent.trim())
            .filter(Boolean)
            .join(', ');

        return `Current site language: ${lang}. Highlighted project titles: ${projectTitles}.`;
    };

    const requestGroqResponse = async (message) => {
        const lang = getCurrentLang();
        const languageName = { EN: 'English', FR: 'French', RW: 'Kinyarwanda' }[lang] || 'English';
        const response = await fetch('/api/groq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mode: 'chat',
                message,
                language: languageName,
                context: getPortfolioContext()
            })
        });

        if (!response.ok) {
            throw new Error(`Chat request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.reply?.trim();
    };

    const refreshUiLanguage = () => {
        const copy = getCopy();

        if (titleEl) titleEl.textContent = copy.title;
        if (statusEl) statusEl.textContent = copy.status;
        if (chatInput) chatInput.placeholder = copy.placeholder;
        if (welcomeEl && welcomeEl.dataset.chatWelcome === 'true') {
            welcomeEl.textContent = copy.welcome;
        }

        qaButtons.forEach(btn => {
            const intent = btn.dataset.intent;
            const config = copy.quickActions[intent];
            if (!config) return;
            btn.textContent = config.label;
            btn.dataset.query = config.query;
        });
    };

    const sendMessage = async () => {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage('user', text);
        chatInput.value = '';
        chatInput.disabled = true;
        if (sendBtn) sendBtn.disabled = true;

        showTypingIndicator();

        try {
            const aiResponse = await requestGroqResponse(text);
            removeTypingIndicator();
            appendMessage('ai', aiResponse || getCopy().errors.generic);
        } catch (error) {
            console.warn(getCopy().errors.api, error);
            removeTypingIndicator();
            appendMessage('ai', getLocalResponse(text));
        } finally {
            chatInput.disabled = false;
            if (sendBtn) sendBtn.disabled = false;
            chatInput.focus();
        }
    };

    trigger.addEventListener('click', () => {
        windowEl.classList.toggle('active');
        if (windowEl.classList.contains('active')) {
            chatInput.focus();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => windowEl.classList.remove('active'));
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    qaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            chatInput.value = btn.dataset.query || btn.textContent || '';
            sendMessage();
        });
    });

    document.addEventListener('portfolio-languagechange', refreshUiLanguage);
    refreshUiLanguage();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
