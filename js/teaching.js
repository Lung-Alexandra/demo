$(document).ready(function () {
    $("[id$='_toggle']").click(function () {
        var baseId = $(this).attr('id').replace('_toggle', ''); // Ia partea comună a ID-ului
        $("#" + baseId + "_pdf").toggle();

        // Toggle the icon based on the PDF visibility
        if ($("#" + baseId + "_pdf").is(":visible")) {
            $(this).removeClass("bx-chevron-down").addClass("bx-chevron-up");
        } else {
            $(this).removeClass("bx-chevron-up").addClass("bx-chevron-down");
        }
    });
});

