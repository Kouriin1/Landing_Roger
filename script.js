document.addEventListener('DOMContentLoaded', () => {
    
    // --- EFECTO DE ESCRITURA (TYPING EFFECT) ---
    const typingText = document.getElementById('typing-text');
    // CAMBIAR AQUI: Palabras que quieres que se escriban
    const words = ["Frontend", "Backend", "Fullstack", "Autónomo", "Creativo"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
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
    const animatedElements = document.querySelectorAll('.project-card, .about-container, .contact-box');
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
});