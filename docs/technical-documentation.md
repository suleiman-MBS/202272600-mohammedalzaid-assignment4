# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio website built using semantic HTML5, CSS3, and advanced vanilla JavaScript. It serves as a professional portfolio showcasing academic projects in Cybersecurity and Cloud Computing, integrating external APIs, complex filtering logic, custom animations, and performance optimizations.

## 2. File Structure
- **index.html:** The main entry point containing the semantic structure and data-attributes for filtering.
- **css/styles.css:** Contains all styling rules, CSS variables for theme toggling, and keyframe animations.
- **js/script.js:** Handles client-side logic, API fetching, event listeners, state management, and the typewriter effect.
- **docs/:** Contains project documentation and AI usage reports.
- **presentation/:** Contains the final video demonstration and presentation slides.

## 3. Technical Implementation

### HTML5 & CSS3
- **Layout & Responsiveness:** Utilized **CSS Grid** and **Flexbox** with a Mobile-First approach. A media query (`@media (min-width: 768px)`) switches the project grid from 1 column to 2 columns.
- **Micro-Animations:** Added `transition` and `transform` properties for hover effects, and `@keyframes` for a blinking terminal cursor.

### Advanced JavaScript & API Integration
- **API Fetching:** Utilized the Fetch API with `async/await` to connect to the GitHub REST API (`api.github.com`). It retrieves live repository data, parses the JSON, and dynamically creates HTML nodes using `document.createElement`.
- **Complex Logic (Filtering):** Built a custom filter mechanism. Buttons use the `data-filter` attribute to hide or show `.project-item` elements based on their assigned `data-category`.
- **Innovation (Typewriter Effect):** Uses a recursive JavaScript function with `setTimeout` to inject characters one by one into the DOM, simulating a live terminal typing experience.
- **Performance Optimization (Debouncing):** The contact form submit button is temporarily disabled for 1.5 seconds upon click using `setTimeout` to prevent spam submissions.

## 4. Data Handling & Advanced State Management
- **Web Storage API:** The application uses `localStorage` to save both the user's theme preference (`light` or `dark`) and the visitor's submitted name for a personalized dynamic greeting.

## 5. Installation & Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/suleiman-MBS/202272600-mohammedalzaid-assignment4.git](https://github.com/suleiman-MBS/202272600-mohammedalzaid-assignment4.git)
2. Navigate to the project root.
3.  Open `index.html` in a browser. No build steps or server requirements are needed.

---
*Technical Documentation Version 2.0 - Developed by Mohammed Alzaid*
