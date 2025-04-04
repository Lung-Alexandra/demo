import { addCvData } from "./cv.js"
import { addPublicationData } from "./publications.js"
import { loadPDF } from "./teaching.js";


// Load navbar
$(document).ready(function () {
    $("nav").load("navbar.html", function () {
        // After navbar is loaded, initialize translations
        if (typeof translatePage === 'function') {
            translatePage();
        }
    });
});

var currentPage = $(location).attr('href');

// Function to load CV based on current language
function loadCV() {
    if (currentPage.includes('cv')) {
        const currentLang = localStorage.getItem('language') || 'en';
        const cvFile = currentLang === 'ro' ? 'cv.json' : 'cv_en.json';
        addCvData(cvFile);
    }
}

// Listen for language changes
$(document).on('languageChanged', function () {
    loadCV();
});

if (currentPage.includes('cv')) {
    loadCV();
}

if (currentPage.includes('publications')) {
    addPublicationData();
}

if (currentPage.includes('teaching') || currentPage.includes('fascicule')) {
    loadPDF();
}
