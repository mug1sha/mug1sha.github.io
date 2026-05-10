const languageDetails = {
    EN: { code: 'en', label: 'English' },
    FR: { code: 'fr', label: 'French' },
    RW: { code: 'rw', label: 'Kinyarwanda' }
};

const staticTranslations = {
    EN: {
        nav_start: 'Start />',
        nav_work: 'Work />',
        nav_services: 'Skills />',
        nav_about: 'About />',
        nav_gallery: 'Gallery />',
        nav_contact: 'Contact />',
        nav_honors: 'Honors & Awards',
        awards_title: 'Honors & Certifications',
        award_1_title: 'CompTIA Security+',
        award_1_desc: 'Industry-standard certification for cybersecurity professionals. (In Progress)',
        award_2_title: 'Cisco Intro to Cyber',
        award_2_desc: 'Foundational knowledge in network security and threat management.',
        award_3_title: 'Python for Security',
        award_3_desc: 'Specialized certification for building automated security tools and scripts.',
        hero_intro: 'Hi, my name is <strong class="cyan">Godson Mug1sha</strong><br>',
        hero_i: 'I am a',
        hero_desc: 'I architect resilient backend systems, engineer advanced Python automation, and integrate robust security practices from day zero. <b>Uncompromising on performance and clean code.</b>',
        hero_cta_projects: 'View Projects <div class="btn2"></div>',
        hero_scroll: 'SCROLL down \\',
        status_available: 'Open to Opportunities',
        work_subtitle: 'Selected programming & automation projects...',
        git_contributions: 'Daily Open Source Contributions',
        services_subtitle: 'Hacker-mindset applied to enterprise systems.',
        gallery_kicker: 'VISUAL ARCHIVE',
        gallery_title: 'Moments Captured, Stories Told.',
        gallery_description: 'A cinematic horizontal lineup where each image drifts through holographic light, bends through depth, and sharpens into focus as it reaches center stage.',
        about_bio: '`Passionate digital creator blending code and cybersecurity to build smart, secure, and high-impact solutions. Focused on results, innovation, and resilience.`',
        download_resume: 'Download Resume',
        find_me_on: 'Find me on:',
        contact_send_message: 'Send a Message',
        viewers: 'viewers'
    },
    FR: {
        nav_start: 'Accueil />',
        nav_work: 'Projets />',
        nav_services: 'Compétences />',
        nav_about: 'À propos />',
        nav_gallery: 'Galerie />',
        nav_contact: 'Contact />',
        nav_honors: 'Distinctions & Récompenses',
        awards_title: 'Distinctions & Certifications',
        award_1_title: 'CompTIA Security+',
        award_1_desc: 'Certification de référence pour les professionnels de la cybersécurité. (En cours)',
        award_2_title: 'Introduction de Cisco à la cybersécurité',
        award_2_desc: 'Connaissances fondamentales en sécurité réseau et en gestion des menaces.',
        award_3_title: 'Python pour la sécurité',
        award_3_desc: 'Certification spécialisée pour créer des outils et scripts de sécurité automatisés.',
        hero_intro: 'Bonjour, je m\'appelle <strong class="cyan">Godson Mug1sha</strong><br>',
        hero_i: 'Je suis',
        hero_desc: 'Je conçois des systèmes backend résilients, développe des automatisations Python avancées et intègre des pratiques de sécurité robustes dès le départ. <b>Sans compromis sur les performances et la qualité du code.</b>',
        hero_cta_projects: 'Voir les projets <div class="btn2"></div>',
        hero_scroll: 'FAIRE DÉFILER \\',
        status_available: 'Ouvert aux opportunités',
        work_subtitle: 'Projets sélectionnés en programmation et automatisation...',
        git_contributions: 'Contributions open source quotidiennes',
        services_subtitle: 'Un état d’esprit hacker appliqué aux systèmes d’entreprise.',
        gallery_kicker: 'ARCHIVE VISUELLE',
        gallery_title: 'Moments capturés, histoires racontées.',
        gallery_description: 'Une composition horizontale cinématographique où chaque image traverse une lumière holographique, prend de la profondeur et devient nette en arrivant au centre.',
        about_bio: '`Créateur numérique passionné, j’unis code et cybersécurité pour construire des solutions intelligentes, sûres et à fort impact. Axé sur les résultats, l’innovation et la résilience.`',
        download_resume: 'Télécharger le CV',
        find_me_on: 'Retrouvez-moi sur :',
        contact_send_message: 'Envoyer un message',
        viewers: 'vues'
    },
    RW: {
        nav_start: 'Ahabanza />',
        nav_work: 'Imishinga />',
        nav_services: 'Ubumenyi />',
        nav_about: 'Ibyanjye />',
        nav_gallery: 'Amafoto />',
        nav_contact: 'Twandikire />',
        nav_honors: 'Ibihembo n\'Ishimwe',
        awards_title: 'Ibihembo n\'Impamyabushobozi',
        award_1_title: 'CompTIA Security+',
        award_1_desc: 'Impamyabushobozi yizewe ku bantu bakora mu by\'umutekano wo kuri interneti. (Iracyakorwa)',
        award_2_title: 'Cisco Intangiriro ya Cyber',
        award_2_desc: 'Ubumenyi bw\'ibanze mu mutekano w\'urusobe no gucunga ibikangisho.',
        award_3_title: 'Python mu mutekano',
        award_3_desc: 'Impamyabushobozi yihariye mu gukora ibikoresho n\'amascript by\'umutekano byikoresha.',
        hero_intro: 'Muraho, nitwa <strong class="cyan">Godson Mug1sha</strong><br>',
        hero_i: 'Ndi',
        hero_desc: 'Nubaka sisitemu za backend zikomeye, ngategura automation ya Python igezweho kandi ngashyiramo umutekano ukomeye kuva ku ntangiriro. <b>Ntabwo nteshuka ku mikorere myiza no kuri code isukuye.</b>',
        hero_cta_projects: 'Reba imishinga <div class="btn2"></div>',
        hero_scroll: 'MANUKA \\',
        status_available: 'Niteguye amahirwe mashya',
        work_subtitle: 'Imishinga yatoranyijwe ya programming na automation...',
        git_contributions: 'Imisanzu ya open source ya buri munsi',
        services_subtitle: 'Imitekerereze ya hacker ikoreshwa muri sisitemu z\'ibigo.',
        gallery_kicker: 'VISUAL ARCHIVE',
        gallery_title: 'Ibihe byafashwe, inkuru zivugwa.',
        gallery_description: 'Umurongo w\'amashusho wa sinema aho buri foto inyura mu mucyo wa holographic, igafata ubujyakuzimu kandi ikagaragara neza iyo igeze hagati.',
        about_bio: '`Umuremyi wa digital ukunda guhuza code na cybersecurity kugira ngo yubake ibisubizo byiza, bifite umutekano kandi bifite ingaruka nziza. Nibanda ku musaruro, udushya no gukomera.`',
        download_resume: 'Kuramo CV',
        find_me_on: 'Nsange hano:',
        contact_send_message: 'Ohereza ubutumwa',
        viewers: 'abarebye'
    }
};

