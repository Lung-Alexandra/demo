$.get("navbar.html", function (data) {
    $("nav").replaceWith(data);
});
$.get("head.html", function (data) {
    $("head").replaceWith(data);
});
// var addressValue= null;
// $(".sidebar .menu-bar .sections").click(function () {
//     addressValue = $(this).attr("href");
//     alert(addressValue );
// });