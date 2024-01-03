const
    sidebar = $("nav"),
    toggle = $(".toggle"),
    modeSwitch = $(".toggle-switch"),
    modeText = $(".mode-text"),
    modeIcon = $(".mode .sun-moon i");


toggle.click(function () {
    sidebar.toggleClass("close");
})

modeSwitch.click(function () {
    sidebar.toggleClass("dark");
    $("body").toggleClass("dark");
    if (sidebar.hasClass("dark")) {
        modeText.text("Light mode");
        modeIcon.removeClass("bx-moon").addClass("bx-sun");
    } else {
        modeText.text("Dark mode");
        modeIcon.removeClass("bx-sun").addClass("bx-moon");

    }
});





