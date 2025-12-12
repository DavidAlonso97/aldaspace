const translations = {
    es: {
        "nav.blog": "Blog",
        "nav.about": "Sobre mí",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contacto",
        "about.title": "Sobre mí",
        "about.desc": "Hola, soy David. Un apasionado desarrollador de software enfocado en crear soluciones elegantes y eficientes. Me encanta compartir conocimientos sobre buenas prácticas, arquitectura de software y las últimas tecnologías web.",
        "about.subdesc": "En este espacio encontrarás reflexiones y guías para mejorar tu código día a día.",
        "about.myexperience": "Además de mi dedicación completa a ser Ingeniero en Sistemas de Información, soy docente de la universidad tecnológica nacional UTN, facultad regional San Francisco, de la provincia de Córdoba. La transmisión de conocimientos es una de las actividades que más disfruto y un sueño para mí.",
        "hero.title": "Del código que funciona al código que trasciende",
        "hero.subtitle": "Explora tutoriales, guías y artículos sobre programación moderna, arquitecturas y buenas prácticas para llevar tu desarrollo al siguiente nivel.",
        "hero.btn.read": "Leer Artículos",
        "hero.btn.repo": "Repositorio GitHub",
        "meta.good_practices": "Buenas Prácticas",
        "meta.frontend": "Frontend",
        "meta.architecture": "Arquitectura",
        "meta.testing": "Testing",
        "post.read_time": "min lectura",
        "footer.rights": "© 2025 AldaSpace. Construido con pasión y ☕.",

        // Migrated Posts
        "solid_title": "Principios SOLID y por qué son tan relevantes",
        "solid_excerpt": "Explora los cinco principios fundamentales SOLID que nos guían en el diseño y escritura de software de alta calidad, mantenible y escalable.",
        "aaa_title": "Mejora los tests con AAA",
        "aaa_excerpt": "Aprende a escribir mejores tests usando el patrón Arrange-Act-Assert (AAA) para un código más claro y mantenible.",
        "read_time_12": "12 min lectura",
        "read_time_8": "8 min lectura",

        // Post 3 (Index)
        "post3.title": "Clean Architecture en el mundo real",
        "post3.excerpt": "Una guía práctica para implementar principios SOLID y separar responsabilidades en aplicaciones medianas y grandes.",
        "post3.tag": "Arquitectura",

        // Post 4 (Index)
        "post4.title": "TDD: ¿Mito o realidad necesaria?",
        "post4.excerpt": "Analizamos los pros y contras del Test Driven Development y cuándo realmente vale la pena aplicarlo estrictamente.",
        "post4.tag": "Testing",

        // Article Page specific
        "article.author_by": "Por",
        "article.written_by": "Escrito por David Alonso",
        "article.bio": "Desarrollador Full Stack apasionado por el Clean Code, la arquitectura de software y el café de especialidad. Compartiendo lo que aprendo día a día.",

        // Support Section
        "support.title": "Apoya mi trabajo",
        "support.desc": "Si te gusta mi contenido y quieres ayudarme a seguir creando, puedes invitarme un café. ¡Cualquier aporte es bienvenido!",
        "support.btn": "Invitar un cafecito",

        // Contact Section
        "contact.title": "Contacto",
        "contact.desc": "¿Tienes alguna pregunta o sugerencia? ¡Todo feedback es bienvenido!"
    },
    en: {
        "nav.blog": "Blog",
        "nav.about": "About Me",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "about.title": "About Me",
        "about.desc": "Hi, I'm David. A passionate software developer focused on creating elegant and efficient solutions. I love sharing knowledge about best practices, software architecture, and the latest web technologies.",
        "about.subdesc": "In this space, you will find reflections and guides to improve your code every day.",
        "about.myexperience": "Besides my full-time dedication to being an Information Systems Engineer, I am a professor at the National Technological University (UTN), San Francisco Regional Faculty, in the province of Córdoba. Sharing knowledge is one of the activities I enjoy most and a dream come true for me.",
        "hero.title": "From code that works to code that transcends",
        "hero.subtitle": "Explore tutorials, guides, and articles on modern programming, software architecture, and best practices to take your development to the next level.",
        "hero.btn.read": "Read Articles",
        "hero.btn.repo": "GitHub Repository",
        "meta.good_practices": "Best Practices",
        "meta.frontend": "Frontend",
        "meta.architecture": "Architecture",
        "meta.testing": "Testing",
        "post.read_time": "min read",
        "footer.rights": "© 2025 AldaSpace. Built with passion and ☕.",

        // Migrated Posts
        "solid_title": "SOLID principles and why they are so relevant",
        "solid_excerpt": "Explore the five fundamental SOLID principles that guide us in designing and writing high-quality, maintainable, and scalable software.",
        "aaa_title": "Improve testing with AAA",
        "aaa_excerpt": "Learn how to write better tests using the Arrange-Act-Assert (AAA) pattern for clearer and more maintainable code.",
        "read_time_6": "6 min read",
        "read_time_4": "4 min read",

        // Post 1 (Index)
        "post1.title": "How to Write Self-Documenting Code",
        "post1.excerpt": "Discover why comments are sometimes redundant and how variable naming can tell the full story of your algorithm.",

        // Post 2 (Index)
        "post2.title": "Modern CSS: Beyond Flexbox",
        "post2.excerpt": "Exploring CSS Grid, Variables, and the new pseudo-classes revolutionizing web layout in 2025.",

        // Post 3 (Index)
        "post3.title": "Clean Architecture in the Real World",
        "post3.excerpt": "A practical guide to implementing SOLID principles and separating concerns in medium to large applications.",
        "post3.tag": "Architecture",

        // Post 4 (Index)
        "post4.title": "TDD: Myth or Necessity?",
        "post4.excerpt": "Analyzing the pros and cons of Test Driven Development and when it's really worth applying strictly.",
        "post4.tag": "Testing",

        // Article Page specific
        "article.author_by": "By",
        "article.written_by": "Written by David Alonso",
        "article.bio": "Full Stack Developer passionate about Clean Code, software architecture, and specialty coffee. Sharing what I learn day by day.",

        // Support Section
        "support.title": "Support my work",
        "support.desc": "If you like my content and want to help me keep creating, you can buy me a coffee. Any contribution is welcome!",
        "support.btn": "Buy me a coffee",

        // Contact Section
        "contact.title": "Contact",
        "contact.desc": "Do you have any questions or suggestions? Any feedback is welcome!"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const storedLang = localStorage.getItem('lang') || 'es';

    // Initialize language
    setLanguage(storedLang);

    langToggleBtn.addEventListener('click', () => {
        const currentLang = localStorage.getItem('lang') || 'es';
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});

function setLanguage(lang) {
    // Update State
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // 1. Update Simple Text Content (Dictionary)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 2. Update Content Visibility (Hybrid Approach)
    // Show elements that match current lang, hide others
    const contentBlocks = document.querySelectorAll('[data-lang]');
    contentBlocks.forEach(block => {
        if (block.getAttribute('data-lang') === lang) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

    // Update Button Text Logic (State-based)
    // <span class="lang-option active">ES</span> / <span class="lang-option">EN</span>
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.innerHTML = `
            <span class="${lang === 'es' ? 'active' : ''}">ES</span>
            <span class="divider">/</span>
            <span class="${lang === 'en' ? 'active' : ''}">EN</span>
        `;
    }
}
