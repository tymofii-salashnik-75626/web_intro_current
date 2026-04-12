function toggleTheme() {
    //  sprawdzamy aktualną wartość
    const themeLink = document.getElementById('theme-link');
    // zmiana css plika
    themeLink.setAttribute('href', themeLink.getAttribute('href') === 'red.css' ? 'green.css' : 'red.css');
}

function toggleSection() {
    //  sprawdzamy czy jest widoczne 
    const projectsSection = document.getElementById('projects-section');
    const btn = document.getElementById('section-toggler');
    if (projectsSection.style.display === 'none') {
        // pokazywanie projectsSection
        projectsSection.style.display = 'block';
        // zmiana przyciska title
        btn.innerHTML = 'Ukryj Projekty'
    } else {
        // ukrywanie projectsSection
        projectsSection.style.display = 'none';
        // zmiana przyciska title
        btn.innerHTML = 'Pokaż Projekty'
    }
}