const themeIcons = {
    dark: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path>
        </svg>
    `,
    light: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2"></circle>
            <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"></path>
        </svg>
    `
};

const curatedPageTranslations = {
    FR: {
        'Hi, my name is <strong class="cyan">Godson Mug1sha</strong><br>': 'Bonjour, je m\'appelle <strong class="cyan">Godson Mug1sha</strong><br>',
        'Honors & Awards': 'Distinctions & Récompenses',
        'Honors & Certifications': 'Distinctions & Certifications',
        'Industry-standard certification for cybersecurity professionals. (In Progress)': 'Certification de référence pour les professionnels de la cybersécurité. (En cours)',
        'Cisco Intro to Cyber': 'Introduction de Cisco à la cybersécurité',
        'Foundational knowledge in network security and threat management.': 'Connaissances fondamentales en sécurité réseau et en gestion des menaces.',
        'Python for Security': 'Python pour la sécurité',
        'Specialized certification for building automated security tools and scripts.': 'Certification spécialisée pour créer des outils et scripts de sécurité automatisés.',
        'Start />': 'Accueil />',
        'Work />': 'Projets />',
        'Skills />': 'Compétences />',
        'About />': 'À propos />',
        'Gallery />': 'Galerie />',
        'Contact />': 'Contact />',
        'I am a': 'Je suis',
        'I architect resilient backend systems, engineer advanced Python automation, and integrate robust security practices from day zero. <b>Uncompromising on performance and clean code.</b>': 'Je conçois des systèmes backend résilients, développe des automatisations Python avancées et intègre des pratiques de sécurité robustes dès le départ. <b>Sans compromis sur les performances et la qualité du code.</b>',
        'View Projects <div class="btn2"></div>': 'Voir les projets <div class="btn2"></div>',
        'Download Resume': 'Télécharger le CV',
        'SCROLL down \\': 'FAIRE DÉFILER \\',
        'Open to Opportunities': 'Ouvert aux opportunités',
        'Selected programming & automation projects...': 'Projets sélectionnés en programmation et automatisation...',
        '01 <span class="arr cyan">—</span> Fullstack': '01 <span class="arr cyan">—</span> Full Stack',
        '<strong>Problem:</strong> Outdated, cluttered websites that fail to capture attention or guide customers effectively.': '<strong>Problème :</strong> Des sites web dépassés et encombrés qui ne captent pas l’attention et ne guident pas efficacement les clients.',
        '<strong>Solution:</strong> A modern, visually appealing redesign with intuitive navigation and clear product organization to turn visitors into confident buyers.': '<strong>Solution :</strong> Une refonte moderne et visuellement attractive avec une navigation intuitive et une organisation claire des produits pour transformer les visiteurs en acheteurs confiants.',
        '<span class="cyan">➜ Engagement:</span> Increased<br><span class="cyan">➜ Performance:</span> Upgraded': '<span class="cyan">➜ Engagement :</span> Augmenté<br><span class="cyan">➜ Performance :</span> Améliorée',
        'View Repo <div class="btn2"></div>': 'Voir le dépôt <div class="btn2"></div>',
        'Live Demo <div class="btn2"></div>': 'Démo en direct <div class="btn2"></div>',
        '02 <span class="arr cyan">—</span> Full Stack': '02 <span class="arr cyan">—</span> Full Stack',
        '<strong>Architecture:</strong> Villas is a modern real estate platform designed to showcase premium properties like villas, penthouses, and apartments in a clean and engaging way.': '<strong>Architecture :</strong> Villas est une plateforme immobilière moderne conçue pour présenter des biens premium comme des villas, penthouses et appartements de manière claire et engageante.',
        '<strong>Solution:</strong> It allows users to explore listings, schedule visits, and connect directly with sellers with ease. Built for both buyers and admins, it combines simplicity, trust, and smart management in one seamless experience.': '<strong>Solution :</strong> Elle permet aux utilisateurs d’explorer les annonces, planifier des visites et contacter directement les vendeurs facilement. Conçue pour les acheteurs comme pour les administrateurs, elle combine simplicité, confiance et gestion intelligente.',
        '<span class="cyan">➜ User Experience:</span> Prioritized<br><span class="cyan">➜ Scalability:</span> Optimized': '<span class="cyan">➜ Expérience utilisateur :</span> Priorisée<br><span class="cyan">➜ Scalabilité :</span> Optimisée',
        '03 <span class="arr cyan">—</span> Security Tool': '03 <span class="arr cyan">—</span> Outil de sécurité',
        '<strong>Problem:</strong> Increasing rate of sophisticated phishing attacks evading standard filters.': '<strong>Problème :</strong> Hausse des attaques de phishing sophistiquées qui contournent les filtres standards.',
        '<strong>Solution:</strong> A Python-based ML heuristic scanner that analyzes URLs for brand impersonation and malicious payloads.': '<strong>Solution :</strong> Un scanner heuristique basé sur Python et le machine learning qui analyse les URL pour détecter l’usurpation de marque et les charges malveillantes.',
        '<span class="cyan">➜ Detection Rate:</span> 98.4%<br><span class="cyan">➜ Latency:</span> &lt; 200ms': '<span class="cyan">➜ Taux de détection :</span> 98,4 %<br><span class="cyan">➜ Latence :</span> &lt; 200 ms',
        '04 <span class="arr cyan">—</span> Backend Infrastructure': '04 <span class="arr cyan">—</span> Infrastructure backend',
        '<strong>Architecture:</strong> FastAPI REST endpoints with JWT role-based access control and rate-limiting.': '<strong>Architecture :</strong> Endpoints REST FastAPI avec contrôle d’accès par rôles via JWT et limitation de débit.',
        '<strong>Security:</strong> OAuth2 compliance, Bcrypt hashing, Redis-backed brute-force prevention.': '<strong>Sécurité :</strong> Conformité OAuth2, hachage Bcrypt et prévention des attaques par force brute avec Redis.',
        '<span class="cyan">➜ Throughput:</span> 5k Req/Sec<br><span class="cyan">➜ Auth Flow:</span> &lt; 50ms': '<span class="cyan">➜ Débit :</span> 5k req/s<br><span class="cyan">➜ Flux d’authentification :</span> &lt; 50 ms',
        '05 <span class="arr cyan">—</span> Enterprise Automation': '05 <span class="arr cyan">—</span> Automatisation d’entreprise',
        '<strong>Problem:</strong> Manual and error-prone email dispatch for daily operational reports.': '<strong>Problème :</strong> Envoi manuel d’emails, lent et sujet aux erreurs, pour les rapports opérationnels quotidiens.',
        '<strong>Solution:</strong> Highly concurrent Python worker that formats logic, injects secure variables, and dispatches via robust SMTP servers.': '<strong>Solution :</strong> Un worker Python hautement concurrent qui prépare la logique, injecte des variables sécurisées et envoie via des serveurs SMTP robustes.',
        '<span class="cyan">➜ Delivery Rate:</span> 99.9%<br><span class="cyan">➜ Scale:</span> 10k+ Emails/Day<br><span class="cyan">👁️ Viewers:</span> 100': '<span class="cyan">➜ Taux de livraison :</span> 99,9 %<br><span class="cyan">➜ Échelle :</span> 10k+ emails/jour<br><span class="cyan">👁️ Vues :</span> 100',
        'Daily Open Source Contributions': 'Contributions open source quotidiennes',
        'Hacker-mindset applied to enterprise systems.': 'Un état d’esprit hacker appliqué aux systèmes d’entreprise.',
        'Why hire me?': 'Pourquoi me recruter ?',
        '<strong>Security First:</strong> I write code assuming it will be attacked. Zero-trust principles applied.': '<strong>Sécurité d’abord :</strong> J’écris du code en supposant qu’il sera attaqué. Principes de confiance zéro appliqués.',
        '<strong>Scalable Automation:</strong> I build pipelines that eliminate hours of manual work without failing under load.': '<strong>Automatisation scalable :</strong> Je construis des pipelines qui éliminent des heures de travail manuel sans échouer sous charge.',
        '<strong>Full Lifecycle Ownership:</strong> From architecture design to seamless deployment and monitoring.': '<strong>Prise en charge du cycle complet :</strong> De la conception de l’architecture au déploiement et au monitoring.',
        '<strong>Performance Obsessed:</strong> Latency is the enemy. Clean algorithms and optimal queries always.': '<strong>Obsédé par la performance :</strong> La latence est l’ennemie. Des algorithmes propres et des requêtes optimales, toujours.',
        'CERTIFICATIONS': 'CERTIFICATIONS',
        'Cybersecurity Intro (Cisco)': 'Introduction à la cybersécurité (Cisco)',
        'COMMITS': 'COMMITS',
        '500+ across 15+ Repositories': '500+ sur 15+ dépôts',
        'Focus: Backend & Security': 'Focus : Backend & sécurité',
        'Backend Architecture': 'Architecture backend',
        '<span class="cyan">➜</span> RESTful APIs & Microservices': '<span class="cyan">➜</span> API RESTful & microservices',
        '<span class="cyan">➜</span> JWT & OAuth2 Security': '<span class="cyan">➜</span> Sécurité JWT & OAuth2',
        'Cybersecurity': 'Cybersécurité',
        '<span class="cyan">➜</span> Penetration Testing / Auditing': '<span class="cyan">➜</span> Tests d’intrusion / audit',
        '<span class="cyan">➜</span> OWASP Top 10 Mitigation': '<span class="cyan">➜</span> Mitigation OWASP Top 10',
        '<span class="cyan">➜</span> SOC Analysis & Threat Intel': '<span class="cyan">➜</span> Analyse SOC & renseignement sur les menaces',
        'DevOps & Datastores': 'DevOps & bases de données',
        '<span class="cyan">➜</span> Docker Containerization': '<span class="cyan">➜</span> Conteneurisation Docker',
        '<span class="cyan">➜</span> CI/CD Pipelines (GitHub Actions)': '<span class="cyan">➜</span> Pipelines CI/CD (GitHub Actions)',
        '<span class="cyan">➜</span> Linux Environments / Bash': '<span class="cyan">➜</span> Environnements Linux / Bash',
        'Find me on:': 'Retrouvez-moi sur :',
        'Email /></span> godson.mugisha2015@gmail.com': 'Email /></span> godson.mugisha2015@gmail.com',
        'Phone /></span> +250 795009211': 'Téléphone /></span> +250 795009211',
        'Send a Message': 'Envoyer un message',
        'Your Name': 'Votre nom',
        'Your Email': 'Votre email',
        'Your Message': 'Votre message',
        'Send <div class="btn2"></div>': 'Envoyer <div class="btn2"></div>',
        '© 2026 Godson Mugisha. All rights reserved.': '© 2026 Godson Mugisha. Tous droits réservés.',
        'viewers': 'vues',
        'Chat with AI': 'Discuter avec l’IA',
        'Godson\'s AI': 'IA de Godson',
        'Online': 'En ligne',
        'Close Chat': 'Fermer le chat',
        'Hi! I\'m Godson\'s digital assistant. How can I help you today?': 'Bonjour ! Je suis l’assistant numérique de Godson. Comment puis-je vous aider aujourd’hui ?',
        'Skills': 'Compétences',
        'Projects': 'Projets',
        'Ask me something...': 'Posez-moi une question...',
        'Send Message': 'Envoyer le message',
        'Select Language': 'Choisir la langue',
        'Toggle Theme': 'Changer le thème'
    },
    RW: {
        'Hi, my name is <strong class="cyan">Godson Mug1sha</strong><br>': 'Muraho, nitwa <strong class="cyan">Godson Mug1sha</strong><br>',
        'Honors & Awards': 'Ibihembo n\'Ishimwe',
        'Honors & Certifications': 'Ibihembo n\'Impamyabushobozi',
        'Industry-standard certification for cybersecurity professionals. (In Progress)': 'Impamyabushobozi yizewe ku bantu bakora mu by\'umutekano wo kuri interneti. (Iracyakorwa)',
        'Cisco Intro to Cyber': 'Cisco Intangiriro ya Cyber',
        'Foundational knowledge in network security and threat management.': 'Ubumenyi bw\'ibanze mu mutekano w\'urusobe no gucunga ibikangisho.',
        'Python for Security': 'Python mu mutekano',
        'Specialized certification for building automated security tools and scripts.': 'Impamyabushobozi yihariye mu gukora ibikoresho n\'amascript by\'umutekano byikoresha.',
        'Start />': 'Ahabanza />',
        'Work />': 'Imishinga />',
        'Skills />': 'Ubumenyi />',
        'About />': 'Ibyanjye />',
        'Gallery />': 'Amafoto />',
        'Contact />': 'Twandikire />',
        'I am a': 'Ndi',
        'I architect resilient backend systems, engineer advanced Python automation, and integrate robust security practices from day zero. <b>Uncompromising on performance and clean code.</b>': 'Nubaka sisitemu za backend zikomeye, ngategura automation ya Python igezweho kandi ngashyiramo umutekano ukomeye kuva ku ntangiriro. <b>Ntabwo nteshuka ku mikorere myiza no kuri code isukuye.</b>',
        'View Projects <div class="btn2"></div>': 'Reba imishinga <div class="btn2"></div>',
        'Download Resume': 'Kuramo CV',
        'SCROLL down \\': 'MANUKA \\',
        'Open to Opportunities': 'Niteguye amahirwe mashya',
        'Selected programming & automation projects...': 'Imishinga yatoranyijwe ya programming na automation...',
        '01 <span class="arr cyan">—</span> Fullstack': '01 <span class="arr cyan">—</span> Full Stack',
        '<strong>Problem:</strong> Outdated, cluttered websites that fail to capture attention or guide customers effectively.': '<strong>Ikibazo:</strong> Imbuga za kera kandi zicucitse zidashobora gukurura abantu cyangwa kubayobora neza.',
        '<strong>Solution:</strong> A modern, visually appealing redesign with intuitive navigation and clear product organization to turn visitors into confident buyers.': '<strong>Igisubizo:</strong> Guhindura urubuga mu buryo bugezweho kandi bushimishije, bufite navigation yoroshye n\'imiterere y\'ibicuruzwa isobanutse kugira ngo abasuye bahinduke abakiriya bizeye.',
        '<span class="cyan">➜ Engagement:</span> Increased<br><span class="cyan">➜ Performance:</span> Upgraded': '<span class="cyan">➜ Uko abantu bakorana na rwo:</span> Byiyongereye<br><span class="cyan">➜ Imikorere:</span> Yarazamuwe',
        'View Repo <div class="btn2"></div>': 'Reba repo <div class="btn2"></div>',
        'Live Demo <div class="btn2"></div>': 'Reba demo <div class="btn2"></div>',
        '02 <span class="arr cyan">—</span> Full Stack': '02 <span class="arr cyan">—</span> Full Stack',
        '<strong>Architecture:</strong> Villas is a modern real estate platform designed to showcase premium properties like villas, penthouses, and apartments in a clean and engaging way.': '<strong>Imiterere:</strong> Villas ni urubuga rw\'imitungo rugezweho rwagenewe kwerekana inzu nziza nka villas, penthouses n\'apartments mu buryo busukuye kandi bushimishije.',
        '<strong>Solution:</strong> It allows users to explore listings, schedule visits, and connect directly with sellers with ease. Built for both buyers and admins, it combines simplicity, trust, and smart management in one seamless experience.': '<strong>Igisubizo:</strong> Rwemerera abakoresha kureba listings, guteganya gusura no kuvugana n\'abagurisha mu buryo bworoshye. Rwubakiwe abaguzi n\'abayobozi, ruhuza ubworoherane, icyizere n\'imicungire myiza.',
        '<span class="cyan">➜ User Experience:</span> Prioritized<br><span class="cyan">➜ Scalability:</span> Optimized': '<span class="cyan">➜ Uko abakoresha barwumva:</span> Byahawe umwanya wa mbere<br><span class="cyan">➜ Kwaguka:</span> Byanozwe',
        '03 <span class="arr cyan">—</span> Security Tool': '03 <span class="arr cyan">—</span> Igikoresho cy\'umutekano',
        '<strong>Problem:</strong> Increasing rate of sophisticated phishing attacks evading standard filters.': '<strong>Ikibazo:</strong> Ubwiyongere bw\'ibitero bya phishing bikomeye birenga filters zisanzwe.',
        '<strong>Solution:</strong> A Python-based ML heuristic scanner that analyzes URLs for brand impersonation and malicious payloads.': '<strong>Igisubizo:</strong> Scanner ya Python ikoresha machine learning na heuristics isuzuma URL kugira ngo imenye kwigana ibirango n\'ibyangiza.',
        '<span class="cyan">➜ Detection Rate:</span> 98.4%<br><span class="cyan">➜ Latency:</span> &lt; 200ms': '<span class="cyan">➜ Uko ibimenya:</span> 98.4%<br><span class="cyan">➜ Ubukererwe:</span> &lt; 200ms',
        '04 <span class="arr cyan">—</span> Backend Infrastructure': '04 <span class="arr cyan">—</span> Ibikorwaremezo bya backend',
        '<strong>Architecture:</strong> FastAPI REST endpoints with JWT role-based access control and rate-limiting.': '<strong>Imiterere:</strong> REST endpoints za FastAPI zifite igenzura rya access rishingiye ku roles za JWT na rate limiting.',
        '<strong>Security:</strong> OAuth2 compliance, Bcrypt hashing, Redis-backed brute-force prevention.': '<strong>Umutekano:</strong> Gukurikiza OAuth2, Bcrypt hashing, no guhagarika brute-force hifashishijwe Redis.',
        '<span class="cyan">➜ Throughput:</span> 5k Req/Sec<br><span class="cyan">➜ Auth Flow:</span> &lt; 50ms': '<span class="cyan">➜ Throughput:</span> 5k req/sec<br><span class="cyan">➜ Uko kwinjira bikorwa:</span> &lt; 50ms',
        '05 <span class="arr cyan">—</span> Enterprise Automation': '05 <span class="arr cyan">—</span> Automation y\'ikigo',
        '<strong>Problem:</strong> Manual and error-prone email dispatch for daily operational reports.': '<strong>Ikibazo:</strong> Kohereza emails buri munsi bikorwa n\'intoki kandi harimo amakosa menshi.',
        '<strong>Solution:</strong> Highly concurrent Python worker that formats logic, injects secure variables, and dispatches via robust SMTP servers.': '<strong>Igisubizo:</strong> Python worker ikorana n\'ibintu byinshi icyarimwe, itegura logic, ikongeramo secure variables kandi ikohereza ikoresheje SMTP servers zikomeye.',
        '<span class="cyan">➜ Delivery Rate:</span> 99.9%<br><span class="cyan">➜ Scale:</span> 10k+ Emails/Day<br><span class="cyan">👁️ Viewers:</span> 100': '<span class="cyan">➜ Uko zigerayo:</span> 99.9%<br><span class="cyan">➜ Ingano:</span> 10k+ emails ku munsi<br><span class="cyan">👁️ Abarebye:</span> 100',
        'Daily Open Source Contributions': 'Imisanzu ya open source ya buri munsi',
        'Hacker-mindset applied to enterprise systems.': 'Imitekerereze ya hacker ikoreshwa muri sisitemu z\'ibigo.',
        'Why hire me?': 'Kuki wankoresha?',
        '<strong>Security First:</strong> I write code assuming it will be attacked. Zero-trust principles applied.': '<strong>Umutekano mbere:</strong> Nandika code nzi ko ishobora kwibasirwa. Nkoresha amahame ya zero-trust.',
        '<strong>Scalable Automation:</strong> I build pipelines that eliminate hours of manual work without failing under load.': '<strong>Automation yaguka:</strong> Nubaka pipelines zikuraho amasaha menshi y\'akazi k\'intoki kandi zigakora neza no mu mubare munini.',
        '<strong>Full Lifecycle Ownership:</strong> From architecture design to seamless deployment and monitoring.': '<strong>Kwita ku buzima bwose bwa project:</strong> Kuva ku gishushanyo cya architecture kugeza kuri deployment na monitoring.',
        '<strong>Performance Obsessed:</strong> Latency is the enemy. Clean algorithms and optimal queries always.': '<strong>Nkunda performance:</strong> Latency ni ikibazo. Buri gihe mpitamo algorithms zisukuye na queries nziza.',
        'Cybersecurity Intro (Cisco)': 'Intangiriro ya cybersecurity (Cisco)',
        '500+ across 15+ Repositories': '500+ mu ma repositories 15+',
        'Focus: Backend & Security': 'Ibyibandwaho: Backend n\'umutekano',
        'Backend Architecture': 'Architecture ya backend',
        '<span class="cyan">➜</span> RESTful APIs & Microservices': '<span class="cyan">➜</span> RESTful APIs na microservices',
        '<span class="cyan">➜</span> JWT & OAuth2 Security': '<span class="cyan">➜</span> Umutekano wa JWT na OAuth2',
        'Cybersecurity': 'Cybersecurity',
        '<span class="cyan">➜</span> Penetration Testing / Auditing': '<span class="cyan">➜</span> Penetration testing / auditing',
        '<span class="cyan">➜</span> OWASP Top 10 Mitigation': '<span class="cyan">➜</span> Gukumira OWASP Top 10',
        '<span class="cyan">➜</span> SOC Analysis & Threat Intel': '<span class="cyan">➜</span> SOC analysis na threat intel',
        'DevOps & Datastores': 'DevOps n\'ububiko bw\'amakuru',
        '<span class="cyan">➜</span> Docker Containerization': '<span class="cyan">➜</span> Docker containerization',
        '<span class="cyan">➜</span> CI/CD Pipelines (GitHub Actions)': '<span class="cyan">➜</span> CI/CD pipelines (GitHub Actions)',
        '<span class="cyan">➜</span> Linux Environments / Bash': '<span class="cyan">➜</span> Linux environments / Bash',
        'Find me on:': 'Nsange hano:',
        'Phone /></span> +250 795009211': 'Telefone /></span> +250 795009211',
        'Send a Message': 'Ohereza ubutumwa',
        'Your Name': 'Amazina yawe',
        'Your Email': 'Email yawe',
        'Your Message': 'Ubutumwa bwawe',
        'Send <div class="btn2"></div>': 'Ohereza <div class="btn2"></div>',
        '© 2026 Godson Mugisha. All rights reserved.': '© 2026 Godson Mugisha. Uburenganzira bwose burabitswe.',
        'viewers': 'abarebye',
        'Chat with AI': 'Ganira na AI',
        'Godson\'s AI': 'AI ya Godson',
        'Online': 'Irahari',
        'Close Chat': 'Funga chat',
        'Hi! I\'m Godson\'s digital assistant. How can I help you today?': 'Muraho! Ndi umufasha wa Godson ku rubuga. Nagufasha iki uyu munsi?',
        'Skills': 'Ubumenyi',
        'Projects': 'Imishinga',
        'Contact': 'Twandikire',
        'Ask me something...': 'Umbaze ikibazo...',
        'Send Message': 'Ohereza ubutumwa',
        'Select Language': 'Hitamo ururimi',
        'Toggle Theme': 'Hindura insanganyamatsiko'
    }
};

