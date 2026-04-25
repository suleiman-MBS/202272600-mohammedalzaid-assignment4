document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC GREETING & STATE MANAGEMENT ---
const greetingMsg = document.getElementById('greeting');
const hour = new Date().getHours();
let welcomeText = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

// Check for saved visitor name
let visitorName = localStorage.getItem('visitorName');

if (!visitorName) {
    visitorName = prompt("Welcome! What is your name?");
    if (visitorName) {
        localStorage.setItem('visitorName', visitorName);
    } else {
        visitorName = "Guest";
    }
}

greetingMsg.innerText = `${welcomeText}, ${visitorName}! I'm Mohammed.`;


    // --- 2. DARK MODE & LOCAL STORAGE (Data Handling) ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.documentElement; // Targets <html> to apply data-theme

    // Check if user has a preference saved in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeBtn.innerText = savedTheme === 'dark' ? "☀️ Light" : "🌙 Dark";
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme); // Save preference
        
        // Update button text
        themeBtn.innerText = newTheme === 'dark' ? "☀️ Light" : "🌙 Dark";
    });


    // --- 3. FORM VALIDATION & FEEDBACK (Error Handling) ---
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameValue = document.getElementById('userName').value;

        // Simple validation: Check if name is too short
        if (nameValue.length < 2) {
            feedback.innerText = "❌ Please enter a valid name.";
            feedback.style.color = "red";
        } else {
            // Success Feedback
            feedback.innerText = `✅ Thank you, ${nameValue}! Your message has been sent.`;
            feedback.style.color = "green";
            contactForm.reset(); // Clear the form fields
        }
    });

    console.log("Portfolio Assignment 2 Interactive Features Loaded.");
    // --- 4. API INTEGRATION (GitHub Repos) ---
const githubContainer = document.getElementById('github-container');
const githubUsername = 'suleiman-MBS'; 

async function fetchGitHubRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=4`);
        
        if (!response.ok) throw new Error("Failed to fetch repositories.");
        
        const repos = await response.json();
        githubContainer.innerHTML = ''; // Clear loading text

        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'card';
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description provided."}</p>
                <a href="${repo.html_url}" target="_blank" style="color: var(--primary-blue); font-weight: bold; text-decoration: none;">View Code &rarr;</a>
            `;
            githubContainer.appendChild(repoCard);
        });
    } catch (error) {
        githubContainer.innerHTML = `<p style="color: red;">⚠️ Could not load repositories at this time.</p>`;
        console.error("API Error:", error);
    }
}
fetchGitHubRepos();

// --- 5. COMPLEX LOGIC (Project Filtering) ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const submitBtn = contactForm.querySelector('button[type="submit"]');
submitBtn.disabled = true;
submitBtn.innerText = "Sending...";

// Simulate network delay, then re-enable
setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Message";
    contactForm.reset();
}, 1500);

});
