function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!themeToggle) {
        console.error("Theme toggle button not found! Ensure you have an element with the class 'theme-toggle'.");
        return;
    }

    // Set initial theme based on user preference
    if (prefersDark && !localStorage.getItem('theme')) {
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        console.log('Theme toggle button clicked');
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        

        if (newTheme === 'dark') {
            themeToggle.querySelector('.moon-icon').style.display = 'none'; // Hide sun icon
            themeToggle.querySelector('.sun-icon').style.display = 'block'; // Show moon icon
        } else {
            themeToggle.querySelector('.moon-icon').style.display = 'block'; // Show sun icon
            themeToggle.querySelector('.sun-icon').style.display = 'none'; // Hide moon icon
        }
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

themeToggle.removeEventListener('click', toggleTheme);

document.addEventListener("DOMContentLoaded", initTheme);

console.log('Current Theme:', currentTheme);
console.log('New Theme:', newTheme);
console.log('Sun Icon Display:', themeToggle.querySelector('.sun-icon').style.display);
console.log('Moon Icon Display:', themeToggle.querySelector('.moon-icon').style.display);