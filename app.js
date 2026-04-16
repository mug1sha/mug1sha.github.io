// Language translations
const translations = {
    EN: {
        nav_start: "Start />",
        nav_work: "Work />",
        nav_services: "Skills />",
        nav_about: "About />",
        nav_gallery: "Gallery />",
        nav_contact: "Contact />",
        nav_honors: "Honors />",
        awards_title: "Honors & Certifications",
        hero_i: "I am a",
        hero_desc: "I architect resilient backend systems, engineer advanced Python automation, and integrate robust security practices from day zero. Uncompromising on performance and clean code.",
        work_subtitle: "Selected programming & automation projects...",
        git_contributions: "Daily Open Source Contributions",
        services_subtitle: "Hacker-mindset applied to enterprise systems.",
        about_bio: "Passionate digital creator blending code and cybersecurity to build smart, secure, and high-impact solutions. Focused on results, innovation, and resilience.",
        download_resume: "Download Resume",
        find_me_on: "Find me on:",
        visitors: "Visitors",
        viewers: "viewers",
        award_1_title: "CompTIA Security+",
        award_1_desc: "Industry-standard certification for cybersecurity professionals. (In Progress)",
        award_2_title: "Cisco Intro to Cyber",
        award_2_desc: "Foundational knowledge in network security and threat management.",
        award_3_title: "Python for Security",
        award_3_desc: "Specialized certification for building automated security tools and scripts.",
        status_available: "Open to Opportunities"
    },
    FR: {
        nav_start: "Début />",
        nav_work: "Travaux />",
        nav_services: "Compétences />",
        nav_about: "À Propos />",
        nav_gallery: "Galerie />",
        nav_contact: "Contact />",
        nav_honors: "Honneurs />",
        awards_title: "Distinctions & Certifications",
        hero_i: "Je suis un(e)",
        hero_desc: "J'architecture des systèmes backend résilients, je conçois des automatisations Python avancées et j'intègre des pratiques de sécurité robustes dès le premier jour.",
        work_subtitle: "Projets d'automatisation et de dev...",
        git_contributions: "Contributions Open Source Quotidiennes",
        services_subtitle: "L'esprit hacker appliqué aux systèmes d'entreprise.",
        about_bio: "Créateur numérique passionné alliant code et cybersécurité pour concevoir des solutions intelligentes, sécurisées et à fort impact. Axé sur les résultats.",
        download_resume: "Télécharger le CV",
        find_me_on: "Retrouvez-moi on:",
        visitors: "Visiteurs",
        viewers: "visiteurs",
        award_1_title: "CompTIA Security+",
        award_1_desc: "Certification standard pour les professionnels de la cybersécurité. (En cours)",
        award_2_title: "Intro Cisco à la Cyber",
        award_2_desc: "Connaissances fondamentales en sécurité réseau et gestion des menaces.",
        award_3_title: "Python pour la Sécurité",
        award_3_desc: "Certification spécialisée pour la création d'outils et de scripts de sécurité automatisés.",
        status_available: "Ouvert aux opportunités"
    },
    RW: {
        nav_start: "Gutangira />",
        nav_work: "Imirimo />",
        nav_services: "Ubumenyi />",
        nav_about: "Ibinyerekeye />",
        nav_gallery: "Amafoto />",
        nav_contact: "Twandikire />",
        nav_honors: "Ibihembo />",
        awards_title: "Ibihembo n'Impamyabumenyi",
        hero_i: "Ndi",
        hero_desc: "Nubaka sisitemu zikomeye, nkanakora porogaramu zihutisha imirimo nifashishije Python, nkanibanda ku mutekano w'ibyo nkora byose.",
        work_subtitle: "Imishinga yatoranyijwe y'ikoranabuhanga...",
        git_contributions: "Imirimo ya buri munsi mu mushinga ufunguye",
        services_subtitle: "Uburyo bwo gutekereza nk'umu-hacker mu gukora sisitemu z'ibigo.",
        about_bio: "Umuremyi wa gijitali uhuza kodi n'umutekano w'ikoranabuhanga kugirango akore ibisubizo byiza kandi byizewe. Wibanda ku musaruro n'udushya.",
        download_resume: "Kuramo Umwirondoro",
        find_me_on: "Nshakira hano:",
        visitors: "Abarusura",
        viewers: "abarasuye",
        award_1_title: "CompTIA Security+",
        award_1_desc: "Impamyabumenyi y'icyezere mu bijyanye n'umutekano w'ikoranabuhanga. (Irakomeza)",
        award_2_title: "Cisco: Intangiriro y'umutekano",
        award_2_desc: "Ubumenyi bw'ibanze mu mutekano w'urusobe rw'abantu n'imicungire y'ibitero.",
        award_3_title: "Python mu mutekano",
        award_3_desc: "Impamyabumenyi yihariye mu gukora ibikoresho byifashishwa mu mutekano.",
        status_available: "Niteguye akazi kaboneka"
    }
};

/**
 * Main Initialization logic wrapped for resilience
 */
