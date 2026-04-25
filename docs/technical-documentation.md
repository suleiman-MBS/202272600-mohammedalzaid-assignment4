# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio website built using semantic HTML5, CSS3, and advanced vanilla JavaScript. It serves as a professional portfolio showcasing academic projects in Cybersecurity and Cloud Computing, integrating external APIs, complex filtering logic, and performance optimizations.

## 2. File Structure
- **index.html:** The main entry point containing the semantic structure (Header, Nav, Sections, Footer) and data-attributes for filtering.
- **css/styles.css:** Contains all styling rules, CSS variables for theme toggling, and media queries for responsiveness.
- **js/script.js:** Handles client-side logic, API fetching, event listeners, and state management.
- **docs/:** Contains project documentation and AI usage reports.

## 3. Technical Implementation

### HTML5 & CSS3
- **Semantic Structure:** Used semantic tags (`<nav>`, `<section>`, `<footer>`) to improve accessibility and SEO. The `id` attributes are used for internal anchor navigation.
- **Layout & Responsiveness:** Utilized **CSS Grid** and **Flexbox** with a Mobile-First approach. A media query (`@media (min-width: 768px)`) switches the project grid from 1 column (mobile) to 2 columns (desktop).
- **Micro-Animations:** Added `transition` and `transform` properties to create interactive hover effects on project cards.

### Advanced JavaScript & API Integration (Phase 3)
- **API Fetching:** Utilized the Fetch API with `async/await` to connect to the GitHub REST API (`api.github.com`). It retrieves live repository data, parses the JSON, and dynamically creates HTML nodes using `document.createElement`.
- **Complex Logic (Filtering):** Built a custom filter mechanism. Buttons use the `data-filter` attribute to hide or show `.project-item` elements based on their assigned `data-category`.
- **Event Listeners:** Implemented event listeners for theme toggling, form submission, and category filtering to handle user interactions without reloading the page.
- **Performance Optimization (Debouncing):** The contact form submit button is temporarily disabled for 1.5 seconds upon click using `setTimeout`. This prevents spam submissions and optimizes client-side processing.

## 4. Data Handling & Advanced State Management
- **Web Storage API:** The application uses `localStorage` to save both the user's theme preference (`light` or `dark`) and the visitor's submitted name.
- **Persistence Logic:** On page load, the script checks for saved keys. If a name is missing, a prompt asks the user and stores it for a personalized dynamic greeting. If a theme is saved, it applies it immediately to ensure the user's preference persists across browser sessions.

## 5. User Feedback & Error Handling
- **Visual Cues:** When the contact form is submitted, client-side validation checks for valid inputs and provides immediate visual feedback (green success or red error message) through the `#form-feedback` container.
- **API Error Handling:** The GitHub API `fetch` request is wrapped in a `try/catch` block. If the API fails or times out, a fallback UI error message is rendered securely instead of breaking the application.

## 6. Installation & Setup
1. Clone the repository:
   ```bash
   git clone (https://github.com/suleiman-MBS/202272600-mohammedalzaid-assignment3.git)
2. Navigate to the project root.
3.  Open `index.html` in a browser. No build steps or server requirements are needed.

---
*Technical Documentation Version 2.0 - Developed by Mohammed Alzaid*
