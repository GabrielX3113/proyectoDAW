function setThemeProperties(isDarkMode) {
    if (isDarkMode) {
        document.documentElement.style.setProperty('--clr-white', '#1a1a1a');
        document.documentElement.style.setProperty('--clr-main', '#785ce9');
        document.documentElement.style.setProperty('--clr-main-light', '#4b33a8');
        document.getElementById('darkModeButton').innerHTML = `<i class="bi bi-brightness-high"></i> Modo oscuro`;
    } else {
        document.documentElement.style.setProperty('--clr-white', '#ececec');
        document.documentElement.style.setProperty('--clr-main', '#4b33a8');
        document.documentElement.style.setProperty('--clr-main-light', '#785ce9');
        document.getElementById('darkModeButton').innerHTML = `<i class="bi bi-brightness-high-fill"></i> Modo claro`;
    }
}

function toggleDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setThemeProperties(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setThemeProperties(darkMode);
}

// Call loadDarkMode when the page loads
window.addEventListener('DOMContentLoaded', loadDarkMode);
