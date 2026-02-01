document.addEventListener('DOMContentLoaded', () => {
    
    // --- TRADUCCIONES ---
    const translations = {
        es: {
            "nav-home": "Inicio",
            "nav-about": "Sobre Mí",
            "nav-projects": "Proyectos",
            "nav-contact": "Contacto",
            "hero-greeting": "Hola, mundo. Soy",
            "hero-role-prefix": "Desarrollador",
            "hero-desc": "Desarrollador Fullstack en formación (USM, 8vo Semestre). Transformo ideas complejas en productos digitales reales. Con experiencia sólida creando CRMs, sistemas CRUD y APIs escalables, combinando la lógica del Backend con la interactividad del Frontend moderno.",
            "btn-projects": "Ver Proyectos",
            "btn-cv": "Descargar CV",
            "projects-title-1": "Mis",
            "projects-title-2": "Proyectos",
            "p1-desc": "Extensión para Revit 2022 que adapta los esquemas del software a las normas venezolanas COVENIN. Genera reportes de cómputos métricos e integra elementos de la normativa de construcción nacional, automatizando procesos para arquitectos e ingenieros civiles en Venezuela.",
            "p2-desc": "Plataforma fitness Fullstack con gestión de usuarios y pasarela de pagos integrada. Arquitectura híbrida potente uniendo la velocidad de React con la lógica de Python.",
            "p3-desc": "Plataforma educativa y de consulta en tiempo real sobre criptomonedas para Venezuela. Muestra la tasa del dólar paralelo desde Binance P2P, análisis de tendencias del mercado, precios globales de criptomonedas y un centro educativo interactivo con quizzes aleatorios.",
            "p4-title": "CRM Platform",
            "p4-desc": "Plataforma CRM integral para la gestión avanzada de leads con comunicación omnicanal integrada (WhatsApp, Instagram y Facebook). Optimiza el flujo de ventas mediante automatizaciones inteligentes, transcripción de voz a tareas mediante IA y un sistema robusto de presupuestos y analíticas en tiempo real.",
            "about-title-1": "Sobre",
            "about-title-2": "Mí",
            "about-text": "Desarrollador web en formación continua con más de un año de práctica creando aplicaciones y soluciones web. Cuento con una base sólida en el ciclo de desarrollo de software, adquirida a través de proyectos personales y académicos desafiantes. Soy una persona proactiva, apasionada por la resolución lógica de problemas y con un gran interés en la integración de Inteligencia Artificial en el desarrollo web. Actualmente me encuentro en búsqueda de proyectos y colaboraciones donde pueda aportar valor y seguir creciendo profesionalmente.",
            "stat-projects": "Proyectos",
            "stat-commitment": "Compromiso",
            "timeline-title": "Mi Trayectoria",
            "tl-1-date": "Inicio | Finalizado",
            "tl-1-desc": "Primeros pasos en desarrollo tecnologico y modelado BIM. Adaptacion de normas Covenin al software de revit",
            "tl-2-date": "Intermedio | Finalizado",
            "tl-2-desc": "Desarrollo de mi primera plataforma fullstack ambiciosa. Integración de arquitectura híbrida React + Python/Flask.",
            "tl-3-date": "Reciente | Finalizado",
            "tl-3-desc": "Creación de una herramienta útil para la comunidad venezolana. Consumo de múltiples APIs en tiempo real y lógica financiera.",
            "tl-4-date": "Actualidad | En Progreso",
            "tl-4-desc": "Desarrollo de plataforma CRM integral con comunicación omnicanal (WhatsApp, FB, IG), automatizaciones inteligentes y gestión de leads con IA.",
            "contact-title": "¿Tienes una idea?",
            "contact-text": "Estoy disponible para nuevos proyectos y oportunidades laborales.",
            "btn-email": "Envíame un correo",
            "footer-text": "&copy; 2025 Creado con <i class=\"ri-heart-fill\"></i> y mucho café."
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-greeting": "Hello, world. I am",
            "hero-role-prefix": "Developer",
            "hero-desc": "Fullstack Developer in training (USM, 8th Sem). I transform complex ideas into real digital products. With solid experience creating CRMs, CRUD systems, and scalable APIs, combining Backend logic with modern Frontend interactivity.",
            "btn-projects": "View Projects",
            "btn-cv": "Download CV",
            "projects-title-1": "My",
            "projects-title-2": "Projects",
            "p1-desc": "Extension for Revit 2022 that adapts software schemas to Venezuelan COVENIN standards. Generates metric computation reports and integrates national construction regulation elements, automating processes for architects and civil engineers in Venezuela.",
            "p2-desc": "Fullstack fitness platform with user management and integrated payment gateway. Powerful hybrid architecture uniting the speed of React with the logic of Python.",
            "p3-desc": "Real-time educational and consultation platform on cryptocurrencies for Venezuela. Displays the parallel dollar rate from Binance P2P, market trend analysis, global cryptocurrency prices, and an interactive educational center with random quizzes.",
            "p4-title": "CRM Platform",
            "p4-desc": "Comprehensive CRM platform for advanced lead management with integrated omnichannel communication (WhatsApp, Instagram, and Facebook). Optimizes sales flow through intelligent automation, voice-to-task transcription via AI, and a robust quoting and real-time analytics system.",
            "about-title-1": "About",
            "about-title-2": "Me",
            "about-text": "Web developer in continuous training with over a year of practice creating web applications and solutions. I have a solid foundation in the software development life cycle, acquired through challenging personal and academic projects. I am a proactive person, passionate about logical problem solving and with a great interest in integrating Artificial Intelligence into web development. I am currently seeking new projects and collaborations where I can add value and continue growing professionally.",
            "stat-projects": "Projects",
            "stat-commitment": "Commitment",
            "timeline-title": "My Journey",
            "tl-1-date": "Start | Completed",
            "tl-1-desc": "First steps in technological development and BIM modeling. Adaptation of Covenin norms to Revit software.",
            "tl-2-date": "Intermediate | Completed",
            "tl-2-desc": "Development of my first ambitious fullstack platform. Integration of hybrid architecture React + Python/Flask.",
            "tl-3-date": "Recent | Completed",
            "tl-3-desc": "Creation of a useful tool for the Venezuelan community. Consumption of multiple real-time APIs and financial logic.",
            "tl-4-date": "Current | In Progress",
            "tl-4-desc": "Development of a comprehensive CRM platform with omnichannel communication (WhatsApp, FB, IG), intelligent automation, and AI lead management.",
            "contact-title": "Have an idea?",
            "contact-text": "I am available for new projects and job opportunities.",
            "btn-email": "Send me an email",
            "footer-text": "&copy; 2025 Created with <i class=\"ri-heart-fill\"></i> and lots of coffee."
        }
    };

    const typingWords = {
        es: ["Frontend", "Backend", "Fullstack", "Autónomo", "Creativo"],
        en: ["Frontend", "Backend", "Fullstack", "Autonomous", "Creative"]
    };

    let currentLang = localStorage.getItem('lang') || 'es';
    
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Actualizar textos
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if(translations[lang][key]) {
                if(key === 'footer-text') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Actualizar botón
        const langBtnText = document.querySelector('.lang-code');
        if (langBtnText) {
            langBtnText.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        // Actualizar atributo html lang
        document.documentElement.lang = lang;
    }

    // Inicializar idioma
    updateLanguage(currentLang);

    // Listener del botón
    const langBtn = document.getElementById('language-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }

    // --- EFECTO DE ESCRITURA (TYPING EFFECT) ---
    const typingText = document.getElementById('typing-text');
    // CAMBIAR AQUI: Palabras que quieres que se escriban
    // const words = ["Frontend", "Backend", "Fullstack", "Autónomo", "Creativo"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        // const currentWord = words[wordIndex];
        const words = typingWords[currentLang];
        // Seguridad por si cambia el idioma y el índice queda fuera de rango
        if (wordIndex >= words.length) wordIndex = 0;
        
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Borrar más rápido
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Escribir velocidad normal
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Palabra completa, esperar antes de borrar
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            // Palabra borrada, pasar a la siguiente
            isDeleting = false;
            // wordIndex = (wordIndex + 1) % words.length;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Iniciar efecto de escritura
    type();

    // --- ANIMACIONES AL SCROLL (INTERSECTION OBSERVER) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar una vez animado
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll('.project-card, .about-container, .contact-box, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));


    // --- MENU MOVIL ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar icono
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ri-menu-3-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-3-line');
            }
        });
    }

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-3-line');
        });
    });

    // --- GLITCH EFFECT HOVER (Opcional, extra dinamismo) ---
    const glitchText = document.querySelector('.glitch-text');
    if(glitchText) {
        glitchText.addEventListener('mouseover', () => {
            glitchText.style.textShadow = '2px 2px var(--accent-primary), -2px -2px var(--accent-secondary)';
        });
        glitchText.addEventListener('mouseout', () => {
            glitchText.style.textShadow = 'none';
        });
    }

    // --- BOTÓN VOLVER ARRIBA ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});