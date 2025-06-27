document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-id]');

    const setLanguage = (lang) => {
        // Update text content
        translatableElements.forEach(element => {
            element.innerHTML = element.dataset[lang === 'id' ? 'langId' : 'langEn'];
        });

        // Update main document language
        document.documentElement.lang = lang;

        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Store preference
        localStorage.setItem('preferredLanguage', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // On page load, check for stored language or default to 'id'
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'id';
    setLanguage(preferredLanguage);
});