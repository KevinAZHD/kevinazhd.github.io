document.addEventListener('DOMContentLoaded', () => {
    const $ = (selector, parent = document) => parent.querySelector(selector);
    const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const brandIcon = slug => `images/icons/${slug}.svg`;
    const localIcon = file => `images/icons/${file}`;
    const skill = (name, href, icon, className = '') => ({ name, href, icon, className });

    // Datos de habilidades
    const SKILL_GROUPS = [
        {
            title: { es: 'IA & Datos', en: 'AI & Data' },
            items: [
                skill('Airflow', 'https://airflow.apache.org/docs/', brandIcon('apacheairflow')),
                skill('Anthropic', 'https://docs.anthropic.com/', brandIcon('anthropic')),
                skill('ChromaDB', 'https://docs.trychroma.com/', localIcon('chromadb.svg')),
                skill('Claude', 'https://docs.anthropic.com/en/docs/about-claude', brandIcon('claude')),
                skill('Codex', 'https://openai.com/blog/openai-codex', localIcon('codex.svg')),
                skill('Gemini', 'https://ai.google.dev/gemini-api/docs', brandIcon('googlegemini')),
                skill('Hadoop', 'https://hadoop.apache.org/docs/', brandIcon('apachehadoop')),
                skill('Keras', 'https://keras.io/api/', brandIcon('keras')),
                skill('LangChain', 'https://python.langchain.com/', brandIcon('langchain')),
                skill('LangGraph', 'https://langchain-ai.github.io/langgraph/', brandIcon('langgraph')),
                skill('NumPy', 'https://numpy.org/doc/', brandIcon('numpy')),
                skill('OpenAI', 'https://platform.openai.com/docs/', localIcon('openai.svg')),
                skill('Pandas', 'https://pandas.pydata.org/docs/', brandIcon('pandas')),
                skill('Parquet', 'https://parquet.apache.org/docs/', brandIcon('apacheparquet')),
                skill('Perplexity', 'https://docs.perplexity.ai/', brandIcon('perplexity')),
                skill('Polars', 'https://docs.pola.rs/', brandIcon('polars')),
                skill('PyCaret', 'https://pycaret.gitbook.io/docs/', localIcon('pycaret.svg'), 'skill-icon--wordmark'),
                skill('Python', 'https://docs.python.org/3/', brandIcon('python')),
                skill('PyTorch', 'https://pytorch.org/docs/stable/index.html', brandIcon('pytorch')),
                skill('Replicate', 'https://replicate.com/docs', brandIcon('replicate')),
                skill('Seaborn', 'https://seaborn.pydata.org/', localIcon('seaborn.svg')),
                skill('Spark', 'https://spark.apache.org/docs/latest/', brandIcon('apachespark')),
                skill('Superset', 'https://superset.apache.org/docs/intro', brandIcon('apachesuperset')),
                skill('TensorFlow', 'https://www.tensorflow.org/api_docs', brandIcon('tensorflow')),
                skill('xAI', 'https://docs.x.ai/docs/overview', localIcon('xai.svg'))
            ]
        },
        {
            title: { es: 'Backend & APIs', en: 'Backend & APIs' },
            items: [
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('C++', 'https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-180', brandIcon('cplusplus')),
                skill('FastAPI', 'https://fastapi.tiangolo.com/', brandIcon('fastapi')),
                skill('Firebase', 'https://firebase.google.com/docs', brandIcon('firebase')),
                skill('Hibernate', 'https://hibernate.org/orm/documentation/', brandIcon('hibernate')),
                skill('Java', 'https://docs.oracle.com/en/java/', brandIcon('openjdk')),
                skill('MongoDB', 'https://www.mongodb.com/docs/', brandIcon('mongodb')),
                skill('MQTT', 'https://mqtt.org/', brandIcon('mqtt')),
                skill('MySQL', 'https://dev.mysql.com/doc/', brandIcon('mysql')),
                skill('Node.js', 'https://nodejs.org/docs/latest/api/', brandIcon('nodedotjs')),
                skill('Oracle', 'https://docs.oracle.com/en/', localIcon('oracle.svg')),
                skill('PostgreSQL', 'https://www.postgresql.org/docs/', brandIcon('postgresql')),
                skill('RabbitMQ', 'https://www.rabbitmq.com/docs', brandIcon('rabbitmq')),
                skill('Spring', 'https://docs.spring.io/spring-framework/reference/', brandIcon('spring')),
                skill('Spring Boot', 'https://docs.spring.io/spring-boot/reference/', brandIcon('springboot')),
                skill('Swagger', 'https://swagger.io/docs/', brandIcon('swagger'))
            ]
        },
        {
            title: { es: 'Frontend & Diseño', en: 'Frontend & Design' },
            items: [
                skill('Blazor', 'https://learn.microsoft.com/en-us/aspnet/core/blazor/', brandIcon('blazor')),
                skill('Bootstrap', 'https://getbootstrap.com/docs/5.3/', brandIcon('bootstrap')),
                skill('CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS', brandIcon('css')),
                skill('HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML', brandIcon('html5')),
                skill('JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', brandIcon('javascript')),
                skill('Qt', 'https://doc.qt.io/qt-6/', brandIcon('qt')),
                skill('React', 'https://react.dev/reference/react', brandIcon('react')),
                skill('TailwindCSS', 'https://tailwindcss.com/docs', brandIcon('tailwindcss')),
                skill('WPF', 'https://learn.microsoft.com/en-us/dotnet/desktop/wpf/', brandIcon('dotnet'))
            ]
        },
        {
            title: { es: 'Desarrollo Móvil', en: 'Mobile Development' },
            items: [
                skill('Android', 'https://developer.android.com/docs', brandIcon('android')),
                skill('Kotlin', 'https://kotlinlang.org/docs/home.html', brandIcon('kotlin')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet'))
            ]
        },
        {
            title: { es: 'Herramientas & Plataformas', en: 'Tools & Platforms' },
            items: [
                skill('Android Studio', 'https://developer.android.com/studio/intro', brandIcon('androidstudio')),
                skill('Antigravity', 'https://antigravity.google/docs', localIcon('antigravity.svg')),
                skill('AnythingLLM', 'https://docs.anythingllm.com/', localIcon('anythingllm.svg')),
                skill('Arduino', 'https://docs.arduino.cc/', brandIcon('arduino')),
                skill('Azure', 'https://learn.microsoft.com/en-us/azure/', localIcon('azure.svg')),
                skill('Claude Code', 'https://docs.anthropic.com/en/docs/claude-code', brandIcon('claudecode')),
                skill('Colab', 'https://research.google.com/colaboratory/faq.html', brandIcon('googlecolab')),
                skill('Cursor', 'https://cursor.com/en-US/docs', brandIcon('cursor')),
                skill('Discord', 'https://discord.com/developers/docs/', brandIcon('discord')),
                skill('Docker', 'https://docs.docker.com/', brandIcon('docker')),
                skill('Eclipse', 'https://help.eclipse.org/latest/index.jsp', brandIcon('eclipseide')),
                skill('FileZilla', 'https://wiki.filezilla-project.org/Documentation', brandIcon('filezilla')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git')),
                skill('GitHub Actions', 'https://docs.github.com/en/actions', brandIcon('githubactions')),
                skill('GitHub Pages', 'https://docs.github.com/en/pages', brandIcon('githubpages'), 'skill-icon--wordmark skill-icon--githubpages'),
                skill('Google Cloud', 'https://docs.cloud.google.com/docs', brandIcon('googlecloud')),
                skill('Grafana', 'https://grafana.com/docs/', brandIcon('grafana')),
                skill('Jupyter', 'https://jupyterlab.readthedocs.io/en/stable/', brandIcon('jupyter')),
                skill('Linux', 'https://www.kernel.org/doc/html/latest/', brandIcon('linux')),
                skill('LM Studio', 'https://lmstudio.ai/docs', brandIcon('lmstudio')),
                skill('MCP', 'https://modelcontextprotocol.io/introduction', brandIcon('modelcontextprotocol')),
                skill('MinIO', 'https://docs.min.io/aistor/', brandIcon('minio')),
                skill('MyAnimeList', 'https://myanimelist.net/apiconfig/references/api/v2', brandIcon('myanimelist')),
                skill('n8n', 'https://docs.n8n.io/', brandIcon('n8n')),
                skill('NetBeans', 'https://netbeans.apache.org/kb/docs/', brandIcon('apachenetbeanside')),
                skill('Netlify', 'https://docs.netlify.com/', brandIcon('netlify')),
                skill('Node-RED', 'https://nodered.org/docs/', brandIcon('nodered')),
                skill('Obsidian', 'https://help.obsidian.md/', brandIcon('obsidian')),
                skill('Odoo', 'https://www.odoo.com/documentation/19.0/', brandIcon('odoo')),
                skill('Playwright', 'https://playwright.dev/docs/intro', localIcon('playwright.svg')),
                skill('Prometheus', 'https://prometheus.io/docs/introduction/overview/', brandIcon('prometheus')),
                skill('Puppeteer', 'https://pptr.dev/', brandIcon('puppeteer')),
                skill('Render', 'https://docs.render.com/', brandIcon('render')),
                skill('Selenium', 'https://www.selenium.dev/documentation/', brandIcon('selenium')),
                skill('Stremio', 'https://stremio.github.io/stremio-addon-sdk/', brandIcon('stremio')),
                skill('Telegraph', 'https://telegra.ph/api', brandIcon('telegraph')),
                skill('Unity', 'https://docs.unity3d.com/', brandIcon('unity')),
                skill('Vercel', 'https://vercel.com/docs', brandIcon('vercel')),
                skill('VirtualBox', 'https://www.virtualbox.org/wiki/Documentation', brandIcon('virtualbox')),
                skill('Visual Studio', 'https://learn.microsoft.com/en-us/visualstudio/windows/?view=visualstudio', localIcon('visualstudio.svg')),
                skill('Visual Studio Code', 'https://code.visualstudio.com/docs', localIcon('visualcode.svg')),
                skill('Vite', 'https://vite.dev/guide/', brandIcon('vite'))
            ]
        }
    ];

    // Referencias
    const refs = {
        html: document.documentElement,
        navbar: $('#navbar'),
        hamburger: $('#hamburger'),
        navMenu: $('#navMenu'),
        themeToggle: $('#themeToggle'),
        themeIcon: $('#themeIcon'),
        langToggle: $('#langToggle'),
        langEs: $('#langEs'),
        langEn: $('#langEn'),
        particles: $('#particles'),
        projectsGrid: $('#projectsGrid'),
        skillsList: $('#skillsList')
    };

    const storage = {
        get(key, fallback) {
            try {
                return localStorage.getItem(key) || fallback;
            } catch {
                return fallback;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch {
                // El sitio funciona aunque el navegador bloquee localStorage.
            }
        }
    };

    const state = {
        lang: storage.get('lang', 'es'),
        theme: storage.get('theme', 'dark')
    };

    const skillGroupIcons = {
        'AI & Data': 'fas fa-brain',
        'Backend & APIs': 'fas fa-server',
        'Frontend & Design': 'fas fa-palette',
        'Mobile Development': 'fas fa-mobile-alt',
        'Tools & Platforms': 'fas fa-tools'
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const currentText = texts => texts[state.lang] || texts.es;

    // Bloquea el scroll sólo mientras haya un modal abierto.
    function syncScrollLock() {
        const hasOpenModal = Boolean($('.modal-overlay.active'));
        refs.html.classList.toggle('no-scroll', hasOpenModal);
        document.body.classList.toggle('no-scroll', hasOpenModal);
    }

    function openModal(modal) {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('active');
        syncScrollLock();
    }

    function closeModal(modal) {
        if (!modal) return;
        document.activeElement?.blur();
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('active');
        syncScrollLock();
    }

    function closeAllModals() {
        $$('.modal-overlay.active').forEach(closeModal);
    }

    function openFromKeyboard(event, callback) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        callback();
    }

    // Render de habilidades
    function createSkillItem({ name, href, icon, className }) {
        const link = document.createElement('a');
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener';
        link.title = name;
        link.className = 'skill-item';

        const image = document.createElement('img');
        image.src = icon;
        image.alt = name;
        image.className = ['skill-icon', className].filter(Boolean).join(' ');

        link.append(image);
        return link;
    }

    function openSkillModal(index) {
        const group = SKILL_GROUPS[index];
        const modal = $('#skillModal');
        const modalBody = $('#skillModalBody');
        if (!group || !modal || !modalBody) return;

        const title = document.createElement('h2');
        title.className = 'skill-modal-title';
        title.textContent = currentText(group.title);

        const row = document.createElement('div');
        row.className = 'modal-skills-row';
        group.items.forEach(item => row.append(createSkillItem(item)));

        modalBody.replaceChildren(title, row);
        openModal(modal);
    }

    window.openSkillModal = openSkillModal;

    function createSkillCard({ title }, index) {
        const article = document.createElement('article');
        article.className = 'card skill-card';
        article.setAttribute('role', 'button');
        article.tabIndex = 0;

        const open = () => openSkillModal(index);
        const iconClass = skillGroupIcons[title.en] || 'fas fa-cogs';

        article.innerHTML = `
            <div class="card-icon"><i class="${iconClass}"></i></div>
            <h3 data-es="${title.es}" data-en="${title.en}">${currentText(title)}</h3>
        `;
        article.addEventListener('click', open);
        article.addEventListener('keydown', event => openFromKeyboard(event, open));

        return article;
    }

    function renderSkills() {
        if (!refs.skillsList) return;

        refs.skillsList.className = 'skills-grid';
        const fragment = document.createDocumentFragment();
        SKILL_GROUPS.forEach((group, index) => fragment.append(createSkillCard(group, index)));
        refs.skillsList.replaceChildren(fragment);
    }

    // Tema
    function setTheme(theme) {
        state.theme = theme;
        refs.html.setAttribute('data-theme', theme);
        storage.set('theme', theme);

        if (refs.themeIcon) {
            refs.themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    function initTheme() {
        setTheme(state.theme);
        refs.themeToggle?.addEventListener('click', () => {
            setTheme(state.theme === 'dark' ? 'light' : 'dark');
        });
    }

    // Idioma
    function translateElement(element, lang) {
        const text = element.getAttribute(`data-${lang}`);
        if (!text) return;

        const icon = element.querySelector(':scope > i');
        if (icon) {
            element.replaceChildren(icon, document.createTextNode(` ${text}`));
            return;
        }

        element.textContent = text;
    }

    function setLanguage(lang) {
        state.lang = lang;
        refs.html.lang = lang;
        storage.set('lang', lang);

        document.title = lang === 'en' ? 'KevinAZ - Portfolio' : 'KevinAZ - Portafolio';

        refs.langToggle?.classList.toggle('en', lang === 'en');
        refs.langEs?.classList.toggle('active-lang', lang === 'es');
        refs.langEn?.classList.toggle('active-lang', lang === 'en');

        $$('[data-es]').forEach(element => translateElement(element, lang));
    }

    function initLanguage() {
        setLanguage(state.lang);
        refs.langToggle?.addEventListener('click', () => {
            setLanguage(state.lang === 'es' ? 'en' : 'es');
        });
    }

    // Navegación
    function resetScrollPosition() {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }

    function setMenuOpen(isOpen) {
        refs.hamburger?.classList.toggle('active', isOpen);
        refs.navMenu?.classList.toggle('open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        refs.hamburger?.setAttribute('aria-expanded', String(isOpen));
    }

    function updateActiveNav(sections, navLinks) {
        let current = sections[0]?.id || '';

        if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
            current = sections[sections.length - 1].id;
        } else {
            current = sections.reduce((active, section) => {
                return window.scrollY >= section.offsetTop - 75 ? section.id : active;
            }, current);
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    // Mantiene el mismo punto de lectura cuando el móvil cambia de orientación.
    function initOrientationScrollRestore() {
        const itemAnchorSelector = [
            '.project-card',
            '.skill-card',
            '.cert-card',
            '.edu-card',
            '.about-card',
            '.contact-item',
            '.section-title'
        ].join(',');

        let anchor = null;
        let lastOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
        let restoreTimer = null;
        let scrollTicking = false;
        let restoring = false;
        let preservingRotation = false;

        const navHeight = () => refs.navbar?.offsetHeight || 0;

        function findVisibleAnchor() {
            const viewportTop = navHeight();
            const targetY = clamp(viewportTop + 16, 0, window.innerHeight - 1);
            const distanceToTarget = rect => rect.top <= targetY && rect.bottom >= targetY
                ? 0
                : Math.min(Math.abs(rect.top - targetY), Math.abs(rect.bottom - targetY));

            const candidates = $$(itemAnchorSelector)
                .map(element => ({ element, rect: element.getBoundingClientRect() }))
                .filter(({ rect }) => rect.bottom > viewportTop && rect.top < window.innerHeight)
                .sort((a, b) => distanceToTarget(a.rect) - distanceToTarget(b.rect));

            if (candidates.length) return candidates[0].element;

            const fallback = document.elementFromPoint(window.innerWidth / 2, targetY)?.closest('section[id]');
            return fallback || null;
        }

        function saveAnchor(force = false) {
            if (document.body.classList.contains('no-scroll')) return;
            if (!force && (restoring || preservingRotation)) return;

            const element = findVisibleAnchor();
            if (!element) return;

            anchor = {
                element,
                top: element.getBoundingClientRect().top
            };
        }

        function restoreAnchor() {
            if (!anchor || document.body.classList.contains('no-scroll')) return;
            if (!document.documentElement.contains(anchor.element)) return;

            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
            const top = clamp(window.scrollY + anchor.element.getBoundingClientRect().top - anchor.top, 0, maxScroll);

            restoring = true;
            window.scrollTo(0, top);
            requestAnimationFrame(() => {
                restoring = false;
            });
        }

        function scheduleRestore() {
            preservingRotation = true;
            refs.html.classList.add('orientation-restoring');
            clearTimeout(restoreTimer);
            requestAnimationFrame(restoreAnchor);
            restoreTimer = setTimeout(() => {
                restoreAnchor();
                preservingRotation = false;
                saveAnchor(true);
                refs.html.classList.remove('orientation-restoring');
            }, 180);
        }

        window.addEventListener('scroll', () => {
            if (scrollTicking) return;

            requestAnimationFrame(() => {
                saveAnchor();
                scrollTicking = false;
            });
            scrollTicking = true;
        }, { passive: true });

        window.addEventListener('resize', () => {
            const nextOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
            if (nextOrientation === lastOrientation) return;

            lastOrientation = nextOrientation;
            scheduleRestore();
        }, { passive: true });

        window.addEventListener('orientationchange', scheduleRestore, { passive: true });
        saveAnchor();
    }

    function initNavigation() {
        const sections = $$('section[id]');
        const navLinks = $$('.nav-link');
        let ticking = false;

        const syncNav = () => {
            refs.navbar?.classList.toggle('scrolled', window.scrollY > 50);
            updateActiveNav(sections, navLinks);
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(syncNav);
                ticking = true;
            }
        }, { passive: true });

        refs.hamburger?.addEventListener('click', () => {
            setMenuOpen(!refs.navMenu?.classList.contains('open'));
        });

        document.addEventListener('click', event => {
            const link = event.target.closest?.('a[href^="#"]');
            if (!link) return;

            const targetId = link.getAttribute('href');
            const target = targetId && targetId !== '#' ? $(targetId) : null;
            if (!target) return;

            event.preventDefault();
            if (refs.navMenu?.contains(link)) {
                setMenuOpen(false);
            }

            target.scrollIntoView({ behavior: 'smooth' });
        });

        syncNav();
    }

    // Partículas
    function initLogoParticles() {
        if (!refs.particles || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const sources = [...new Set(SKILL_GROUPS.flatMap(group => group.items.map(item => item.icon)).filter(Boolean))];
        if (!sources.length) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        refs.particles.append(canvas);

        const navbar = refs.navbar;
        const loadedImages = [];
        const availableImages = [];
        const particles = [];
        let width = 0;
        let height = 0;
        let dpr = window.devicePixelRatio || 1;

        function particleSettings() {
            if (window.innerWidth <= 420) {
                return { limit: 50, minSize: 12, maxSize: 18, speed: 0.85, quickStart: 15, spawnChance: 0.18 };
            }

            if (window.innerWidth < 768) {
                return { limit: 55, minSize: 14, maxSize: 22, speed: 0.9, quickStart: 15, spawnChance: 0.15 };
            }

            return { limit: 65, minSize: 20, maxSize: 30, speed: 1, quickStart: 12, spawnChance: 0.12 };
        }

        const particleLimit = () => Math.min(particleSettings().limit, loadedImages.length);

        function resize() {
            const previousWidth = width;
            const previousHeight = height;
            dpr = window.devicePixelRatio || 1;
            width = refs.particles.clientWidth;
            height = refs.particles.clientHeight;
            canvas.width = Math.max(1, Math.ceil(width * dpr));
            canvas.height = Math.max(1, Math.ceil(height * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!previousWidth || !previousHeight) return;

            const scaleX = width / previousWidth;
            const scaleY = height / previousHeight;
            const { maxSize } = particleSettings();

            particles.forEach(particle => {
                particle.x *= scaleX;
                particle.y *= scaleY;

                if (particle.size > maxSize) {
                    particle.size = maxSize;
                    particle.radius = maxSize / 2;
                }
            });
        }

        function registerImage(image) {
            if (loadedImages.includes(image) || !image.naturalWidth) return;
            loadedImages.push(image);
            availableImages.push(image);
        }

        function loadImages() {
            sources.forEach(src => {
                const image = new Image();
                image.src = src;
                image.addEventListener('load', () => registerImage(image), { once: true });

                if (image.complete) {
                    registerImage(image);
                }
            });
        }

        function randomSpeed({ speed }) {
            const roll = Math.random();
            if (roll < 0.25) return (Math.random() * 0.4 + 0.4) * speed;
            if (roll < 0.75) return (Math.random() * 0.8 + 1.0) * speed;
            return (Math.random() * 1.5 + 2.2) * speed;
        }

        function createParticle() {
            if (!availableImages.length || !width || !height) return null;

            const settings = particleSettings();
            const imageIndex = Math.floor(Math.random() * availableImages.length);
            const image = availableImages.splice(imageIndex, 1)[0];
            const size = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
            const radius = size / 2;
            const vy = -randomSpeed(settings);

            return {
                image,
                x: Math.random() * (width - size) + radius,
                y: height + radius + 15,
                vx: (Math.random() - 0.5) * 1.5,
                vy,
                targetVy: vy,
                radius,
                size,
                angle: Math.random() * Math.PI * 2,
                angularVelocity: (Math.random() - 0.5) * 0.02
            };
        }

        function recycleParticle(index) {
            availableImages.push(particles[index].image);
            const nextParticle = createParticle();

            if (nextParticle) {
                particles[index] = nextParticle;
                return;
            }

            particles.splice(index, 1);
        }

        function handleCollisions() {
            const canvasTop = canvas.getBoundingClientRect().top;
            const navBottom = navbar ? navbar.getBoundingClientRect().bottom - canvasTop : 0;

            particles.forEach((first, firstIndex) => {
                for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
                    const second = particles[secondIndex];
                    const dx = second.x - first.x;
                    const dy = second.y - first.y;
                    const distance = Math.hypot(dx, dy) || 1;
                    const minDistance = first.radius + second.radius;

                    if (distance >= minDistance) continue;

                    const overlap = minDistance - distance;
                    const nx = dx / distance;
                    const ny = dy / distance;
                    const firstMass = first.radius * first.radius;
                    const secondMass = second.radius * second.radius;
                    const relativeVx = first.vx - second.vx;
                    const relativeVy = first.vy - second.vy;
                    const normalSpeed = relativeVx * nx + relativeVy * ny;

                    if (first === draggedParticle) {
                        second.x += nx * overlap;
                        second.y += ny * overlap;
                    } else if (second === draggedParticle) {
                        first.x -= nx * overlap;
                        first.y -= ny * overlap;
                    } else {
                        first.x -= nx * overlap * 0.5;
                        first.y -= ny * overlap * 0.5;
                        second.x += nx * overlap * 0.5;
                        second.y += ny * overlap * 0.5;
                    }

                    if (normalSpeed <= 0) continue;

                    if (first === draggedParticle) {
                        const impulse = 2.2 * normalSpeed;
                        second.vx += impulse * nx;
                        second.vy += impulse * ny;
                    } else if (second === draggedParticle) {
                        const impulse = 2.2 * normalSpeed;
                        first.vx -= impulse * nx;
                        first.vy -= impulse * ny;
                    } else {
                        const impulse = (2 * normalSpeed) / (firstMass + secondMass);
                        first.vx -= impulse * secondMass * nx;
                        first.vy -= impulse * secondMass * ny;
                        second.vx += impulse * firstMass * nx;
                        second.vy += impulse * firstMass * ny;
                    }
                }

                if (first.x - first.radius < 0) {
                    first.x = first.radius;
                    first.vx = -first.vx * 0.8;
                } else if (first.x + first.radius > width) {
                    first.x = width - first.radius;
                    first.vx = -first.vx * 0.8;
                }

                // El icono arrastrado no puede atravesar la barra superior.
                if (first === draggedParticle && navBottom > 0 && first.y - first.radius < navBottom) {
                    first.y = navBottom + first.radius;
                    first.vy = Math.abs(first.vy) * 0.6;
                }

                // Rebote inferior para que los iconos no desaparezcan al soltarlos.
                if (first.y + first.radius > height) {
                    first.y = height - first.radius;
                    first.vy = -Math.abs(first.vy) * 0.6;
                    if (Math.abs(first.vy) < 0.2) {
                        first.vy = -0.5;
                    }
                }
            });
        }

        function spawnParticles() {
            const needsMore = particles.length < particleLimit() && availableImages.length > 0;
            if (!needsMore) return;

            const settings = particleSettings();
            const spawnChance = particles.length < settings.quickStart ? 0.35 : settings.spawnChance;
            if (Math.random() < spawnChance) {
                const particle = createParticle();
                if (particle) particles.push(particle);
            }
        }

        let draggedParticle = null;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let mouseVx = 0;
        let mouseVy = 0;

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function checkHover(pos) {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                if (Math.hypot(pos.x - p.x, pos.y - p.y) < p.radius * 1.3) {
                    return p;
                }
            }
            return null;
        }

        canvas.addEventListener('pointerdown', (e) => {
            const pos = getMousePos(e);
            const target = checkHover(pos);
            if (target) {
                draggedParticle = target;
                lastMouseX = pos.x;
                lastMouseY = pos.y;
                mouseVx = 0;
                mouseVy = 0;
                document.body.classList.add('particle-dragging');
                try {
                    canvas.setPointerCapture(e.pointerId);
                } catch (_) { }
                e.preventDefault();
            }
        });

        canvas.addEventListener('pointermove', (e) => {
            if (draggedParticle) {
                const pos = getMousePos(e);
                mouseVx = pos.x - lastMouseX;
                mouseVy = pos.y - lastMouseY;
                draggedParticle.vx = mouseVx;
                draggedParticle.vy = mouseVy;

                const canvasTop = canvas.getBoundingClientRect().top;
                const topLimit = navbar ? navbar.getBoundingClientRect().bottom - canvasTop + draggedParticle.radius : draggedParticle.radius;
                draggedParticle.x = clamp(pos.x, draggedParticle.radius, width - draggedParticle.radius);
                draggedParticle.y = clamp(pos.y, topLimit, height - draggedParticle.radius);

                lastMouseX = pos.x;
                lastMouseY = pos.y;
                e.preventDefault();
            }
        });

        const releaseParticle = (e) => {
            if (draggedParticle) {
                try {
                    canvas.releasePointerCapture(e.pointerId);
                } catch (_) { }
                const maxSpeed = 15;
                draggedParticle.vx = clamp(draggedParticle.vx * 0.8, -maxSpeed, maxSpeed);
                draggedParticle.vy = clamp(draggedParticle.vy * 0.8, -maxSpeed, maxSpeed);
                draggedParticle = null;
                document.body.classList.remove('particle-dragging');
            }
        };

        canvas.addEventListener('pointerup', releaseParticle);
        canvas.addEventListener('pointercancel', releaseParticle);
        canvas.addEventListener('dragstart', (e) => e.preventDefault());

        function updateParticles() {
            spawnParticles();

            for (let index = particles.length - 1; index >= 0; index -= 1) {
                const particle = particles[index];
                if (particle === draggedParticle) {
                    particle.vx *= 0.2;
                    particle.vy *= 0.2;
                    continue;
                }
                particle.vy += (particle.targetVy - particle.vy) * 0.03;
                particle.vx += (0 - particle.vx) * 0.01;
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.angle += particle.angularVelocity;

                if (particle.y + particle.radius < -25) {
                    recycleParticle(index);
                }
            }

            handleCollisions();
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(particle => {
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.angle);
                ctx.drawImage(particle.image, -particle.radius, -particle.radius, particle.size, particle.size);
                ctx.restore();
            });
        }

        function loop() {
            updateParticles();
            drawParticles();
            requestAnimationFrame(loop);
        }

        resize();
        loadImages();
        window.addEventListener('resize', resize, { passive: true });
        requestAnimationFrame(loop);
    }

    // Aparición al hacer scroll
    function initReveal() {
        const targets = $$('.card, .section-title, .divider, .contact-location');

        if (!('IntersectionObserver' in window)) {
            targets.forEach(target => target.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px 0px 0px' });

        targets.forEach(target => {
            target.classList.add('fade-up');
            observer.observe(target);
        });
    }

    // Modales de Proyectos
    const PROJECTS_DATA = {
        'powerpoineador': {
            title: 'Powerpoineador',
            img: 'images/projects/powerpoineador.png',
            summary: { es: 'Generador automático de presentaciones con IA.', en: 'Automatic AI presentation generator.' },
            desc: {
                es: 'Generador automático de presentaciones de PowerPoint utilizando diferentes modelos de Inteligencia Artificial (Google, OpenAI, Anthropic, Replicate, xAI). Ofrece una interfaz gráfica intuitiva, opciones de personalización avanzadas (fuentes, formatos) y la posibilidad de generar texto e imágenes a partir de prompts o documentos de referencia (PDF/TXT).',
                en: 'Automatic PowerPoint presentation generator using various AI models (Google, OpenAI, Anthropic, Replicate, xAI). Features an intuitive graphical interface, advanced customization options (fonts, formatting), and the ability to generate text and images from prompts or reference documents (PDF/TXT).'
            },
            techs: [
                skill('Python', 'https://docs.python.org/3/', brandIcon('python')),
                skill('Qt', 'https://doc.qt.io/qt-6/', brandIcon('qt')),
                skill('Anthropic', 'https://docs.anthropic.com/', brandIcon('anthropic')),
                skill('Claude', 'https://docs.anthropic.com/en/docs/about-claude', brandIcon('claude')),
                skill('Gemini', 'https://ai.google.dev/gemini-api/docs', brandIcon('googlegemini')),
                skill('OpenAI', 'https://platform.openai.com/docs/', localIcon('openai.svg')),
                skill('Replicate', 'https://replicate.com/docs', brandIcon('replicate')),
                skill('xAI', 'https://docs.x.ai/docs/overview', localIcon('xai.svg')),
                skill('HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML', brandIcon('html5')),
                skill('CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS', brandIcon('css')),
                skill('JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', brandIcon('javascript')),
                skill('TailwindCSS', 'https://tailwindcss.com/docs', brandIcon('tailwindcss')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/Powerpoineador',
            docs: 'https://github.com/KevinAZHD/Powerpoineador#readme'
        },
        'llmchat': {
            title: 'LLMChat',
            img: 'images/projects/llmchat.png',
            summary: { es: 'Chat móvil entre modelos de IA locales.', en: 'Mobile chat between local AI models.' },
            desc: {
                es: 'Aplicación móvil multiplataforma desarrollada en .NET MAUI que permite la comunicación en tiempo real entre dos o más modelos de lenguaje (LLM) a través de RabbitMQ. Cada instancia se conecta a un LLM local (vía LM Studio) y a un broker RabbitMQ para mantener una conversación autónoma y automática.',
                en: 'Cross-platform mobile application developed in .NET MAUI that allows real-time communication between two or more Language Models (LLMs) via RabbitMQ. Each instance connects to a local LLM (via LM Studio) and a RabbitMQ broker to maintain an autonomous and automatic conversation.'
            },
            techs: [
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet')),
                skill('RabbitMQ', 'https://www.rabbitmq.com/docs', brandIcon('rabbitmq')),
                skill('Docker', 'https://docs.docker.com/', brandIcon('docker')),
                skill('LM Studio', 'https://lmstudio.ai/docs', brandIcon('lmstudio')),
                skill('OpenAI', 'https://platform.openai.com/docs/', localIcon('openai.svg')),
                skill('Android', 'https://developer.android.com/docs', brandIcon('android')),
                skill('Visual Studio', 'https://learn.microsoft.com/en-us/visualstudio/windows/?view=visualstudio', localIcon('visualstudio.svg')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/LLMChat',
            docs: 'https://github.com/KevinAZHD/LLMChat#readme'
        },
        'azurelens': {
            title: 'AzureLens',
            img: 'images/projects/azurelens.png',
            summary: { es: 'Escáner inteligente con IA y Azure Vision.', en: 'Intelligent scanner with AI and Azure Vision.' },
            desc: {
                es: 'Aplicación móvil multiplataforma desarrollada en .NET MAUI que utiliza Azure Computer Vision para el análisis inteligente de imágenes. Permite detectar objetos, personas y texto (OCR) en tiempo real, con traducción automática al español, búsqueda integrada en Bing y un sistema dinámico de cajas delimitadoras interactivo.',
                en: 'Cross-platform mobile application developed in .NET MAUI that utilizes Azure Computer Vision for intelligent image analysis. It detects objects, people, and text (OCR) in real-time, featuring automatic Spanish translation, integrated Bing search, and an interactive dynamic bounding box system.'
            },
            techs: [
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet')),
                skill('Azure', 'https://learn.microsoft.com/en-us/azure/', localIcon('azure.svg')),
                skill('Android', 'https://developer.android.com/docs', brandIcon('android')),
                skill('Visual Studio', 'https://learn.microsoft.com/en-us/visualstudio/windows/?view=visualstudio', localIcon('visualstudio.svg')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/AzureLens',
            docs: 'https://github.com/KevinAZHD/AzureLens#readme'
        },
        'llmdocs': {
            title: 'LLMDocs',
            img: 'images/projects/llmdocs.png',
            summary: { es: 'RAG móvil con AnythingLLM y documentos.', en: 'Mobile RAG with AnythingLLM and documents.' },
            desc: {
                es: 'Aplicación móvil multiplataforma desarrollada en .NET MAUI que conecta con un sistema RAG local basado en AnythingLLM y LM Studio. Permite gestionar workspaces de documentos, conversar con el modelo en modo chat o query, y visualizar los fragmentos de los documentos utilizados (chunks) con su puntuación de similitud.',
                en: 'Cross-platform mobile application developed in .NET MAUI that connects to a local RAG system based on AnythingLLM and LM Studio. It allows managing document workspaces, conversing with the model in chat or query mode, and viewing the document fragments used (chunks) along with their similarity scores.'
            },
            techs: [
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet')),
                skill('AnythingLLM', 'https://docs.anythingllm.com/', localIcon('anythingllm.svg')),
                skill('LM Studio', 'https://lmstudio.ai/docs', brandIcon('lmstudio')),
                skill('OpenAI', 'https://platform.openai.com/docs/', localIcon('openai.svg')),
                skill('Android', 'https://developer.android.com/docs', brandIcon('android')),
                skill('Visual Studio', 'https://learn.microsoft.com/en-us/visualstudio/windows/?view=visualstudio', localIcon('visualstudio.svg')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/LLMDocs',
            docs: 'https://github.com/KevinAZHD/LLMDocs#readme'
        },
        'iotchat': {
            title: 'IoTChat',
            img: 'images/projects/iotchat.png',
            summary: { es: 'Control inteligente IoT con IA y MCP.', en: 'Intelligent IoT control with AI and MCP.' },
            desc: {
                es: 'Aplicación multiplataforma en .NET MAUI que funciona como sistema de control inteligente para un semáforo IoT. Integra un modelo de lenguaje local mediante MCP, y se comunica con una placa ESP32 (simulada en Wokwi) a través de Node-RED y MQTT.',
                en: 'Cross-platform .NET MAUI application acting as an intelligent control system for an IoT traffic light. It integrates a local language model via MCP and communicates with an ESP32 board (simulated in Wokwi) through Node-RED and MQTT.'
            },
            techs: [
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('C++', 'https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-180', brandIcon('cplusplus')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet')),
                skill('MCP', 'https://modelcontextprotocol.io/introduction', brandIcon('modelcontextprotocol')),
                skill('Node-RED', 'https://nodered.org/docs/', brandIcon('nodered')),
                skill('MQTT', 'https://mqtt.org/', brandIcon('mqtt')),
                skill('Arduino', 'https://docs.arduino.cc/', brandIcon('arduino')),
                skill('Android', 'https://developer.android.com/docs', brandIcon('android')),
                skill('Visual Studio', 'https://learn.microsoft.com/en-us/visualstudio/windows/?view=visualstudio', localIcon('visualstudio.svg')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/IoTChat',
            docs: 'https://github.com/KevinAZHD/IoTChat#readme'
        },
        'llmation': {
            title: 'LLMation',
            img: 'images/projects/llmation.png',
            summary: { es: 'Agente autónomo RPA con LangChain/LangGraph.', en: 'Autonomous RPA agent with LangChain/LangGraph.' },
            desc: {
                es: 'Agente autónomo RPA en español que ejecuta procedimientos grabados sobre formularios web locales. Utiliza RAG para buscar procedimientos, LangChain/LangGraph para el agente, Playwright para la automatización RPA, FastAPI como backend HTTP y MAUI Blazor Hybrid como UI.',
                en: 'Autonomous RPA agent in Spanish that executes recorded procedures on local web forms. It uses RAG to search for procedures, LangChain/LangGraph for the agent, Playwright for RPA automation, FastAPI as the HTTP backend, and MAUI Blazor Hybrid as the UI.'
            },
            techs: [
                skill('Python', 'https://docs.python.org/3/', brandIcon('python')),
                skill('C#', 'https://learn.microsoft.com/en-us/dotnet/csharp/', localIcon('csharp.svg')),
                skill('MAUI', 'https://learn.microsoft.com/en-us/dotnet/maui/', brandIcon('dotnet')),
                skill('Blazor', 'https://learn.microsoft.com/en-us/aspnet/core/blazor/', brandIcon('blazor')),
                skill('LangChain', 'https://python.langchain.com/', brandIcon('langchain')),
                skill('LangGraph', 'https://langchain-ai.github.io/langgraph/', brandIcon('langgraph')),
                skill('ChromaDB', 'https://docs.trychroma.com/', localIcon('chromadb.svg')),
                skill('Playwright', 'https://playwright.dev/docs/intro', localIcon('playwright.svg')),
                skill('FastAPI', 'https://fastapi.tiangolo.com/', brandIcon('fastapi')),
                skill('LM Studio', 'https://lmstudio.ai/docs', brandIcon('lmstudio')),
                skill('OpenAI', 'https://platform.openai.com/docs/', localIcon('openai.svg')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/LLMation',
            docs: 'https://github.com/KevinAZHD/LLMation#readme'
        },
        'iot-medallion-pipeline': {
            title: 'IoT Medallion Pipeline',
            img: 'images/projects/iot-medallion-pipeline.png',
            summary: { es: 'Pipeline Big Data IoT con arquitectura Medallón.', en: 'IoT Big Data Pipeline with Medallion architecture.' },
            desc: {
                es: 'Pipeline completo de Big Data que simula el ciclo de vida de datos de un sensor IoT. Implementado con arquitectura Medallón (Bronze, Silver, Gold) sobre un entorno dockerizado con Apache Airflow, PySpark, Hadoop, MinIO y Superset.',
                en: 'Complete Big Data pipeline simulating the data lifecycle of an IoT sensor. Implemented with a Medallion architecture (Bronze, Silver, Gold) on a dockerized environment using Apache Airflow, PySpark, Hadoop, MinIO, and Superset.'
            },
            techs: [
                skill('Python', 'https://docs.python.org/3/', brandIcon('python')),
                skill('Docker', 'https://docs.docker.com/', brandIcon('docker')),
                skill('Airflow', 'https://airflow.apache.org/docs/', brandIcon('apacheairflow')),
                skill('Spark', 'https://spark.apache.org/docs/latest/', brandIcon('apachespark')),
                skill('Hadoop', 'https://hadoop.apache.org/docs/', brandIcon('apachehadoop')),
                skill('MinIO', 'https://docs.min.io/aistor/', brandIcon('minio')),
                skill('Superset', 'https://superset.apache.org/docs/intro', brandIcon('apachesuperset')),
                skill('PostgreSQL', 'https://www.postgresql.org/docs/', brandIcon('postgresql')),
                skill('Jupyter', 'https://jupyterlab.readthedocs.io/en/stable/', brandIcon('jupyter')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/KevinAZHD/iot-medallion-pipeline',
            docs: 'https://github.com/KevinAZHD/iot-medallion-pipeline#readme'
        },
        'trabajo-spring-boot': {
            title: 'Gestor de Aulas',
            img: 'images/projects/trabajo-spring-boot.png',
            cardTitle: { es: 'Gestor de Aulas', en: 'Classroom Manager' },
            summary: { es: 'Gestor de aulas y recursos educativos con Spring Boot.', en: 'Classroom and educational resources manager with Spring Boot.' },
            desc: {
                es: 'Aplicación web desarrollada con Spring Boot para administrar y gestionar eficientemente edificios, aulas, reservas y usuarios de una institución educativa, con sistema de autenticación, roles de usuario y base de datos MySQL.',
                en: 'Web application developed with Spring Boot to efficiently manage buildings, classrooms, reservations, and users of an educational institution, featuring authentication, user roles, and a MySQL database.'
            },
            techs: [
                skill('Java', 'https://docs.oracle.com/en/java/', brandIcon('openjdk')),
                skill('Spring', 'https://docs.spring.io/spring-framework/reference/', brandIcon('spring')),
                skill('Spring Boot', 'https://docs.spring.io/spring-boot/reference/', brandIcon('springboot')),
                skill('MySQL', 'https://dev.mysql.com/doc/', brandIcon('mysql')),
                skill('HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML', brandIcon('html5')),
                skill('CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS', brandIcon('css')),
                skill('JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', brandIcon('javascript')),
                skill('Bootstrap', 'https://getbootstrap.com/docs/5.3/', brandIcon('bootstrap')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/Skade2050/Trabajo-Spring-Boot',
            docs: 'https://github.com/Skade2050/Trabajo-Spring-Boot#readme'
        },
        'modulo-odoo-kevin-co': {
            title: 'Módulos Odoo',
            img: 'images/projects/modulo-odoo.png',
            cardTitle: { es: 'Módulos Odoo', en: 'Odoo Modules' },
            summary: { es: 'Módulos personalizados para el ERP Odoo.', en: 'Custom modules for the Odoo ERP.' },
            desc: {
                es: 'Módulos personalizados para el ERP Odoo. Incluye desarrollo de modelos, vistas, permisos y operaciones CRUD completas para la gestión de empleados y herramientas empresariales como una calculadora integrada.',
                en: 'Custom modules for the Odoo ERP. Includes development of models, views, permissions, and complete CRUD operations for employee management and business tools such as an integrated calculator.'
            },
            techs: [
                skill('Python', 'https://docs.python.org/3/', brandIcon('python')),
                skill('Odoo', 'https://www.odoo.com/documentation/19.0/', brandIcon('odoo')),
                skill('PostgreSQL', 'https://www.postgresql.org/docs/', brandIcon('postgresql')),
                skill('Git', 'https://git-scm.com/doc', brandIcon('git'))
            ],
            github: 'https://github.com/Skade2050/Modulo-Odoo-Kevin-Co',
            docs: 'https://github.com/Skade2050/Modulo-Odoo-Kevin-Co#readme'
        }
    };

    // Tarjetas de proyecto: se renderizan desde PROJECTS_DATA para evitar duplicar contenido.
    function createProjectCard(projectId, data) {
        const title = data.cardTitle || { es: data.title, en: data.title };
        const article = document.createElement('article');
        article.className = 'card project-card';
        article.dataset.project = projectId;
        article.setAttribute('role', 'button');
        article.tabIndex = 0;
        article.innerHTML = `
            <img src="${data.img}" alt="${title.es}" class="project-img">
            <div class="project-info">
                <h3 data-es="${title.es}" data-en="${title.en}">${currentText(title)}</h3>
                <p data-es="${data.summary.es}" data-en="${data.summary.en}">${currentText(data.summary)}</p>
                <span class="cert-link" data-es="Ver detalles ↗" data-en="View details ↗">
                    ${state.lang === 'en' ? 'View details ↗' : 'Ver detalles ↗'}
                </span>
            </div>
        `;

        return article;
    }

    function renderProjects() {
        if (!refs.projectsGrid) return;

        const fragment = document.createDocumentFragment();
        Object.entries(PROJECTS_DATA).forEach(([projectId, data]) => {
            fragment.append(createProjectCard(projectId, data));
        });

        refs.projectsGrid.replaceChildren(fragment);
    }

    function openProjectModal(projectId) {
        const data = PROJECTS_DATA[projectId];
        if (!data) return;

        const modalBody = $('#modalBody');
        const modal = $('#projectModal');
        const modalContent = modalBody?.closest('.modal-content');
        if (!modal || !modalBody || !modalContent) return;

        const isEn = state.lang === 'en';

        // La imagen del proyecto queda como fondo suave del modal.
        modalContent.style.setProperty('--modal-bg', `url('../${data.img}')`);

        modalBody.innerHTML = `
            <h3 class="modal-body-title">${data.title}</h3>
            <p class="modal-body-desc">${currentText(data.desc)}</p>
            <div class="modal-tech">
                <h4>${isEn ? 'Technologies' : 'Tecnologías'}</h4>
                <div class="modal-tech-list">
                    ${data.techs.map(tech => `
                        <a href="${tech.href}" target="_blank" rel="noopener" class="modal-tech-item" title="${tech.name}">
                            <img src="${tech.icon}" alt="${tech.name}" class="${tech.className}">
                            ${tech.name}
                        </a>
                    `).join('')}
                </div>
            </div>
            <div class="hero-buttons modal-actions">
                ${data.docs ? `
                <a href="${data.docs}" target="_blank" rel="noopener" class="btn btn-outline">
                    <i class="fas fa-book"></i> ${isEn ? 'Documentation' : 'Documentación'}
                </a>
                ` : ''}
                <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary">
                    <i class="fab fa-github"></i> ${isEn ? 'View on GitHub' : 'Ver en GitHub'}
                </a>
            </div>
        `;

        openModal(modal);
    }

    // Disponible para enlaces externos o pruebas manuales desde consola.
    window.openProjectModal = openProjectModal;

    function initProjectCards() {
        $$('.project-card[data-project]').forEach(card => {
            const open = () => openProjectModal(card.dataset.project);
            card.addEventListener('click', open);
            card.addEventListener('keydown', event => openFromKeyboard(event, open));
        });
    }

    function bindModal(modalId, closeId) {
        const modal = $(`#${modalId}`);
        const closeButton = $(`#${closeId}`);
        if (!modal) return;

        closeButton?.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal(modal);
        });
    }

    function initModals() {
        bindModal('projectModal', 'modalClose');
        bindModal('skillModal', 'skillModalClose');

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeAllModals();
        });
    }

    async function initGitHubStars() {
        const cards = $$('.project-card');
        if (!cards.length) return;

        const repos = {};
        cards.forEach(card => {
            const project = PROJECTS_DATA[card.dataset.project];
            const githubUrl = project?.github;
            if (!githubUrl) return;

            const repoPath = githubUrl.replace('https://github.com/', '').replace('#readme', '').replace(/\/$/, '');
            repos[repoPath] = card;
        });

        Object.values(repos).forEach(card => {
            if (card.querySelector('.project-stats')) return;

            const statsDiv = document.createElement('div');
            statsDiv.className = 'project-stats';
            statsDiv.innerHTML = `
                <div class="stat-badge stat-forks" hidden><i class="fas fa-code-branch"></i> <span class="fork-count"></span></div>
                <div class="stat-badge stat-stars" hidden><i class="fas fa-star"></i> <span class="star-count"></span></div>
            `;
            card.appendChild(statsDiv);
        });

        const now = Date.now();
        for (const [repoPath, card] of Object.entries(repos)) {
            const cacheKey = `gh_stats_${repoPath}`;
            let cached = null;
            try {
                const raw = storage.get(cacheKey);
                if (raw) cached = JSON.parse(raw);
            } catch (_) { }

            let stars = null;
            let forks = null;

            if (cached && (now - cached.timestamp < 3600000)) {
                stars = cached.stars;
                forks = cached.forks;
            } else {
                try {
                    const response = await fetch(`https://api.github.com/repos/${repoPath}`);
                    if (response.ok) {
                        const data = await response.json();
                        stars = data.stargazers_count;
                        forks = data.forks_count;
                        storage.set(cacheKey, JSON.stringify({ stars, forks, timestamp: now }));
                    }
                } catch (e) {
                    console.error('Error fetching stats:', e);
                }
            }

            const statsDiv = card.querySelector('.project-stats');
            if (!statsDiv) continue;

            const starsBadge = statsDiv.querySelector('.stat-stars');
            const forksBadge = statsDiv.querySelector('.stat-forks');

            starsBadge.hidden = !(stars > 0);
            forksBadge.hidden = !(forks > 0);

            if (stars > 0) {
                starsBadge.querySelector('.star-count').textContent = stars;
            }

            if (forks > 0) {
                forksBadge.querySelector('.fork-count').textContent = forks;
            }
        }
    }

    resetScrollPosition();
    renderProjects();
    renderSkills();
    initTheme();
    initLanguage();
    initNavigation();
    initOrientationScrollRestore();
    initLogoParticles();
    initReveal();
    initProjectCards();
    initModals();
    initGitHubStars();

    const foucStyle = document.getElementById('fouc-style');
    if (foucStyle) {
        requestAnimationFrame(() => foucStyle.remove());
    }

    // Ocultar splash screen
    setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) {
            document.documentElement.classList.remove('loading-splash');
            document.body.classList.remove('loading-splash');
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.remove();
            }, 600);
        }
    }, 1500);
});
