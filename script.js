document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. THEME SWITCHER LOGIC
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    /**
     * Sets the theme of the website and updates localStorage
     * @param {string} theme - 'light' or 'dark'
     */
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Toggle icon class based on theme
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Check for saved user preference on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Event Listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // ==========================================
    // 2. MOBILE NAVIGATION (HAMBURGER MENU)
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');

    // Toggle menu visibility on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a navigation link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });

    // ==========================================
    // 3. ACADEMIC TABLE (SORT & FILTER)
    // ==========================================
    // Data source for the table
    const academicData = [
        { year: 2024, level: 'University', degree: 'BS Computer Science', institute: 'UET Abbottabad', grade: '3.5 CGPA' },
        { year: 2021, level: 'Secondary', degree: 'HSSC (Pre-Engineering)', institute: 'Peace College', grade: 'A+' },
        { year: 2019, level: 'Secondary', degree: 'SSC (Science)', institute: 'Public School', grade: 'A' },
        { year: 2017, level: 'Primary', degree: 'Primary Education', institute: 'Model School', grade: 'Pass' }
    ];

    const tableBody = document.getElementById('table-body');
    const filterSelect = document.getElementById('filter-level');
    const sortBtn = document.getElementById('sort-year');

    // State variables
    let currentData = [...academicData];
    let sortAsc = false;

    /**
     * Renders the academic table rows based on provided data
     * @param {Array} data - Array of academic objects
     */
    function renderTable(data) {
        tableBody.innerHTML = ''; // Clear existing rows

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.year}</td>
                <td><span class="badge">${item.level}</span></td>
                <td>${item.degree}</td>
                <td>${item.institute}</td>
                <td>${item.grade}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial Table Render
    renderTable(currentData);

    // Filter Event Listener
    filterSelect.addEventListener('change', (e) => {
        const level = e.target.value;
        if (level === 'all') {
            currentData = [...academicData];
        } else {
            currentData = academicData.filter(item => item.level === level);
        }
        renderTable(currentData);
    });

    // Sort Event Listener
    sortBtn.addEventListener('click', () => {
        sortAsc = !sortAsc; // Toggle sort direction

        currentData.sort((a, b) => {
            return sortAsc ? a.year - b.year : b.year - a.year;
        });

        // Update Button Icon to show direction
        sortBtn.innerHTML = `Sort by Year <i class="fas fa-sort-${sortAsc ? 'up' : 'down'}"></i>`;
        renderTable(currentData);
    });

    // ==========================================
    // 4. CV VIEWER MODAL
    // ==========================================
    const cvModal = document.getElementById('cv-modal');
    const viewCvBtn = document.getElementById('view-cv-btn');
    const closeCvBtn = document.getElementById('close-cv');

    // Open Modal
    viewCvBtn.addEventListener('click', () => {
        cvModal.style.display = 'flex';
        // Small timeout to allow CSS transition to trigger
        setTimeout(() => cvModal.classList.add('open'), 10);
    });

    // Close Modal Function
    function closeModal() {
        cvModal.classList.remove('open');
        setTimeout(() => cvModal.style.display = 'none', 300);
    }

    closeCvBtn.addEventListener('click', closeModal);

    // Close when clicking outside content area
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) {
            closeModal();
        }
    });

    // ==========================================
    // 5. PROJECT CAROUSEL SLIDER
    // ==========================================
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
    const dotsNav = document.getElementById('carousel-nav');
    const dots = Array.from(dotsNav.children);

    let currentSlideIndex = 0;

    /**
     * Moves the carousel to the specified slide index
     * @param {number} index - Index of the target slide
     */
    function moveSlide(index) {
        // Translate the track to show the correct slide
        track.style.transform = 'translateX(-' + (index * 100) + '%)';

        // Update active dot indicator
        dots.forEach(d => d.classList.remove('current-slide'));
        dots[index].classList.add('current-slide');

        currentSlideIndex = index;
    }

    // Next Button Click
    nextButton.addEventListener('click', () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length; // Loop back to start
        moveSlide(nextIndex);
    });

    // Prev Button Click
    prevButton.addEventListener('click', () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Loop to end
        moveSlide(prevIndex);
    });

    // Dot Navigation Click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveSlide(index);
        });
    });

    // ==========================================
    // 6. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        let isValid = true;

        // Get Form Elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset previous error states
        [name, email, message].forEach(el => el.parentElement.classList.remove('error'));

        // Name Validation
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Email Validation
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Message Validation
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        }

        // Success State
        if (isValid) {
            // Construct mailto link
            const subject = `Portfolio Contact from ${name.value}`;
            const body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0A%0D%0AMessage:%0D%0A${message.value}`;
            const mailtoLink = `mailto:0awaiskhattak1@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            // Feedback and reset
            alert('Opening your email client to send the message...');
            contactForm.reset();
        }
    });

    /**
     * Helper function to show error message under input
     */
    function showError(input, msg) {
        const formGroup = input.parentElement;
        const errorSpan = formGroup.querySelector('.error-msg');
        errorSpan.innerText = msg;
        formGroup.classList.add('error');
    }

    /**
     * Regex helper for email format validation
     */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ==========================================
    // 7. PROGRESS TRACKER ANIMATION
    // ==========================================
    const progressSection = document.querySelector('.skills-tracker');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Use IntersectionObserver to start animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width; // Triggers CSS transition
                });
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    if (progressSection) {
        observer.observe(progressSection);
    }

    // ==========================================
    // 8. SCROLL SPY (Active Nav Link)
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');

                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(currentId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of section is visible

    sections.forEach(section => {
        scrollObserver.observe(section);
    });

});
