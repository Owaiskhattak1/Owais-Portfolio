/* ========================================
   MODERN PORTFOLIO WEBSITE - SCRIPT.JS
   Advanced Interactive JavaScript Functionality
   ======================================== */

// ========== ACADEMIC BACKGROUND DATA ==========
/**
 * Academic history data structure
 * Each object represents one education level with complete details
 * To update: Modify this array with your own academic records
 */
const academicData = [
    {
        level: "Primary",
        institution: "Bright Future Primary School",
        years: "2005-2010",
        city: "Abbottabad",
        remarks: "Foundation education completed"
    },
    {
        level: "Secondary",
        institution: "Government High School",
        years: "2010-2015",
        city: "Abbottabad",
        remarks: "Matriculation with Science"
    },
    {
        level: "Intermediate",
        institution: "Superior College",
        years: "2015-2017",
        city: "Abbottabad",
        remarks: "Pre-Engineering (FSc)"
    },
    {
        level: "Undergraduate",
        institution: "UET Abbottabad",
        years: "2021-Present",
        city: "Abbottabad",
        remarks: "BS Computer Science - In Progress"
    }
];

// ========== PROGRESS TRACKER DATA ==========
/**
 * Progress tracker tasks/milestones
 * To update: Add or modify tasks in this array
 */
let progressData = [
    { id: 1, category: "Frontend Development", skill: "HTML5 & Semantic Structure", progress: 90, color: "#2563eb" },
    { id: 2, category: "Frontend Development", skill: "CSS3 & Animations", progress: 85, color: "#2563eb" },
    { id: 3, category: "Frontend Development", skill: "JavaScript & DOM Manipulation", progress: 80, color: "#2563eb" },
    { id: 4, category: "Frontend Development", skill: "Responsive Web Design", progress: 90, color: "#2563eb" },
    { id: 5, category: "Frontend Development", skill: "React.js Fundamentals", progress: 60, color: "#2563eb" },
    { id: 6, category: "Tools & Workflow", skill: "Git & Version Control", progress: 75, color: "#10b981" },
    { id: 7, category: "Tools & Workflow", skill: "VS Code & Development Tools", progress: 85, color: "#10b981" },
    { id: 8, category: "Backend Development", skill: "Node.js & Express", progress: 50, color: "#f59e0b" },
    { id: 9, category: "Backend Development", skill: "Database Fundamentals", progress: 45, color: "#f59e0b" },
    { id: 10, category: "Design & UI/UX", skill: "Graphics Design", progress: 80, color: "#8b5cf6" },
    { id: 11, category: "Design & UI/UX", skill: "UI/UX Principles", progress: 70, color: "#8b5cf6" }
];

// ========== PROJECT DATA FOR LIGHTBOX ==========
const projectImages = [
    {
        src: "assets/projects/project1.jpg",
        title: "Web Dashboard",
        description: "Modern analytics dashboard with data visualization",
        category: "web"
    },
    {
        src: "assets/projects/project2.jpg",
        title: "E-Commerce App",
        description: "Mobile shopping application with modern UI",
        category: "mobile"
    },
    {
        src: "assets/projects/project3.jpg",
        title: "Portfolio Website",
        description: "Elegant portfolio with glassmorphism effects",
        category: "design"
    }
];

// ========== TYPING ANIMATION DATA ==========
const typingTexts = [
    "A CS Undergraduate at UET Abbottabad",
    "A Graphics Designer",
    "A Front-end Web Developer",
    "An Entry Level Programmer"
];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

// ========== INITIALIZATION ==========
/**
 * Initialize all features when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Show loading screen
    showLoadingScreen();

    // Load saved theme
    loadTheme();

    // Render academic table
    renderAcademicTable(academicData);

    // Render progress tracker
    renderProgressTracker();

    // Initialize all event listeners
    initializeEventListeners();

    // Initialize professional features
    initScrollProgress();
    initScrollReveal();
    initTypingAnimation();
    initStatsCounter();

    // Hide loading screen after everything is loaded
    window.addEventListener('load', hideLoadingScreen);
});

// ========== LOADING SCREEN ==========
/**
 * Show loading screen with progress animation
 */
function showLoadingScreen() {
    const loadingProgress = document.getElementById('loading-progress');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;

        if (loadingProgress) {
            loadingProgress.style.width = progress + '%';
        }

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
}

/**
 * Hide loading screen
 */
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }
}

// ========== SCROLL PROGRESS INDICATOR ==========
/**
 * Update scroll progress bar
 */
function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight);
        scrollProgress.style.transform = `scaleX(${scrolled})`;
    });
}

// ========== SCROLL REVEAL ANIMATIONS ==========
/**
 * Reveal elements on scroll using Intersection Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// ========== TYPING ANIMATION ==========
/**
 * Animated typing effect for bio text
 */
function initTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;

    function type() {
        const currentText = typingTexts[typingIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingTexts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ========== STATS COUNTER ANIMATION ==========
/**
 * Animate stats numbers counting up
 */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat__number');

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

/**
 * Animate counter from 0 to target
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const isDecimal = target % 1 !== 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
    }, 30);
}

// ========== EVENT LISTENERS INITIALIZATION ==========
/**
 * Set up all event listeners for interactive elements
 */
function initializeEventListeners() {
    // Navigation
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav__close'); // Fixed ID mismatch
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    if (navClose) {
        navClose.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
            if (navMenu && navMenu.classList.contains('show-menu')) { // Updated class name
                toggleMobileMenu();
            }

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // CV Viewer
    const viewCvBtn = document.getElementById('view-cv-btn');
    const cvCloseBtn = document.getElementById('cv-close-btn');
    const cvViewer = document.getElementById('cv-viewer');

    if (viewCvBtn) {
        viewCvBtn.addEventListener('click', openCVViewer);
    }

    if (cvCloseBtn) {
        cvCloseBtn.addEventListener('click', closeCVViewer);
    }

    // Close CV viewer when clicking overlay
    if (cvViewer) {
        const overlay = cvViewer.querySelector('.cv-viewer__overlay');
        if (overlay) {
            overlay.addEventListener('click', closeCVViewer);
        }
    }

    // Academic table controls
    const levelFilter = document.getElementById('level-filter');
    const sortBy = document.getElementById('sort-by');

    if (levelFilter) {
        levelFilter.addEventListener('change', handleFilter);
    }

    if (sortBy) {
        sortBy.addEventListener('change', handleSort);
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Project filter buttons
    const filterBtns = document.querySelectorAll('.filter__btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Project cards for lightbox
    const projectCards = document.querySelectorAll('.project__card');
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            openLightbox(index);
        });
    });

    // Lightbox controls
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightbox = document.getElementById('lightbox');

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => navigateLightbox(1));
    }

    // Close lightbox on background click
    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function (e) {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dynamic navbar active state on scroll
    initNavbarActiveState();
}

// ========== NAVIGATION FUNCTIONS ==========
/**
 * Toggle mobile hamburger menu
 */
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('show-menu');
    }
}

/**
 * Smooth scroll to target section
 * @param {string} target - CSS selector of target element
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// ========== THEME SWITCHER FUNCTIONS ==========
/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }

    // Save to localStorage
    saveTheme(newTheme);
}

/**
 * Save theme preference to localStorage
 * @param {string} theme - Theme name ('light' or 'dark')
 */
function saveTheme(theme) {
    localStorage.setItem('portfolio-theme', theme);
}

/**
 * Load saved theme from localStorage
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

// ========== ACADEMIC TABLE FUNCTIONS ==========
/**
 * Render academic table with data
 * @param {Array} data - Array of academic records
 */
