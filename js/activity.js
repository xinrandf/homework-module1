$(document).ready(function() {
    // Make activity table interactive
    // 1. Add class to all selectable cells
    $("table tbody td").each(function() {
        var cellText = $(this).text().trim();
        if (cellText !== "Not Available") {
            $(this).addClass("selectable");
            $(this).css("cursor", "pointer");
        }
    });

    // 2. Toggle highlight on click
    $("table tbody").on("click", "td.selectable", function() {
        $(this).toggleClass("selected");
    });
});
