# Owais Khattak - Dynamic Personal Portfolio


  <h3 align="center">Modern & Interactive Portfolio</h3>

  <p align="center">
    A fully functional, responsive, and interactive personal portfolio website built with modern web technologies.
    <br />
    <a href="#-features">View Features</a>
    ·
    <a href="#-getting-started">Getting Started</a>
    ·
    <a href="#-customization">Customization Guide</a>
  </p>
</div>

---

## 📖 About The Project

This project is a sophisticated personal portfolio website designed to showcase professional achievements, education, and skills in a modern, engaging way. It moves beyond static HTML templates by incorporating dynamic features like theme switching (with persistence), interactive data tables, and a seamless project gallery.

It is built with a focus on:
*   **User Experience:** Smooth animations, intuitive navigation, and responsive layout.
*   **Maintainability:** Clean code structure allowing for easy updates to content.
*   **Aesthetics:** A polished, professional look with attention to detail in typography and color.

### 🛠️ Built With

*   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
*   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
*   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 Features

### Core Functionality
-   **Dynamic Theme Switcher**: 🌓 Toggle seamlessly between Light and Dark modes. Your preference is saved locally, so the site remembers your choice on your next visit.
-   **Responsive Design**: 📱 Fully optimized for all devices - looks great on desktops, tablets, and mobile phones.
-   **Smooth Navigation**: 🔗 Sticky navigation bar with smooth scrolling to sections.

### Interactive Elements
-   **Academic Table**: 🎓 A sortable and filarble table to display education history. You can sort by year or filter by education level (University, College, School).
-   **CV Viewer**: 📄 Integrated PDF viewer modal. Visitors can view your CV directly on the site or download it.
-   **Project Gallery**: 🖼️ A touch-friendly carousel slider to browse through your portfolio projects.
-   **Contact Form**: 📧 Includes client-side validation to ensure correctly formatted names, emails, and messages before submission.

---

## 📂 Project Structure

A clean organization makes the project easy to navigate and maintain:

```
Owais Portfolio/
├── assets/
│   ├── profile.jpg       # Profile Picture
│   └── cv.pdf            # Your CV/Resume file
├── index.html            # Main HTML structure
├── style.css             # Styling, themes, and animations
├── script.js             # Logic, interactivity, and data
└── README.md             # Documentation
```

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   A modern web browser (Chrome, Firefox, Safari, Edge).
*   A text editor (VS Code recommended) if you plan to edit the code.

### Installation

1.  **Clone the repo** (or download the ZIP file):
    ```sh
    git clone https://github.com/Owaiskhattak1/Owais-Portfolio.git
    ```
2.  **Open the folder**:
    Navigate to the project directory.
3.  **Run the project**:
    Simply double-click `index.html` to open it in your browser.
    *   *Tip:* For the best development experience, use the "Live Server" extension in VS Code.

---

## 🎨 Customizing Styles

The project uses CSS variables for easy theming. Open `style.css` and modify the root variables:

```css
/* Light Mode Colors */
:root {
    --primary-color: #2563eb;
    --bg-color: #ffffff;
    /* ... other variables */
}

/* Dark Mode Colors */
[data-theme="dark"] {
    --primary-color: #60a5fa;
    --bg-color: #0f172a;
    /* ... other variables */
}
```

---

## 📝 How to Update Content

You don't need to be a coding expert to update your portfolio. Here is how to personalize it:

### 1. Update Profile Picture
*   Replace `assets/profile.jpg` with your own photo.
*   Keep the filename `profile.jpg` to avoid changing the code, or update the `src` attribute in `index.html`.

### 2. Update CV
*   Save your resume as a PDF.
*   Name it `cv.pdf` and replace the file in the `assets/` folder.

### 3. Update Academic Data (Education)
*   Open `script.js`.
*   Find the `academicData` array. It looks like this:
    ```javascript
    const academicData = [
       { year: 2024, level: 'University', degree: 'BS CS', institute: 'Institute Name', grade: '3.5' },
       // ... add your data here
    ];
    ```
*   Simply edit the text inside the quotes or add new lines for new degrees.

### 4. Update Projects
*   Open `index.html`.
*   Search for the section with `id="projects"`.
*   Copy and paste an existing `<li>` block to add a new project card, then update the title and description.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📧 Contact

**Owais Khattak**

*   Email: [0awaiskhattak1@gmail.com](mailto:0awaiskhattak1@gmail.com)
*   GitHub: [Owaiskhattak1](https://github.com/Owaiskhattak1)
*   LinkedIn: [owais-khattak-34a0062a4](https://www.linkedin.com/in/owais-khattak-34a0062a4/)

---
<p align="center">Made with ❤️ by Owais Khattak</p>
