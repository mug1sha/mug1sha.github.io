/**
 * chatbot.js - A smart client-side assistant for Godson's portfolio.
 */

const initChatbot = () => {
    console.log("Initializing AI Assistant...");
    
    const knowledgeBase = {
        greeting: "Hello! I'm Godson's digital assistant. I can tell you about his skills, projects, or how to contact him. What would you like to know?",
        skills: "Godson is a Full Stack Developer & Security Engineer. His top skills include Python (FastAPI, Django), Cybersecurity (Pentesting, OWASP), and DevOps (Docker, CI/CD).",
        projects: "Some of his key projects include Simba Version 2.0, Villas (Real Estate), Phishing URL Analyzer, Secure Auth API, and an Enterprise SMTP Pipeline. Check the 'Work' section for more details!",
        contact: "You can reach Godson via email at godson.mugisha2015@gmail.com or call him at +250 795009211. He's also active on LinkedIn and GitHub.",
        hire: "Godson is currently open to new opportunities! He brings a security-first mindset to software development and automation. You can download his resume directly from the 'About' section.",
        security: "Cybersecurity is at the core of Godson's work. He's a Junior Security Engineer specializing in penetration testing, threat auditing, and building secure backend architectures.",
        python: "Godson is a Python expert! He uses it for everything from advanced automation logic to building high-performance REST APIs with FastAPI.",
        default: "I'm not exactly sure about that, but I'd love to help! Try asking about his skills, projects, or how to contact him."
    };

    const trigger = document.getElementById('chatbot-trigger');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const qaButtons = document.querySelectorAll('.qa-btn');

    if (!trigger || !windowEl) return;

    // Toggle Chat Window
    trigger.addEventListener('click', () => {
        windowEl.classList.toggle('active');
        if (windowEl.classList.contains('active') && chatInput) {
            chatInput.focus();
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', () => windowEl.classList.remove('active'));

    // UI Helpers
    const appendMessage = (sender, text) => {
        if (!chatBody) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const showTypingIndicator = () => {
        if (!chatBody) return;
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
        chatBody.appendChild(indicator);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const removeTypingIndicator = () => {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    };

    const getAIResponse = (input) => {
        const query = input.toLowerCase();
        if (query.includes('skill') || query.includes('tech')) return knowledgeBase.skills;
        if (query.includes('project') || query.includes('work')) return knowledgeBase.projects;
        if (query.includes('contact') || query.includes('email') || query.includes('reach')) return knowledgeBase.contact;
        if (query.includes('hire') || query.includes('opportunity')) return knowledgeBase.hire;
        if (query.includes('security') || query.includes('hack')) return knowledgeBase.security;
        if (query.includes('python')) return knowledgeBase.python;
        if (query.includes('hello') || query.includes('hi')) return knowledgeBase.greeting;
        return knowledgeBase.default;
    };

    const sendMessage = async () => {
        if (!chatInput) return;
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage('user', text);
        chatInput.value = '';

        showTypingIndicator();
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
        removeTypingIndicator();
        
        appendMessage('ai', getAIResponse(text));
    };

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

    qaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            if (chatInput) chatInput.value = query;
            sendMessage();
        });
    });
};

// Fire initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
