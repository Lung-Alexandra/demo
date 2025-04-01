// Function to get current language
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Function to translate text
function translateText(key) {
  const currentLang = getCurrentLanguage();
  return translations[currentLang][key] || key;
}

// Function to translate all elements with data-translate attribute
function translatePage() {
  $('[data-translate]').each(function () {
    const key = $(this).data('translate');
    $(this).text(translateText(key));
  });
}

// Function to set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  translatePage();
}

// Initialize translation when document is ready
$(document).ready(function () {
  translatePage();
});