const pageTranslationSelectors = [
    '[data-i18n]',
    '.hero-content .reveal-hero.delay-2 .subtitle',
    '.hero-btn-group a',
    '.scroll-bottom span',
    '#work .project-nav',
    '#work .project-info h3',
    '#work .project-info p',
    '#work .project-metrics',
    '#work .project-links a',
    '#work .terminal-body',
    '#services .proof-left h3',
    '#services .proof-left li',
    '#services .proof-right h4',
    '#services .proof-right p',
    '#services .skill-header h3',
    '#services .skill-list li',
    '#about .code-wrp .code-l',
    '#contact .social-link',
    '#contact .contact-form-section h2',
    '#contact .contact-form button',
    '.copyright',
    '#chatbot-title',
    '#chatbot-status',
    '#chatbot-welcome-message',
    '.qa-btn'
];

const pageTranslationAttributeTargets = [
    { selector: '.lang-switcher', attribute: 'aria-label' },
    { selector: '#chatbot-trigger', attribute: 'title' },
    { selector: '#close-chat', attribute: 'aria-label' },
    { selector: '#send-btn', attribute: 'aria-label' },
    { selector: '#chat-input', attribute: 'placeholder' },
    { selector: '#contact-form input[name="name"]', attribute: 'placeholder' },
    { selector: '#contact-form input[name="email"]', attribute: 'placeholder' },
    { selector: '#contact-form textarea[name="message"]', attribute: 'placeholder' }
];

