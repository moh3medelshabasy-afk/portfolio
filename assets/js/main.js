/**
 * Mohamed Ahmed Portfolio - Main Script
 * Consolidated and optimized for performance and maintainability.
 */

// ============================================
// 1. DATA CONFIGURATION
// ============================================
const PROJECTS_DATA = [
    {
        title: "E-Commerce Website Testing",
        image: "assets/files/manual.png",
        category: "Manual Testing",
        description: "Comprehensive manual testing of an e-commerce platform including functional, UI/UX, and compatibility testing across multiple browsers and devices.",
        technologies: ['Test Cases', 'Bug Reports', 'JIRA', 'TestRail', 'Chrome DevTools'],
        demoLink: "https://drive.google.com/file/d/sample-test-report",
        githubLink: "https://github.com/mohamed-ahmed-qc/ecommerce-testing"
    },
    {
        title: "Web Automation with Selenium",
        image: "assets/files/automation.png",
        category: "Automation Testing",
        description: "Automated test suite for a web application using Selenium WebDriver with Python. Includes login, search, and checkout scenarios with POM design pattern.",
        technologies: ['Selenium', 'Python', 'Pytest', 'Page Object Model', 'Jenkins'],
        demoLink: "https://github.com/mohamed-ahmed-qc/selenium-automation",
        githubLink: "https://github.com/mohamed-ahmed-qc/selenium-automation"
    },
    {
        title: "Load Testing - JMeter",
        image: "assets/files/performance.jpg",
        category: "Performance Testing",
        description: "Performance testing of e-commerce website using JMeter. Load testing with 1000+ concurrent users, analyzing response times and bottlenecks.",
        technologies: ['JMeter', 'BlazeMeter', 'Grafana', 'Performance Metrics', 'Load Testing'],
        demoLink: "https://drive.google.com/file/d/sample-jmeter-report",
        githubLink: "https://github.com/mohamed-ahmed-qc/jmeter-load-testing"
    },
    {
        title: "REST API Testing with Postman",
        image: "assets/files/api.jpg",
        category: "API Testing",
        description: "Complete API testing collection using Postman including CRUD operations, authentication, and automated test scripts with Newman.",
        technologies: ['Postman', 'Newman', 'REST API', 'JSON Schema', 'Collections'],
        demoLink: "https://documenter.getpostman.com/view/sample-collection",
        githubLink: "https://github.com/mohamed-ahmed-qc/postman-api-tests"
    }
];

// ============================================
// 2. CORE MODULES
// ============================================

/**
 * Navigation Module
 * Handles menu toggling, sticky header, and active link highlighting
 */
const NavigationModule = (() => {
    const init = () => {
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        const header = document.querySelector('.header');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar a');

        // Toggle Menu
        if (menuIcon && navbar) {
            menuIcon.onclick = () => {
                menuIcon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
            };

            // Close menu on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuIcon.classList.remove('bx-x');
                    navbar.classList.remove('active');
                });
            });
        }

        // Scroll Events
        window.onscroll = () => {
            // Sticky Header
            if (header) header.classList.toggle('sticky', window.scrollY > 100);

            // Active Link Highlighting
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    return { init };
})();

/**
 * Animation Module
 * Handles typing effect, scroll reveals, and stats counter
 */
const AnimationModule = (() => {
    const initTyping = () => {
        const textElement = document.getElementById('typing-text');
        if (!textElement) return;

        const texts = ['Software Tester', 'Automation Tester', 'API Tester', 'Performance Tester'];
        let textIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 100;

        const type = () => {
            const currentText = texts[textIndex];
            textElement.textContent = isDeleting
                ? currentText.substring(0, charIndex - 1)
                : currentText.substring(0, charIndex + 1);

            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
            typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }
            setTimeout(type, typingSpeed);
        };
        type();
    };

    const initScrollReveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(el => observer.observe(el));
    };

    const initStatsCounter = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsSection = document.querySelector('.about-stats-modern');
        if (!statsSection) return;

        let animated = false;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 100;
                    const update = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current);
                            requestAnimationFrame(update);
                        } else {
                            stat.textContent = target;
                        }
                    };
                    update();
                });
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    };

    return { init: () => { initTyping(); initScrollReveal(); initStatsCounter(); } };
})();

