// Language translations
const translations = {
    EN: {
        nav_start: "Start />",
        nav_work: "Work />",
        nav_services: "Skills />",
        nav_about: "About />",
        nav_contact: "Contact />",
        hero_i: "I am a",
        hero_desc: "Let me show You...",
        work_subtitle: "Selected programming & automation projects...",
        services_subtitle: "I provide hands-on cybersecurity support and scalable automation.",
        cat_dev: "Development",
        cat_tools: "Tools",
        skill_python: "Python Programming",
        skill_automation: "Job Automation",
        skill_backend: "Backend Services",
        skill_data: "Data Workflows",
        skill_network: "Networking/Hardening",
        about_bio: "`Passionate digital creator blending code and cybersecurity to build smart, secure, and high-impact solutions. Focused on results, innovation, and resilience.`",
        download_resume: "Download Resume",
        find_me_on: "Find me on:",
        visitors: "Visitors"
    },
    FR: {
        nav_start: "Début />",
        nav_work: "Travaux />",
        nav_services: "Compétences />",
        nav_about: "À Propos />",
        nav_contact: "Contact />",
        hero_i: "Je suis un(e)",
        hero_desc: "Laissez-moi vous montrer...",
        work_subtitle: "Projets d'automatisation et de dev...",
        services_subtitle: "Je fournis un support pratique en cybersécurité et une automatisation évolutive.",
        cat_dev: "Développement",
        cat_tools: "Outils",
        skill_python: "Programmation Python",
        skill_automation: "Automatisation",
        skill_backend: "Services Backend",
        skill_data: "Flux de Données",
        skill_network: "Réseau/Durcissement",
        about_bio: "`Créateur numérique passionné alliant code et cybersécurité pour concevoir des solutions intelligentes, sécurisées et à fort impact. Axé sur les résultats.`",
        download_resume: "Télécharger le CV",
        find_me_on: "Retrouvez-moi sur:",
        visitors: "Visiteurs"
    },
    RW: {
        nav_start: "Gutangira />",
        nav_work: "Imirimo />",
        nav_services: "Ubumenyi />",
        nav_about: "Amajwi />",
        nav_contact: "Twandikire />",
        hero_i: "Ndi",
        hero_desc: "Reka nkwereke...",
        work_subtitle: "Imishinga yatoranyijwe y'ikoranabuhanga...",
        services_subtitle: "Ntanga ubufasha mu by'umutekano w'ikoranabuhanga.",
        cat_dev: "Gukora Porogaramu",
        cat_tools: "Ibikoresho",
        skill_python: "Gukora Python",
        skill_automation: "Kwihutisha Imirimo",
        skill_backend: "Gukora Backend",
        skill_data: "Gutunganya Amakuru",
        skill_network: "Iyungunganya/Umutekano",
        about_bio: "`Umuremyi wa gijitali uhuza kodi n'umutekano w'ikoranabuhanga kugirango akore ibisubizo byiza kandi byizewe. Wibanda ku musaruro n'udushya.`",
        download_resume: "Kuramo Umwirondoro",
        find_me_on: "Nshakira hano:",
        visitors: "Abarusura"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Custom Cursor --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if(cursorDot && cursorOutline) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = mouseX;
        let outlineY = mouseY;

        // Immediately hide until first movement to avoid glitchy top-left spawn
        cursorDot.style.opacity = 0;
        cursorOutline.style.opacity = 0;

        document.addEventListener('mousemove', (e) => {
            cursorDot.style.opacity = 1;
            cursorOutline.style.opacity = 1;
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        const animateCursor = () => {
            let distX = mouseX - outlineX;
            let distY = mouseY - outlineY;
            outlineX += distX * 0.15;
            outlineY += distY * 0.15;
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .project-box');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
        });
    }

    /* --- 2. Navbar Scroll Effect --- */
    const navbar = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- 3. Hamburger Menu --- */
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }

    /* --- 4. Intersection Observer for Block Reveal --- */
    const revealElements = document.querySelectorAll('.block-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --- 5. Theme Toggle --- */
    const themeBtn = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    };

    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    /* --- 6. Language Dropdown Toggle --- */
    const langSelect = document.getElementById('lang-toggle');
    const langs = ['EN', 'FR', 'RW'];
    let currentLangIdx = localStorage.getItem('langIdx') ? parseInt(localStorage.getItem('langIdx')) : 0;

    const applyLanguage = (langIdx) => {
        const langKey = langs[langIdx];
        langSelect.value = langIdx.toString(); // Update dropdown standard selection
        localStorage.setItem('langIdx', langIdx);
        
        const dict = translations[langKey];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(dict[key]) {
                if(el.innerHTML.includes('<span>/&gt;</span>')) {
                    el.innerHTML = dict[key].replace('/>', '<span>/></span>');
                } else {
                    el.textContent = dict[key];
                }
            }
        });
    };

    applyLanguage(currentLangIdx);

    langSelect.addEventListener('change', (e) => {
        currentLangIdx = parseInt(e.target.value);
        applyLanguage(currentLangIdx);
    });

    /* --- 7. Vanilla Tilt Init --- */
    if(typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }

    /* --- 8. Contact Form AJAX --- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if(contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formStatus.style.display = 'block';
            formStatus.textContent = "Sending message...";
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if(response.ok) {
                    formStatus.textContent = "Thanks for reaching out! I'll get back to you shortly. 🚀";
                    contactForm.reset();
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                }
            } catch (error) {
                formStatus.textContent = "Oops! A network error occurred.";
            }
        });
    }

    // Visitor Counter badges are purely driven by HTML action logic and <img> requests.
});