const pageTranslationBatchSize = 18;
const pageTranslationCache = new Map();

const toDatasetKey = (attribute) => attribute
    .split('-')
    .map((part, index) => index === 0 ? part : `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');

const getSourceDatasetKey = (attribute) => {
    const normalized = toDatasetKey(attribute);
    return `source${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`;
};

const getTargetId = (element, prefix, index) => {
    if (!element.dataset.translateId) {
        element.dataset.translateId = `${prefix}-${index}-${Math.random().toString(36).slice(2, 8)}`;
    }

    return element.dataset.translateId;
};

const applyStaticTranslations = (langKey) => {
    const dictionary = staticTranslations[langKey] || staticTranslations.EN;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = dictionary[key];

        if (!value) return;

        if (el.classList.contains('nav-link') && value.includes('/>')) {
            const label = value.replace('/>', '').trim();
            el.innerHTML = `${label} <span>/></span>`;
            return;
        }

        if (key === 'download_resume') {
            const span = el.querySelector('span');
            if (span) {
                span.textContent = value;
            } else {
                el.textContent = value;
            }
            return;
        }

        if (value.includes('<') || value.includes('`')) {
            el.innerHTML = value;
            return;
        }

        el.textContent = value;
    });
};

const getPageTranslationTargets = () => {
    const seenHtmlElements = new Set();
    const seenAttributeTargets = new Set();
    const targets = [];

    pageTranslationSelectors.forEach((selector, selectorIndex) => {
        document.querySelectorAll(selector).forEach(el => {
            if (seenHtmlElements.has(el)) return;
            seenHtmlElements.add(el);

            const source = (el.dataset.sourceHtml || el.innerHTML || '').trim();
            if (!source) return;

            el.dataset.sourceHtml = source;
            targets.push({
                id: getTargetId(el, 'html', selectorIndex),
                type: 'html',
                element: el,
                source
            });
        });
    });

    pageTranslationAttributeTargets.forEach(({ selector, attribute }, selectorIndex) => {
        document.querySelectorAll(selector).forEach(el => {
            const uniqueKey = `${selectorIndex}:${attribute}:${getTargetId(el, 'attr', selectorIndex)}`;
            if (seenAttributeTargets.has(uniqueKey)) return;
            seenAttributeTargets.add(uniqueKey);

            const datasetKey = getSourceDatasetKey(attribute);
            const source = (el.dataset[datasetKey] || el.getAttribute(attribute) || '').trim();
            if (!source) return;

            el.dataset[datasetKey] = source;
            targets.push({
                id: `${el.dataset.translateId}:${attribute}`,
                type: 'attribute',
                attribute,
                element: el,
                datasetKey,
                source
            });
        });
    });

    return targets;
};