/**
 * Projects Module
 * Handles dynamic project rendering and filtering
 */
const ProjectsModule = (() => {
    const renderProjects = (filter = 'All') => {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;

        grid.innerHTML = '';
        const filtered = filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

        filtered.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card reveal-card';

            const shortDesc = project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description;

            card.innerHTML = `
                <div class="project-img-container">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-info">
                    <div class="project-meta"><span class="project-category">${project.category}</span></div>
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-desc-wrapper">
                        <p class="project-desc" data-full="${project.description}" data-short="${shortDesc}">${shortDesc}</p>
                        ${project.description.length > 100 ? `<button class="desc-toggle-btn">Read More</button>` : ''}
                    </div>
                    <div class="project-tags">
                        ${project.technologies.map((t, i) => `<span class="tag ${i >= 3 ? 'tag-hidden' : ''}">${t}</span>`).join('')}
                        ${project.technologies.length > 3 ? `<span class="tag tag-more" data-count="${project.technologies.length - 3}">+${project.technologies.length - 3} more</span>` : ''}
                    </div>
                    <div class="project-actions">
                        <a href="${project.demoLink}" target="_blank" class="project-btn demo-btn"><i class='bx bxl-google-drive'></i> Drive</a>
                        <a href="${project.githubLink}" target="_blank" class="project-btn github-btn"><i class='bx bxl-github'></i> GitHub</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
            setTimeout(() => card.classList.add('active'), index * 100);
        });

        // Event Delegation for dynamic elements
        grid.onclick = (e) => {
            if (e.target.classList.contains('desc-toggle-btn')) {
                const btn = e.target;
                const p = btn.previousElementSibling;
                const isExpanded = btn.textContent === 'Read Less';
                p.textContent = isExpanded ? p.dataset.short : p.dataset.full;
                btn.textContent = isExpanded ? 'Read More' : 'Read Less';
            }
            if (e.target.classList.contains('tag-more')) {
                const btn = e.target;
                const container = btn.parentElement;
                const isExpanded = btn.textContent === 'Show less';
                container.querySelectorAll('.tag-hidden').forEach(t => t.classList.toggle('tag-visible'));
                btn.textContent = isExpanded ? `+${btn.dataset.count} more` : 'Show less';
            }
        };
    };

    const init = () => {
        const container = document.querySelector('.projects-container');
        if (!container) return;

        const categories = ['All', ...new Set(PROJECTS_DATA.map(p => p.category))];
        container.innerHTML = `
            <div class="filter-container">
                ${categories.map(cat => `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('')}
            </div>
            <div class="projects-grid"></div>
        `;

        const filterBtns = container.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.onclick = () => {
                if (btn.classList.contains('active')) return;
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const grid = container.querySelector('.projects-grid');
                grid.classList.add('filtering');
                setTimeout(() => {
                    renderProjects(btn.dataset.filter);
                    grid.classList.remove('filtering');
                }, 300);
            };
        });

        renderProjects();
    };

    return { init };
})();

/**
 * Form Module
 * Handles contact form submission and validation
 */
const FormModule = (() => {
    const init = () => {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const status = document.getElementById('formStatus');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;

            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            status.style.display = 'none';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.textContent = '✓ Message sent successfully!';
                    status.className = 'form-status success';
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch (err) {
                status.textContent = '✗ Something went wrong. Please try again.';
                status.className = 'form-status error';
            } finally {
                status.style.display = 'block';
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                setTimeout(() => status.style.display = 'none', 5000);
            }
        };
    };

    return { init };
})();

/**
 * Certificate Module
 */
const CertificateModule = (() => {
    const init = () => {
        document.querySelectorAll('.cert-view-btn').forEach(btn => {
            btn.onclick = () => {
                const path = btn.getAttribute('data-cert');
                if (path) window.open(path, '_blank', 'noopener,noreferrer');
            };
        });
    };
    return { init };
})();

// ============================================
// 3. INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    NavigationModule.init();
    AnimationModule.init();
    ProjectsModule.init();
    FormModule.init();
    CertificateModule.init();
});
