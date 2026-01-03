# Portfolio Website - User Manual

## Introduction

Welcome to your Personal Portfolio Website! This manual will guide you through using all the features of your interactive portfolio.

## Table of Contents

1. [Navigation](#navigation)
2. [Theme Switcher](#theme-switcher)
3. [Academic Background Table](#academic-background-table)
4. [CV Viewer](#cv-viewer)
5. [Projects Gallery](#projects-gallery)
6. [Progress Tracker](#progress-tracker)
7. [Contact Form](#contact-form)

---

## Navigation

### Desktop Navigation
- Click any menu item in the header to smoothly scroll to that section
- The navigation bar stays fixed at the top as you scroll
- Menu items: Home, About, Academic, Projects, Progress, Contact

### Mobile Navigation
- Tap the **hamburger menu** (three horizontal lines) in the top-right corner
- A side menu will slide in from the right
- Tap any menu item to navigate to that section
- The menu will automatically close after selection
- You can also tap the **X** button to close the menu manually

---

## Theme Switcher

### Switching Themes
1. Look for the **theme toggle button** in the top-right corner of the navigation bar
2. The button shows a moon icon (🌙) in light mode or sun icon (☀️) in dark mode
3. Click/tap the button to switch between light and dark themes
4. The entire website will smoothly transition to the new theme

### Theme Persistence
- Your theme preference is automatically saved
- When you return to the website, your last selected theme will be loaded
- This works using browser localStorage technology

**Light Mode**: Clean, bright design with soft colors  
**Dark Mode**: Elegant dark theme with high contrast for comfortable viewing

---

## Academic Background Table

The Academic Background section displays your educational history in an interactive table.

### Viewing the Table
- Scroll to the "Academic Background" section
- The table shows: Level, Institution, Year(s), City, and Remarks

### Filtering by Education Level
1. Find the **"Filter by Level"** dropdown above the table
2. Click to open the dropdown menu
3. Select an education level:
   - **All Levels**: Shows all records
   - **Primary**: Shows only primary education
   - **Secondary**: Shows only secondary education
   - **Intermediate**: Shows only intermediate education
   - **Undergraduate**: Shows only undergraduate education
4. The table updates instantly without page reload

### Sorting the Table
1. Find the **"Sort by"** dropdown above the table
2. Click to open the dropdown menu
3. Select a sorting option:
   - **Year (Ascending)**: Oldest to newest
   - **Year (Descending)**: Newest to oldest
   - **Institution (A-Z)**: Alphabetical order
   - **Institution (Z-A)**: Reverse alphabetical order
4. The table re-orders instantly

### Combined Filtering and Sorting
- You can use both filter and sort together
- For example: Filter by "Undergraduate" and sort by "Year (Descending)"
- The table will show only undergraduate records, sorted by year

---

## CV Viewer

### Opening Your CV
1. Scroll to the top profile section
2. Click the **"View My CV"** button (with 📄 icon)
3. A modal window will appear displaying your CV

### Viewing the CV
- The CV is displayed in a responsive viewer
- On desktop: Large, easy-to-read format
- On mobile: Optimized for smaller screens
- You can scroll within the CV if it has multiple pages

### Closing the CV Viewer
- Click the **X** button in the top-right corner of the viewer
- Or click anywhere outside the CV viewer (on the dark background)
- The viewer will close and return you to the main page

**Note**: If the CV doesn't load, make sure you're running the website through a local server (see README.md).

---

## Projects Gallery

### Viewing Projects
- Scroll to the "My Projects" section
- You'll see project cards with images and descriptions
- Hover over a card (or tap on mobile) to see the "View Project" button

### Opening the Lightbox
1. Click/tap on any project card
2. The image opens in a full-screen lightbox overlay
3. The project title and description appear below the image

### Navigating Between Projects
**Using Buttons**:
- Click the **‹** (left arrow) button to view the previous project
- Click the **›** (right arrow) button to view the next project
- Navigation wraps around (after the last project, it goes to the first)

**Using Keyboard** (Desktop):
- Press **Left Arrow** key for previous project
- Press **Right Arrow** key for next project
- Press **Escape** key to close the lightbox

### Closing the Lightbox
- Click the **X** button in the top-right corner
- Press the **Escape** key (desktop)
- Click anywhere outside the image (on the dark background)

---

## Progress Tracker

The Progress Tracker helps you monitor your learning milestones and skills development.

### Viewing Your Progress
- Scroll to the "Learning Progress" section
- You'll see:
  - **Completion percentage** (large number at top)
  - **Progress bar** (visual representation)
  - **List of tasks/milestones** (with checkboxes)

### Marking Tasks as Complete
1. Click/tap on any task item
2. The checkbox will fill with a checkmark (✓)
3. The task text will show a strikethrough
4. The task becomes slightly faded

### Marking Tasks as Incomplete
1. Click/tap on a completed task (one with a checkmark)
2. The checkmark disappears
3. The task returns to its normal appearance

### Progress Calculation
- The percentage and progress bar update automatically
- Calculation: (Completed Tasks ÷ Total Tasks) × 100
- The progress bar animates smoothly to the new percentage

### Progress Persistence
- Your progress is automatically saved to your browser
- When you return to the website, your progress is restored
- You can continue tracking from where you left off

---

## Contact Form

### Filling Out the Form
1. Scroll to the "Get In Touch" section
2. Fill in the required fields:
   - **Name**: Your full name
   - **Email**: Your email address
   - **Message**: Your message or inquiry

### Form Validation
The form validates your input in real-time:

**Name Field**:
- Cannot be empty
- Error message appears if left blank

**Email Field**:
- Cannot be empty
- Must be a valid email format (e.g., name@example.com)
- Error message appears if invalid

**Message Field**:
- Cannot be empty
- Error message appears if left blank

### Error Messages
- Appear in red text below each field
- Show exactly what needs to be corrected
- Disappear when you fix the issue

### Submitting the Form
1. Fill in all fields correctly
2. Click the **"Send Message"** button
3. If validation passes:
   - A green success message appears: "✓ Message sent successfully!"
   - The form clears automatically after 3 seconds
4. If validation fails:
   - Error messages appear below invalid fields
   - The form will not submit until all errors are fixed

**Note**: This is a demonstration form. In a production environment, you would connect it to a backend service to actually send emails.

---

## Tips for Best Experience

### Desktop Users
- Use keyboard shortcuts in the lightbox for faster navigation
- Hover over interactive elements to see smooth animations
- Try both light and dark themes to see which you prefer

### Mobile Users
- Use the hamburger menu for easy navigation
- Swipe-friendly interface for smooth scrolling
- All features work perfectly on touch devices

### Accessibility
- All interactive elements have proper labels for screen readers
- Keyboard navigation is fully supported
- High contrast in both light and dark modes for readability

---

## Troubleshooting

**Problem**: Theme doesn't save  
**Solution**: Make sure your browser allows localStorage. Check browser settings.

**Problem**: CV doesn't load  
**Solution**: Run the website through a local server (see README.md for instructions).

**Problem**: Images not showing  
**Solution**: Check that all image files exist in the `assets/` folder.

**Problem**: Progress not saving  
**Solution**: Ensure localStorage is enabled in your browser settings.

---

## Support

For technical issues or questions about customizing your portfolio, refer to the README.md file for detailed instructions on:
- Replacing personal data
- Updating academic records
- Adding/removing projects
- Customizing colors and themes

---

**Enjoy your portfolio website!** 🎉

This portfolio demonstrates modern web development practices and provides a professional online presence to showcase your skills and achievements.
