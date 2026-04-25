




# 🤖 Comprehensive AI Usage Report (Assignments 1, 2 & 3)

**Student:** Mohammed Alzaid (202272600)  
**Project:** Interactive Portfolio Website  
**Tools Used:** Gemini, VS Code, Git, GitHub.

---

## 1. Project Overview & Tools
This report documents the use of AI-assisted development across three phases. Phase 1 focused on structural setup and responsive design, Phase 2 focused on JavaScript interactivity, and Phase 3 focused on external APIs, complex logic, and performance optimization.

## 2. Phase 1: Foundation & Repository Setup (Assignment 1)
During the initial setup, I used AI primarily as a technical tutor to navigate the command line and Git environment.
* **Repository Setup:** Guided me through cloning a remote GitHub repository to my local environment using the Command Prompt.
* **Git Troubleshooting:** Explained the "Staging" vs. "Committing" lifecycle and helped resolve Git config errors.
* **Semantic Structure:** Assisted in generating the initial HTML5 boilerplate and CSS Grid structure.

## 3. Phase 2: Interactivity & State Management (Assignment 2)
In the second phase, I transitioned to using AI for JavaScript logic and modern UI/UX principles.
* **Dynamic Content Logic:** AI assisted in utilizing the `Date()` object to inject a time-sensitive greeting into the DOM.
* **Persistent Theme Engine:** Guided the implementation of the **Web Storage API** using `localStorage` to save the Dark Mode preference.
* **Micro-Animations:** AI provided the CSS `transform` and `transition` properties required to create professional "lift" effects.

## 4. Phase 3: Advanced Functionality & APIs (Assignment 3)
For the final phase, I used Gemini to help navigate asynchronous JavaScript and complex DOM manipulation.
* **API Integration (GitHub):** The AI provided the standard structure for `async/await` fetch requests and showed me how to handle HTTP errors cleanly before mapping the JSON data to the DOM.
* **Project Filtering Logic:** Helped me implement a data-attribute filtering system (`data-category`). It showed me how to use `querySelectorAll` and `forEach` to toggle display states dynamically.
* **Performance Optimization:** Suggested and demonstrated "debouncing" on the contact form button using `setTimeout` to prevent rapid, repeated function calls.

### Phase 3 Example Prompts:
* *"How do I fetch my public repositories from GitHub and display them in HTML?"*
* *"What is the best way to filter project cards using category buttons in vanilla JS?"*
* *"How can I prevent a user from clicking the submit button 10 times in a row?"*

## 5. Benefits & Challenges
* **Benefits:** AI drastically reduced the time spent debugging `fetch` API errors. It explained how JavaScript Promises work under the hood, acting as an excellent technical tutor.
* **Challenges:** Integrating the GitHub API required me to carefully map the exact JSON keys (like `repo.html_url` and `repo.description`) to my HTML template. I had to manually adjust the AI's generic template to match my specific CSS class architecture.

## 6. Learning Outcomes
Through this AI-assisted process, I learned:
1. **Asynchronous JS:** Mastering `async/await` and the `fetch` API to handle external data safely.
2. **State Management:** Using `localStorage` to handle persistent user preferences and data.
3. **DOM Manipulation:** Targeting specific IDs and iterating over NodeLists to update content dynamically.
4. **Performance Patterns:** Understanding the necessity of debouncing for performance and security.

## 7. Responsible Use & Modifications
To ensure academic integrity and originality, I did not blindly copy the AI's output. 
* When the AI generated the fetch request for the GitHub API, I reviewed the code to understand how the JSON response was structured and manually modified the HTML output strings to ensure they matched my existing CSS grid classes (like `.card` and `.project-item`).
* I adjusted the AI's suggested filtering logic to specifically highlight my focus areas in Cybersecurity and Cloud Computing, ensuring the final application accurately reflects my personal academic profile.