const applyPageTranslationMap = (translationMap) => {
    getPageTranslationTargets().forEach(target => {
        const translatedValue = translationMap[target.id];

        if (!translatedValue) {
            if (target.type === 'html' && target.element.dataset.sourceHtml) {
                target.element.innerHTML = target.element.dataset.sourceHtml;
            } else if (target.type === 'attribute' && target.element.dataset[target.datasetKey]) {
                target.element.setAttribute(target.attribute, target.element.dataset[target.datasetKey]);
            }

            return;
        }

        if (target.type === 'html') {
            target.element.innerHTML = translatedValue;
            return;
        }

        target.element.setAttribute(target.attribute, translatedValue);
    });
};

const restorePageEnglish = () => {
    getPageTranslationTargets().forEach(target => {
        if (target.type === 'html' && target.element.dataset.sourceHtml) {
            target.element.innerHTML = target.element.dataset.sourceHtml;
            return;
        }

        if (target.type === 'attribute' && target.element.dataset[target.datasetKey]) {
            target.element.setAttribute(target.attribute, target.element.dataset[target.datasetKey]);
        }
    });
};

const chunkTargets = (targets, size) => {
    const chunks = [];

    for (let index = 0; index < targets.length; index += size) {
        chunks.push(targets.slice(index, index + size));
    }

    return chunks;
};

