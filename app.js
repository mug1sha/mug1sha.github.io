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
        visitors: "Visitors"
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
        visitors: "Visiteurs"
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
        visitors: "Abarusura"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* --- 0. Preloader Removal --- */
    const preloader = document.getElementById('preloader');
    const hidePreloader = () => {
        console.log("Hiding preloader...");
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.visibility = 'hidden';
                preloader.style.display = 'none'; // Force remove
                document.querySelectorAll('.reveal-hero').forEach(el => el.classList.add('active'));
            }, 600);
        }
    };
    
    // Use window.onload to ensure images are ready
    window.onload = () => {
        console.log("Window loaded");
        hidePreloader();
    };

    // Safety fallback
    setTimeout(() => {
        console.log("Preloader fallback");
        hidePreloader();
    }, 4000); 

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

    /* --- 4. Intersection Observer for Unique Section Reveals --- */
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("Revealing section:", entry.target);
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    const revealSelectors = ['.reveal-work', '.reveal-skill', '.reveal-about', '.reveal-contact'];
    revealSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
    });

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
                const span = el.querySelector('span');
                
                // 1. Special case for nav links (e.g., "Start />")
                if(el.classList.contains('nav-link') || el.classList.contains('honors-tab')) {
                    if(dict[key].includes('/>')) {
                        el.innerHTML = dict[key].replace('/>', '<span>/></span>');
                    } else if (span) {
                        span.textContent = dict[key];
                    } else {
                        el.textContent = dict[key];
                    }
                } 
                // 2. Case for buttons with <span> inside (like resume-btn)
                else if (span) {
                    span.textContent = dict[key];
                } 
                // 3. Generic case
                else {
                    el.textContent = dict[key];
                }
            }
        });
    };

    /* --- 6. Awards Overlay Logic --- */
    const awardsBtn = document.getElementById('awards-btn');
    const awardsOverlay = document.getElementById('awards-overlay');
    const closeOverlay = document.querySelector('.close-overlay');

    if(awardsBtn && awardsOverlay) {
        awardsBtn.addEventListener('click', () => {
            awardsOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeOverlay.addEventListener('click', () => {
            awardsOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close on escape key
        window.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                awardsOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    applyLanguage(currentLangIdx);

    langSelect.addEventListener('change', (e) => {
        currentLangIdx = parseInt(e.target.value);
        applyLanguage(currentLangIdx);
    });

    /* --- 7. Gallery Carousel --- */
    const carousel = document.getElementById('gallery-carousel');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    let currentIndex = 2; // Start in the middle

    const updateCarousel = () => {
        // Shift to center the active item
        // Calculation: center shift = (wrapperWidth / 2) - (itemWidth / 2) - (index * itemWidth + gap)
        const offset = (carousel.parentElement.clientWidth / 2) - (400 / 2) - (currentIndex * 330);
        carousel.style.transform = `translateX(${offset}px)`;
        
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    };

    if(carousel) {
        nextBtn.addEventListener('click', () => {
            if(currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if(currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        // Initial setup
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

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