const initPortfolio = () => {
    console.log("Initializing Portfolio Engine...");

    /* --- 0. Preloader Removal --- */
    const preloader = document.getElementById('preloader');
    const hidePreloader = () => {
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                // Trigger hero reveal immediately
                document.querySelectorAll('.reveal-hero').forEach(el => el.classList.add('active'));
            }, 600);
        }
    };

    // Always attempt to hide preloader quickly if window is already loaded
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
    // Fallback
    setTimeout(hidePreloader, 4000);

    /* --- 1. Custom Cursor --- */
    try {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const cursorToggleBtn = document.getElementById('cursor-toggle');

        if (cursorDot && cursorOutline) {
            let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
            let outlineX = mouseX, outlineY = mouseY;

            document.addEventListener('mousemove', (e) => {
                cursorDot.style.opacity = 1;
                cursorOutline.style.opacity = 1;
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorDot.style.left = `${mouseX}px`;
                cursorDot.style.top = `${mouseY}px`;
            });

            const animateCursor = () => {
                outlineX += (mouseX - outlineX) * 0.15;
                outlineY += (mouseY - outlineY) * 0.15;
                cursorOutline.style.left = `${outlineX}px`;
                cursorOutline.style.top = `${outlineY}px`;
                requestAnimationFrame(animateCursor);
            };
            animateCursor();

            document.querySelectorAll('a, button, input, textarea, select, .project-box').forEach(el => {
                el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
                el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
            });

            const applyCursorMode = (mode) => {
                if (mode === 'default') {
                    document.documentElement.classList.add('default-cursor');
                    if(cursorToggleBtn) cursorToggleBtn.textContent = '🖱️';
                } else {
                    document.documentElement.classList.remove('default-cursor');
                    if(cursorToggleBtn) cursorToggleBtn.textContent = '✨';
                }
                localStorage.setItem('cursorMode', mode);
            };

            let savedMode = localStorage.getItem('cursorMode') || 'custom';
            applyCursorMode(savedMode);

            if (cursorToggleBtn) {
                cursorToggleBtn.addEventListener('click', () => {
                    savedMode = savedMode === 'custom' ? 'default' : 'custom';
                    applyCursorMode(savedMode);
                });
            }
        }
    } catch (e) { console.error("Cursor initialization failed", e); }

    /* --- 2. Navbar Scroll Effect --- */
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /* --- 3. Reveal Animations (Intersection Observer) --- */
    try {
        const revealOptions = { threshold: 0.05, rootMargin: '0px 0px -20px 0px' };
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        const revealSelectors = ['.reveal-work', '.reveal-skill', '.reveal-about', '.reveal-contact'];
        revealSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
        });

        // Backup Reveal (Failsafe)
        setTimeout(() => {
            revealSelectors.forEach(s => document.querySelectorAll(s).forEach(el => el.classList.add('active')));
        }, 5000);
    } catch (e) { console.error("Observer failed", e); }

    /* --- 4. Theme & Language --- */
    try {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            const applyTheme = (theme) => {
                document.documentElement.setAttribute('data-theme', theme);
                themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
                localStorage.setItem('theme', theme);
            };
            applyTheme(localStorage.getItem('theme') || 'dark');
            themeBtn.addEventListener('click', () => {
                const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }

        const langSelect = document.getElementById('lang-toggle');
        if (langSelect) {
            const langs = ['EN', 'FR', 'RW'];
            const applyLanguage = (langIdx) => {
                const langKey = langs[langIdx] || 'EN';
                langSelect.value = langIdx.toString();
                localStorage.setItem('langIdx', langIdx);
                const dict = translations[langKey];

                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (dict[key]) {
                        const span = el.querySelector('span');
                        if ((el.classList.contains('nav-link') || el.classList.contains('honors-tab')) && dict[key].includes('/>')) {
                            el.innerHTML = dict[key].replace('/>', '<span>/></span>');
                        } else if (span) {
                            span.textContent = dict[key];
                        } else {
                            el.textContent = dict[key];
                        }
                    }
                });
            };
            applyLanguage(localStorage.getItem('langIdx') ? parseInt(localStorage.getItem('langIdx')) : 0);
            langSelect.addEventListener('change', (e) => applyLanguage(parseInt(e.target.value)));
        }
    } catch (e) { console.error("Theme/Lang failed", e); }

    /* --- 5. Honors Overlay --- */
    try {
        const awardsBtn = document.getElementById('awards-btn');
        const awardsOverlay = document.getElementById('awards-overlay');
        const closeOverlay = document.querySelector('.close-overlay');
        if (awardsBtn && awardsOverlay) {
            awardsBtn.addEventListener('click', () => {
                awardsOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            const close = () => {
                awardsOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            };
            if (closeOverlay) closeOverlay.addEventListener('click', close);
            window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
        }
    } catch (e) { console.error("Honors failed", e); }

    /* --- 6. Stats & Extras --- */
    const visitorCountEl = document.getElementById('visitor-count');
    if (visitorCountEl) {
        fetch('https://api.counterapi.dev/v1/mug1sha-portfolio/visits/up')
            .then(res => res.json())
            .then(data => { visitorCountEl.textContent = data.count.toLocaleString(); })
            .catch(() => { visitorCountEl.textContent = 'Active'; });
    }
};

// Fire initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