function renderAcademicTable(data) {
    const tbody = document.getElementById('academic-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    data.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.level}</td>
            <td>${record.institution}</td>
            <td>${record.years}</td>
            <td>${record.city}</td>
            <td>${record.remarks}</td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Handle filter change event
 */
function handleFilter() {
    const filterValue = document.getElementById('level-filter').value;
    let filteredData = academicData;

    if (filterValue !== 'all') {
        filteredData = academicData.filter(record => record.level === filterValue);
    }

    renderAcademicTable(filteredData);
}

/**
 * Handle sort change event
 */
function handleSort() {
    const sortValue = document.getElementById('sort-by').value;
    const filterValue = document.getElementById('level-filter').value;

    // Get current filtered data
    let dataToSort = academicData;
    if (filterValue !== 'all') {
        dataToSort = academicData.filter(record => record.level === filterValue);
    }

    // Create a copy to sort
    let sortedData = [...dataToSort];

    // Sort based on selection
    switch (sortValue) {
        case 'year-asc':
            sortedData.sort((a, b) => {
                const yearA = parseInt(a.years.split('-')[0]);
                const yearB = parseInt(b.years.split('-')[0]);
                return yearA - yearB;
            });
            break;
        case 'year-desc':
            sortedData.sort((a, b) => {
                const yearA = parseInt(a.years.split('-')[0]);
                const yearB = parseInt(b.years.split('-')[0]);
                return yearB - yearA;
            });
            break;
        case 'institution-asc':
            sortedData.sort((a, b) => a.institution.localeCompare(b.institution));
            break;
        case 'institution-desc':
            sortedData.sort((a, b) => b.institution.localeCompare(a.institution));
            break;
    }

    renderAcademicTable(sortedData);
}

// ========== CV VIEWER FUNCTIONS ==========
/**
 * Open CV viewer modal
 */
function openCVViewer() {
    const cvViewer = document.getElementById('cv-viewer');
    if (cvViewer) {
        cvViewer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close CV viewer modal
 */
function closeCVViewer() {
    const cvViewer = document.getElementById('cv-viewer');
    if (cvViewer) {
        cvViewer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========== PROJECT FILTER FUNCTIONS ==========
/**
 * Filter projects by category
 * @param {string} category - Category to filter by
 */
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project__card');

    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// ========== LIGHTBOX FUNCTIONS ==========
let currentLightboxIndex = 0;

/**
 * Open lightbox with specific image
 * @param {number} index - Index of image to display
 */
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg && lightboxCaption) {
        const project = projectImages[index];
        lightboxImg.src = project.src;
        lightboxImg.alt = project.title;
        lightboxCaption.textContent = `${project.title} - ${project.description}`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Navigate to next/previous image in lightbox
 * @param {number} direction - Direction to navigate (-1 for previous, 1 for next)
 */
function navigateLightbox(direction) {
    currentLightboxIndex += direction;

    // Wrap around
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = projectImages.length - 1;
    } else if (currentLightboxIndex >= projectImages.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const project = projectImages[currentLightboxIndex];

    if (lightboxImg && lightboxCaption) {
        lightboxImg.style.opacity = '0';

        setTimeout(() => {
            lightboxImg.src = project.src;
            lightboxImg.alt = project.title;
            lightboxCaption.textContent = `${project.title} - ${project.description}`;
            lightboxImg.style.opacity = '1';
        }, 200);
    }
}

// ========== PROGRESS TRACKER FUNCTIONS ==========
/**
 * Render skill progress bars grouped by category
 */
function renderProgressTracker() {
    const tasksContainer = document.getElementById('progress-tasks');
    if (!tasksContainer) return;

    tasksContainer.innerHTML = '';

    // Group skills by category
    const categories = {};
    progressData.forEach(skill => {
        if (!categories[skill.category]) {
            categories[skill.category] = [];
        }
        categories[skill.category].push(skill);
    });

    // Render each category
    Object.keys(categories).forEach(categoryName => {
        const categorySection = document.createElement('div');
        categorySection.className = 'progress-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'progress-category__title';
        categoryTitle.textContent = categoryName;
        categorySection.appendChild(categoryTitle);

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'progress-skills';

        // Render each skill in the category
        categories[categoryName].forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.setAttribute('data-skill-id', skill.id);

            skillItem.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">${skill.skill}</span>
                    <span class="skill-percentage">${skill.progress}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-bar-fill" data-progress="${skill.progress}" style="background: ${skill.color}"></div>
                </div>
            `;

            skillsContainer.appendChild(skillItem);
        });

        categorySection.appendChild(skillsContainer);
        tasksContainer.appendChild(categorySection);
    });

    // Animate progress bars when they come into view
    animateSkillBars();
}

/**
 * Animate skill progress bars using Intersection Observer
 */
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');

                // Trigger animation
                setTimeout(() => {
                    bar.style.width = `${progress}%`;
                }, 100);

                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// ========== CONTACT FORM FUNCTIONS ==========
/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form fields
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    // Clear previous errors
    clearFormErrors();

    // Validate fields
    let isValid = true;

    if (!validateName(nameInput.value)) {
        showError('name', 'Please enter your name');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!validateMessage(messageInput.value)) {
        showError('message', 'Please enter a message');
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        showSuccess();
        // Reset form
        setTimeout(() => {
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            hideSuccess();
        }, 3000);
    }
}

/**
 * Validate name field
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid
 */
function validateName(name) {
    return name.trim().length > 0;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Validate message field
 * @param {string} message - Message to validate
 * @returns {boolean} - True if valid
 */
function validateMessage(message) {
    return message.trim().length > 0;
}

/**
 * Show error message for a field
 * @param {string} fieldName - Name of field (name, email, message)
 * @param {string} message - Error message to display
 */
function showError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    const inputElement = document.getElementById(`contact-${fieldName}`);

    if (errorElement) {
        errorElement.textContent = message;
    }

    if (inputElement) {
        inputElement.classList.add('error');
    }
}

/**
 * Clear all form errors
 */
function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form__error');
    const inputElements = document.querySelectorAll('.form__input, .form__textarea');

    errorElements.forEach(el => el.textContent = '');
    inputElements.forEach(el => el.classList.remove('error'));
}

/**
 * Show success message
 */
function showSuccess() {
    const successElement = document.getElementById('form-success');
    if (successElement) {
        successElement.classList.add('show');
    }
}

/**
 * Hide success message
 */
function hideSuccess() {
    const successElement = document.getElementById('form-success');
    if (successElement) {
        successElement.classList.remove('show');
    }
}

/**
 * Initialize dynamic navbar active state based on scroll position
 */
function initNavbarActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');

                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}
