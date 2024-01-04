const
    sidebar = $("nav"),
    toggle = $(".toggle"),
    modeSwitch = $(".toggle-switch"),
    modeText = $(".mode-text"),
    modeIcon = $(".mode .sun-moon i"),
    content = $(".content");


if (localStorage.getItem('mode') === 'dark') {
    sidebar.toggleClass("dark");
    content.toggleClass("dark");
    $("body").toggleClass("dark");
    modeText.text("Light mode");
    modeIcon.removeClass("bx-moon").addClass("bx-sun");
}


toggle.click(function () {
    sidebar.toggleClass("close");
})

modeSwitch.click(function () {
    sidebar.toggleClass("dark");
    content.toggleClass("dark");
    $("body").toggleClass("dark");

    if (sidebar.hasClass("dark")) {
        modeText.text("Light mode");
        modeIcon.removeClass("bx-moon").addClass("bx-sun");
        localStorage.setItem('mode', 'dark');

    } else {
        modeText.text("Dark mode");
        modeIcon.removeClass("bx-sun").addClass("bx-moon");
        localStorage.setItem('mode', 'light');
    }
});





