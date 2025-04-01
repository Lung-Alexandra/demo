// Language switcher functionality
const LANG_KEY = 'site_language';
const DEFAULT_LANG = 'ro'; // Romanian by default

// Translation map
const translations = {
    ro: {
        "home": "Acasă",
        "cv": "CV",
        "publications": "Lista de publicații",
        "courses": "Cursuri",
        "interests": "Interese",
        "dark_mode": "Dark mode",
        "light_mode": "Light mode",
        "professor_title": "Profesor, Departamentul de Informatica, Facultatea de Matematica si Informatica Universitatea din Bucuresti",
        "interests_text": "Domeniile mele de interes vizeaza aspecte teoretice, algoritmice si aplicative legate de modelarea 3D. Aplicatiile se regasesc atat in grafica pe calculator, cat si in teme interdiciplinare legate de vizualizarea si analiza datelor spatiale."
    },
    en: {
        "home": "Home",
        "cv": "CV",
        "publications": "Publications",
        "courses": "Courses",
        "interests": "Interests",
        "dark_mode": "Dark mode",
        "light_mode": "Light mode",
        "professor_title": "Professor, Department of Computer Science, Faculty of Mathematics and Computer Science, University of Bucharest",
        "interests_text": "My areas of interest cover theoretical, algorithmic and applied aspects related to 3D modeling. Applications can be found both in computer graphics and in interdisciplinary topics related to spatial data visualization and analysis."
    }
};

// Function to set the language
function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    updateLanguageDisplay();
    translatePage();
    // We don't reload the page anymore since we're translating in place
}

// Function to get the current language
function getLanguage() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

// Function to update UI elements based on current language
function updateLanguageDisplay() {
    const currentLang = getLanguage();
    const toggleElement = document.getElementById('language-toggle');

    if (toggleElement) {
        if (currentLang === 'en') {
            toggleElement.textContent = 'Romanian / English';
        } else {
            toggleElement.textContent = 'English / Română';
        }
    }
}

// Function to translate the page
function translatePage() {
    if (typeof $ === 'undefined') {
        // If jQuery is not loaded yet, return early
        return;
    }

    const currentLang = getLanguage();
    const translationMap = translations[currentLang];

    // Check for special pages (CV, publications) that need reloading
    const currentPage = window.location.pathname;
    if (currentPage.includes('cv.html') || currentPage.includes('publications.html')) {
        // These pages need to reload to get the correct JSON data
        location.reload();
        return;
    }

    // Translate navbar items
    $('nav .sections a').each(function () {
        const $link = $(this);
        const href = $link.attr('href');

        if (href === 'index.html') {
            $link.text(translationMap.home);
        } else if (href === 'cv.html') {
            $link.text(translationMap.cv);
        } else if (href === 'publications.html') {
            $link.text(translationMap.publications);
        } else if (href === 'teaching.html') {
            $link.text(translationMap.courses);
        } else if (href === 'interests.html') {
            $link.text(translationMap.interests);
        }
    });

    // Translate dark/light mode text
    $('.mode-text').text(
        $('.sidebar').hasClass('dark') ?
            translationMap.light_mode :
            translationMap.dark_mode
    );

    // Translate page specific content
    if (currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) {
        // Translate home page content
        $(".section-text p:nth-child(2)").text(translationMap.professor_title);
        $(".section-text p:nth-child(3)").text(translationMap.interests_text);
    }
}

// Function to toggle between languages
function toggleLanguage() {
    const currentLang = getLanguage();
    if (currentLang === 'en') {
        setLanguage('ro');
    } else {
        setLanguage('en');
    }
}

// Initialize translation when this module is imported
// Only if we're in a browser environment with a document
if (typeof document !== 'undefined') {
    // Wait for DOM to be ready if jQuery is available
    if (typeof $ !== 'undefined' && $.ready) {
        $(document).ready(function () {
            updateLanguageDisplay();
            translatePage();
        });
    } else {
        // Otherwise use the native DOM ready event
        document.addEventListener('DOMContentLoaded', function () {
            updateLanguageDisplay();
            translatePage();
        });
    }
}

// Export functions for use in other scripts
export { setLanguage, getLanguage, updateLanguageDisplay, toggleLanguage, translatePage }; 