const buildCuratedTranslationMap = (langKey, targets) => {
    const curatedMap = curatedPageTranslations[langKey] || {};
    const translationMap = {};

    targets.forEach((target) => {
        const curatedTranslation = curatedMap[target.source];
        if (curatedTranslation) {
            translationMap[target.id] = curatedTranslation;
        }
    });

    return translationMap;
};

const translatePageContent = async (langKey) => {
    const targets = getPageTranslationTargets();

    if (!targets.length) return;

    if (langKey === 'EN') {
        restorePageEnglish();
        return;
    }

    const cacheKey = `page-copy:${langKey}`;
    if (pageTranslationCache.has(cacheKey)) {
        applyPageTranslationMap(pageTranslationCache.get(cacheKey));
        return;
    }

    try {
        const translationMap = buildCuratedTranslationMap(langKey, targets);
        const curatedMap = curatedPageTranslations[langKey] || {};
        const unresolvedTargets = [];

        targets.forEach((target) => {
            const curatedTranslation = curatedMap[target.source];

            if (curatedTranslation) {
                translationMap[target.id] = curatedTranslation;
            } else {
                unresolvedTargets.push(target);
            }
        });

        const batches = chunkTargets(unresolvedTargets, pageTranslationBatchSize);

        for (const batch of batches) {
            const response = await fetch('/api/groq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mode: 'translate_page',
                    targetLanguage: languageDetails[langKey]?.label || 'English',
                    items: batch.map(({ id, type, source }) => ({
                        id,
                        format: type === 'html' ? 'html' : 'text',
                        content: source
                    }))
                })
            });

            if (!response.ok) {
                console.warn(`Translation request failed with status ${response.status}`);
                continue;
            }

            const data = await response.json();

            (data.items || []).forEach(item => {
                const translatedValue = item?.translatedContent || item?.content || item?.translatedHtml;

                if (item?.id && translatedValue) {
                    translationMap[item.id] = translatedValue;
                }
            });
        }

        if (!Object.keys(translationMap).length) {
            throw new Error('Translation response was empty.');
        }

        pageTranslationCache.set(cacheKey, translationMap);
        applyPageTranslationMap(translationMap);
    } catch (error) {
        console.warn('Page translation unavailable, keeping best available translated copy.', error);
        applyPageTranslationMap(buildCuratedTranslationMap(langKey, targets));
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
        const langSwitcher = document.querySelector('.lang-switcher');
        const langSegments = Array.from(document.querySelectorAll('.lang-segment'));
        const langs = ['EN', 'FR', 'RW'];
        let currentLangKey = 'EN';

        if (themeBtn) {
            const themeIcon = themeBtn.querySelector('.theme-icon');
            const applyTheme = (theme) => {
                document.documentElement.setAttribute('data-theme', theme);
                if (themeIcon) {
                    themeIcon.innerHTML = theme === 'dark' ? themeIcons.light : themeIcons.dark;
                }
                localStorage.setItem('theme', theme);
            };
            applyTheme(localStorage.getItem('theme') || 'dark');
            themeBtn.addEventListener('click', () => {
                const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }

        if (langSwitcher && langSegments.length) {
            const syncLanguageSegments = (langKey) => {
                langSegments.forEach(segment => {
                    const isActive = segment.dataset.lang === langKey;
                    segment.classList.toggle('active', isActive);
                    segment.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                    segment.disabled = isActive;
                });
            };

            const applyLanguage = async (langKey) => {
                currentLangKey = langs.includes(langKey) ? langKey : 'EN';
                const langIdx = langs.indexOf(currentLangKey);
                document.documentElement.lang = languageDetails[currentLangKey]?.code || 'en';
                document.documentElement.dataset.language = currentLangKey;
                localStorage.setItem('langIdx', String(langIdx < 0 ? 0 : langIdx));
                applyStaticTranslations(currentLangKey);
                langSegments.forEach(segment => {
                    segment.disabled = true;
                });
                syncLanguageSegments(currentLangKey);

                document.dispatchEvent(new CustomEvent('portfolio-languagechange', {
                    detail: {
                        langKey: currentLangKey,
                        ...languageDetails[currentLangKey]
                    }
                }));

                try {
                    await translatePageContent(currentLangKey);
                } finally {
                    syncLanguageSegments(currentLangKey);
                    langSegments.forEach(segment => {
                        segment.disabled = segment.dataset.lang === currentLangKey;
                    });
                }
            };

            langSegments.forEach(segment => {
                segment.addEventListener('click', async () => {
                    await applyLanguage(segment.dataset.lang || 'EN');
                });
            });

            const savedLangIdx = parseInt(localStorage.getItem('langIdx') || '0', 10);
            const initialLangKey = langs[savedLangIdx] || 'EN';
            syncLanguageSegments(initialLangKey);
            applyLanguage(initialLangKey);
        }
    } catch (e) { console.error("Theme/Lang failed", e); }

    /* --- 5. Gallery --- */
    try {
        const galleryScrollZone = document.getElementById('gallery-scroll-zone');
        const galleryStage = document.getElementById('gallery-stage');
        const galleryTrack = document.getElementById('gallery-track');
        const galleryCards = Array.from(document.querySelectorAll('.gallery-panel'));
        const galleryDots = document.getElementById('gallery-dots');
        const galleryCurrentIndex = document.getElementById('gallery-current-index');
        const galleryTotalCount = document.getElementById('gallery-total-count');
        const galleryProgressBar = document.getElementById('gallery-progress-bar');
        const galleryRunwayPrev = document.getElementById('gallery-runway-prev');
        const galleryRunwayNext = document.getElementById('gallery-runway-next');
        const galleryLightbox = document.getElementById('gallery-lightbox');
        const galleryLightboxImage = document.getElementById('gallery-lightbox-image');
        const galleryLightboxCaption = document.getElementById('gallery-lightbox-caption');
        const galleryPrevBtn = document.getElementById('gallery-lightbox-prev');
        const galleryNextBtn = document.getElementById('gallery-lightbox-next');
        const modalCloseTargets = Array.from(document.querySelectorAll('[data-gallery-close]'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let activeGalleryIndex = 0;
        let galleryTicking = false;
        let galleryCurrentX = 0;
        let galleryTargetX = 0;
        let galleryAnimationFrame = 0;

        const galleryNavDots = galleryDots ? galleryCards.map((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'gallery-dot';
            dot.setAttribute('aria-label', `Focus gallery image ${index + 1}`);
            dot.addEventListener('click', () => focusGalleryIndex(index));
            galleryDots.appendChild(dot);
            return dot;
        }) : [];

        if (galleryTotalCount) {
            galleryTotalCount.textContent = String(galleryCards.length).padStart(2, '0');
        }

        const syncGalleryHud = (index) => {
            const safeIndex = ((index % galleryCards.length) + galleryCards.length) % galleryCards.length;
            if (galleryCurrentIndex) {
                galleryCurrentIndex.textContent = String(safeIndex + 1).padStart(2, '0');
            }
            if (galleryProgressBar) {
                galleryProgressBar.style.width = `${((safeIndex + 1) / galleryCards.length) * 100}%`;
            }
            galleryNavDots.forEach((dot, dotIndex) => {
                dot.classList.toggle('is-active', dotIndex === safeIndex);
            });
        };

        const updateLightbox = (index) => {
            const safeIndex = ((index % galleryCards.length) + galleryCards.length) % galleryCards.length;
            const card = galleryCards[safeIndex];
            if (!card || !galleryLightboxImage) return;

            activeGalleryIndex = safeIndex;
            galleryLightboxImage.src = card.dataset.image || '';
            galleryLightboxImage.alt = card.dataset.alt || `Gallery image ${safeIndex + 1}`;
            if (galleryLightboxCaption) {
                const label = card.querySelector('.gallery-image-label')?.textContent?.trim() || `Image ${safeIndex + 1}`;
                galleryLightboxCaption.textContent = `${label} · ${safeIndex + 1} / ${galleryCards.length}`;
            }
        };

        const focusGalleryIndex = (index) => {
            const safeIndex = ((index % galleryCards.length) + galleryCards.length) % galleryCards.length;
            const targetCard = galleryCards[safeIndex];
            if (!targetCard || !galleryStage || !galleryTrack) return;

            const mobileMode = window.innerWidth <= 768;
            if (mobileMode) {
                const targetLeft = targetCard.offsetLeft - ((galleryStage.clientWidth - targetCard.offsetWidth) / 2);
                galleryStage.scrollTo({
                    left: Math.max(targetLeft, 0),
                    behavior: reduceMotion ? 'auto' : 'smooth'
                });
                return;
            }

            const maxTranslate = Math.max(galleryTrack.scrollWidth - galleryStage.clientWidth, 0);
            const centeredTrackOffset = targetCard.offsetLeft + (targetCard.offsetWidth / 2) - (galleryStage.clientWidth / 2);
            const clampedOffset = Math.min(Math.max(centeredTrackOffset, 0), maxTranslate);
            const scrollDistance = Math.max(galleryScrollZone.offsetHeight - window.innerHeight, 1);
            const zoneTop = window.scrollY + galleryScrollZone.getBoundingClientRect().top;
            const progress = maxTranslate === 0 ? 0 : clampedOffset / maxTranslate;
            const targetScrollTop = zoneTop + (scrollDistance * progress);

            window.scrollTo({
                top: targetScrollTop,
                behavior: reduceMotion ? 'auto' : 'smooth'
            });
        };

        const openGalleryLightbox = (index) => {
            if (!galleryLightbox) return;
            updateLightbox(index);
            galleryLightbox.classList.add('is-open');
            galleryLightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };

        const closeGalleryLightbox = () => {
            if (!galleryLightbox) return;
            galleryLightbox.classList.remove('is-open');
            galleryLightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        const showNextImage = () => updateLightbox(activeGalleryIndex + 1);
        const showPrevImage = () => updateLightbox(activeGalleryIndex - 1);

        const renderGalleryRunway = () => {
            galleryAnimationFrame = 0;
            galleryTicking = false;
            if (!galleryScrollZone || !galleryStage || !galleryTrack || !galleryCards.length) return;

            const mobileMode = window.innerWidth <= 768;
            const stageRect = galleryStage.getBoundingClientRect();
            const stageCenter = stageRect.left + stageRect.width / 2;
            let trackOffset;

            if (!mobileMode) {
                const zoneRect = galleryScrollZone.getBoundingClientRect();
                const scrollDistance = Math.max(galleryScrollZone.offsetHeight - window.innerHeight, 1);
                const rawProgress = (-zoneRect.top) / scrollDistance;
                const progress = Math.min(Math.max(rawProgress, 0), 1);
                const maxTranslate = Math.max(galleryTrack.scrollWidth - galleryStage.clientWidth, 0);
                galleryTargetX = -maxTranslate * progress;
                if (reduceMotion) {
                    galleryCurrentX = galleryTargetX;
                } else {
                    galleryCurrentX += (galleryTargetX - galleryCurrentX) * 0.11;
                }
                trackOffset = galleryCurrentX;
                galleryTrack.style.transform = `translate3d(${trackOffset}px, 0, 0)`;
            } else {
                trackOffset = -galleryStage.scrollLeft;
                galleryCurrentX = trackOffset;
                galleryTargetX = trackOffset;
                galleryTrack.style.transform = '';
            }

            let nearestIndex = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;

            galleryCards.forEach((card, index) => {
                const cardCenter = stageRect.left + card.offsetLeft + card.offsetWidth / 2 + trackOffset;
                const distance = cardCenter - stageCenter;
                const normalized = Math.min(Math.abs(distance) / (stageRect.width * 0.48), 1.35);
                const direction = distance >= 0 ? 1 : -1;
                const rotateY = mobileMode ? 0 : direction * Math.min(normalized * 30, 30);
                const scale = mobileMode ? 1 : 1.1 - Math.min(normalized * 0.28, 0.3);
                const depth = mobileMode ? 0 : 120 - Math.min(Math.pow(normalized, 1.08) * 250, 250);
                const curveDrop = mobileMode ? 0 : Math.min(Math.pow(normalized, 1.15) * 92, 92);
                const sideShift = mobileMode ? 0 : direction * Math.min(Math.pow(normalized, 1.1) * 22, 22);
                const opacity = mobileMode ? 1 : 1 - Math.min(normalized * 0.34, 0.42);
                const brightness = mobileMode ? 1 : 1 - Math.min(normalized * 0.22, 0.24);
                const saturation = mobileMode ? 1 : 1 - Math.min(normalized * 0.18, 0.22);

                card.style.setProperty('--rotate-factor', `${rotateY}deg`);
                card.style.setProperty('--scale-factor', `${Math.max(scale, 0.8)}`);
                card.style.setProperty('--depth-shift', `${depth}px`);
                card.style.setProperty('--curve-drop', `${curveDrop}px`);
                card.style.setProperty('--curve-slide', `${sideShift}px`);
                card.style.setProperty('--panel-opacity', `${opacity}`);
                card.style.setProperty('--image-brightness', `${brightness}`);
                card.style.setProperty('--panel-saturation', `${Math.max(saturation, 0.82)}`);

                if (Math.abs(distance) < nearestDistance) {
                    nearestDistance = Math.abs(distance);
                    nearestIndex = index;
                }
            });

            activeGalleryIndex = nearestIndex;
            galleryCards.forEach((card, index) => {
                card.classList.toggle('is-active', index === nearestIndex);
                card.classList.toggle('is-near', Math.abs(index - nearestIndex) === 1);
                card.classList.toggle('is-far', Math.abs(index - nearestIndex) >= 2);
            });
            syncGalleryHud(nearestIndex);

            if (!reduceMotion && !mobileMode && Math.abs(galleryTargetX - galleryCurrentX) > 0.5) {
                requestGalleryRunwayUpdate();
            }
        };

        const requestGalleryRunwayUpdate = () => {
            if (galleryTicking || galleryAnimationFrame) return;
            galleryTicking = true;
            galleryAnimationFrame = window.requestAnimationFrame(renderGalleryRunway);
        };

        galleryCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                openGalleryLightbox(index);
            });

            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openGalleryLightbox(index);
                }
            });

            if (!reduceMotion) {
                card.addEventListener('mousemove', (event) => {
                    const bounds = card.getBoundingClientRect();
                    const x = (event.clientX - bounds.left) / bounds.width;
                    const y = (event.clientY - bounds.top) / bounds.height;
                    const rotateY = (x - 0.5) * 12;
                    const rotateX = (0.5 - y) * 12;

                    card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
                    card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.setProperty('--tilt-x', '0deg');
                    card.style.setProperty('--tilt-y', '0deg');
                });
            }
        });

        modalCloseTargets.forEach((target) => {
            target.addEventListener('click', closeGalleryLightbox);
        });

        if (galleryRunwayPrev) {
            galleryRunwayPrev.addEventListener('click', () => focusGalleryIndex(activeGalleryIndex - 1));
        }
        if (galleryRunwayNext) {
            galleryRunwayNext.addEventListener('click', () => focusGalleryIndex(activeGalleryIndex + 1));
        }
        if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', showPrevImage);
        if (galleryNextBtn) galleryNextBtn.addEventListener('click', showNextImage);

        if (galleryStage) {
            galleryStage.addEventListener('scroll', requestGalleryRunwayUpdate, { passive: true });
        }
        window.addEventListener('scroll', requestGalleryRunwayUpdate, { passive: true });
        window.addEventListener('resize', requestGalleryRunwayUpdate);
        syncGalleryHud(activeGalleryIndex);
        requestGalleryRunwayUpdate();

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeGalleryLightbox();
            }

            if (galleryLightbox?.classList.contains('is-open')) {
                if (event.key === 'ArrowRight') {
                    showNextImage();
                }
                if (event.key === 'ArrowLeft') {
                    showPrevImage();
                }
            }
        });
    } catch (e) { console.error("Gallery failed", e); }

    /* --- 6. Honors Overlay --- */
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

    /* --- 7. Stats & Extras --- */
    const visitorCountEl = document.getElementById('visitor-count');
    if (visitorCountEl) {
        fetch('https://api.counterapi.dev/v1/mug1sha-portfolio/visits/up')
            .then(res => res.json())
            .then(data => { visitorCountEl.textContent = data.count.toLocaleString(); })
            .catch(() => { visitorCountEl.textContent = 'Active'; });
    }

    const githubGraphWrapper = document.querySelector('.github-graph-wrapper');
    const githubChart = document.querySelector('.github-chart');
    const syncGithubGraphToLatest = () => {
        if (!githubGraphWrapper || !githubChart) return;
        if (window.innerWidth > 768) return;

        const maxScrollLeft = githubGraphWrapper.scrollWidth - githubGraphWrapper.clientWidth;
        githubGraphWrapper.scrollLeft = Math.max(maxScrollLeft, 0);
    };

    if (githubGraphWrapper && githubChart) {
        window.addEventListener('load', syncGithubGraphToLatest);
        window.addEventListener('resize', syncGithubGraphToLatest);
        githubChart.addEventListener('load', syncGithubGraphToLatest);
        setTimeout(syncGithubGraphToLatest, 250);
    }
};

// Fire initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
