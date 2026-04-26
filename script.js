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

function validateForm(event) {
    // Zapobieganie przesyłaniu formularza
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('form-feedback');

    // Czyszczenie poprzednich wiadomości
    feedback.innerHTML = "";
    let errors = [];

    // Walidacja pól wymaganych 
    if (!name || !surname || !email || !message) {
        errors.push("Wszystkie pola są wymagane.");
    }

    // Walidacja pola imię i nazwisko: nie mogą zawierać cyfr
    const digitRegex = /\d/;
    if (digitRegex.test(name)) {
        errors.push("Imię nie może zawierać cyfr.");
    }
    if (digitRegex.test(surname)) {
        errors.push("Nazwisko nie może zawierać cyfr.");
    }

    // Walidacja poprawności adresu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Proszę podać poprawny adres e-mail.");
    }

    // Czytelne komunikaty błędów dla użytkownika
    if (errors.length > 0) {
        feedback.style.color = "red";
        feedback.innerHTML = errors.join("<br>");
        return false;
    }

    // Jeśli wszystko jest dobrze
    feedback.style.color = "green";
    feedback.innerHTML = "Wiadomość została wysłana pomyślnie!";
    
    // Czyszczenie formy
    document.getElementById('contact-form').reset();
    return true;
}

async function loadDynamicContent() {
    try {
        // Ładowanie danych z JSON
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Błąd ładowania danych');
        
        const data = await response.json();

        // Uzupełnianie listy umiejętności
        populateList('dynamic-skills-list', data.skills);

        // Uzupełnianie listy projektów
        populateList('dynamic-projects-list', data.projects);
        

    } catch (error) {
        console.error("Wystąpił błąd:", error);
    }
}

function populateList(id, list) {
        const elem = document.getElementById(id);
        list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            elem.appendChild(li);
        });

}

//Wywołanie funkcji podczas ładowania strony
loadDynamicContent();