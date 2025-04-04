const
    sidebar = $("nav"),
    toggle = $(".toggle"),
    darkModeSwitch = $(".mode .toggle-switch"),
    langSwitch = $(".lang .toggle-switch"),
    modeText = $(".mode .mode-text"),
    langText = $(".lang .mode-text"),
    modeIcon = $(".mode .sun-moon i"),
    content = $(".content");

// Initialize language from localStorage
if (localStorage.getItem('language') === 'ro') {
    langText.text("Ro");
    langSwitch.addClass("ro");
    translatePage();
}

if (localStorage.getItem('mode') === 'dark') {
    sidebar.toggleClass("dark");
    content.toggleClass("dark");
    $("body").toggleClass("dark");
    modeText.text(translateText('light_mode'));
    modeIcon.removeClass("bx-moon").addClass("bx-sun");
}

toggle.click(function () {
    sidebar.toggleClass("close");
})

// Dark mode toggle functionality
darkModeSwitch.click(function () {
    sidebar.toggleClass("dark");
    content.toggleClass("dark");
    $("body").toggleClass("dark");

    if (sidebar.hasClass("dark")) {
        modeText.text(translateText('light_mode'));
        modeIcon.removeClass("bx-moon").addClass("bx-sun");
        localStorage.setItem('mode', 'dark');
    } else {
        modeText.text(translateText('dark_mode'));
        modeIcon.removeClass("bx-sun").addClass("bx-moon");
        localStorage.setItem('mode', 'light');
    }
});

// Language toggle functionality
langSwitch.click(function () {
    const currentText = langText.text();
    if (currentText === "En") {
        langText.text("Ro");
        langSwitch.addClass("ro");
        setLanguage('ro');
        $(document).trigger('languageChanged');
    } else if (currentText === "Ro") {
        langText.text("En");
        langSwitch.removeClass("ro");
        setLanguage('en');
        $(document).trigger('languageChanged');
    }
});






