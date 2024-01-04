$.get("navbar.html", function (data) {
    $("nav").replaceWith(data);
});

$.ajax({
    url: "content.txt",
    dataType: "text",
    success: function (data) {
        resultArray = data.split("Section").filter(function (value) {
            return value !== "";
        });

        resultArray = resultArray.map(function (element) {
            return element.split("\r\n").filter(function (value) {
                return value.trim() !== ""; // Remove empty strings after splitting
            });
        });
    }
});


