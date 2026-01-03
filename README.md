# Personal Portfolio Website

A fully functional, professional, dynamic, and responsive personal portfolio website built with vanilla HTML5, CSS3, and JavaScript.

## 🌟 Features

This portfolio website includes all the following mandatory features:

### ✅ A. Personal Profile Section
- Professional profile card with image
- Name, registration number, and bio
- Advanced CSS styling with gradients and shadows
- Smooth animations (fade-in, hover effects)
- Fully responsive layout (mobile/desktop)
- Accessibility features (semantic HTML, alt attributes)

### ✅ B. Academic Background Section
- Dynamic JavaScript-driven table
- **Sorting functionality**: Sort by Year or Institution (ascending/descending)
- **Filtering functionality**: Filter by education level (Primary, Secondary, Intermediate, Undergraduate)
- Data stored in JavaScript array for easy updates
- Responsive table design

### ✅ C. Interactive CV Viewer
- "View My CV" button
- Modal overlay with embedded PDF using iframe
- Responsive CV container
- Comprehensive PDF.js implementation documentation in code comments

### ✅ D. Theme Switcher (Light/Dark Mode)
- Toggle button for theme switching
- localStorage persistence (saves user preference)
- Auto-loads saved theme on page refresh
- Accessible with ARIA labels
- Smooth color transitions

### ✅ E. Contact Form with Validation
- Name, Email, and Message fields
- **JavaScript validation**:
  - Empty field detection
  - Email format validation
  - Inline error messages
- Success message on valid submission
- Modern, responsive design

### ✅ F. Responsive Navigation
- Fully responsive for mobile, tablet, and desktop
- Hamburger menu for mobile devices
- Smooth scrolling to sections
- Glassmorphism effects

### ✅ G. Projects/Gallery Section
- Project cards with images
- **Lightbox effect**: Click to view full-size images
- Close button and next/previous navigation
- Keyboard navigation support (Escape, Arrow keys)
- Smooth animations and transitions

### ✅ H. Interactive Progress Tracker
- Display tasks/milestones
- Click to mark tasks as complete/incomplete
- **Dynamic percentage calculation**
- **Animated progress bar**
- localStorage persistence (saves progress)
- Auto-restores progress on page reload

## 🚀 How to Run

### Method 1: Direct Opening (Simple)
1. Navigate to the project folder
2. Double-click `index.html` to open in your browser

**Note**: PDF viewing may not work in some browsers due to security restrictions when opening files directly.

### Method 2: Local Server (Recommended)
For full functionality including PDF viewing, run a local server:

#### Using Python:
```bash
# Navigate to project directory
cd "d:\Owais Portfolio New"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
npx http-server -p 8000
```

#### Using VS Code:
Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

## 📝 How to Customize

### Replace Personal Data

#### 1. Update Profile Information
Open `index.html` and find the profile section (around line 55):
```html
<h1 class="profile__name">Owais Khattak</h1>
<p class="profile__registration">Registration: <span>UOS2165111</span></p>
<p class="profile__bio">
    A CS Undergraduate at UET Abbottabad, a Graphics Designer, 
    a front-end web-developer, entry level programmer.
</p>
```
Replace with your own name, registration number, and bio.

#### 2. Replace Profile Picture
- Add your image to the `assets/` folder (e.g., `my-photo.jpg`)
- Update line 58 in `index.html`:
```html
<img src="assets/my-photo.jpg" alt="Your Name - Your Title" class="profile__img">
```

#### 3. Update Academic Records
Open `script.js` and find the `academicData` array (around line 11):
```javascript
const academicData = [
    {
        level: "Primary",
        institution: "Your School Name",
        years: "2005-2010",
        city: "Your City",
        remarks: "Your remarks"
    },
    // Add more records...
];
```
Modify, add, or remove records as needed.

#### 4. Replace CV PDF
- Add your CV PDF to the `assets/` folder (e.g., `my-cv.pdf`)
- Update line 146 in `index.html`:
```html
<iframe src="assets/my-cv.pdf" class="cv-viewer__iframe" id="cv-iframe"></iframe>
```

#### 5. Update Projects
**Images**: Replace images in `assets/projects/` folder

**Project Data**: Open `script.js` and find the `projectImages` array (around line 36):
```javascript
const projectImages = [
    {
        src: "assets/projects/your-project.jpg",
        title: "Your Project Title",
        description: "Your project description"
    },
    // Add more projects...
];
```

**HTML**: Update project cards in `index.html` (around line 169)

#### 6. Update Progress Tracker Tasks
Open `script.js` and find the `progressData` array (around line 24):
```javascript
let progressData = [
    { id: 1, text: "Your task description", completed: false },
    // Add more tasks...
];
```

### Customize Colors and Theme

Open `style.css` and modify the CSS variables at the top (around line 9):
```css
:root {
    --primary-color: #6366f1;  /* Change primary color */
    --secondary-color: #ec4899; /* Change secondary color */
    /* Modify other colors as needed */
}
```

## 📁 Project Structure

```
d:/Owais Portfolio New/
├── index.html          # Main HTML file
├── style.css           # All styles and themes
├── script.js           # All JavaScript functionality
├── README.md           # This file
├── USER_MANUAL.md      # User manual
└── assets/
    ├── profile.jpg     # Profile picture
    ├── cv.pdf          # CV document
    └── projects/       # Project images
        ├── project1.jpg
        ├── project2.jpg
        └── project3.jpg
```

## 🎨 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Flexbox, Grid, animations, custom properties
- **JavaScript**: Vanilla JS (DOM manipulation, events, localStorage)
- **Google Fonts**: Inter (body), Outfit (headings)

## ✨ Design Features

- Modern gradient color schemes
- Glassmorphism effects
- Smooth micro-animations
- Responsive design (mobile-first approach)
- Dark/Light theme support
- Accessibility features (ARIA labels, semantic HTML)

## 🌐 Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 425px
- **Tablet**: 426px - 768px
- **Desktop**: 769px and above

## 🔧 Troubleshooting

### PDF Not Loading
- Use a local server (see "How to Run" section)
- Check that `cv.pdf` exists in the `assets/` folder
- Try a different browser

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### Images Not Showing
- Verify image paths are correct
- Check that images exist in the `assets/` folder
- Use browser DevTools to check for 404 errors

## 📄 License

This is a personal portfolio template. Feel free to use and modify for your own portfolio.

## 👤 Author

**Owais Khattak**  
Registration: UOS2165111  
CS Undergraduate at UET Abbottabad

---

**Note**: This portfolio demonstrates advanced front-end development skills including JavaScript-driven interactivity, responsive design, accessibility, and modern UI/UX principles.
