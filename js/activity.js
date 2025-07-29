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

    // User interaction with table cells
    $("td").click(function() {
        // Get content of cell
        var content = $(this).text().trim();

        // Check if content does not contain "Not Available"
        if (content !== "Not Available") {
            // Add or remove class when cell is selected
            $(this).toggleClass("tdhighlight");

            // Get column index of clicked cell
            var colIndex = $(this).index();

            // Get cliff site name from the header row
            var cliffSite = $("table thead th").eq(colIndex).text().trim();

            if ($(this).hasClass("tdhighlight")) {
                // Make display box visible
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em");

                // Add child element with contents of cell and cliff site name
                $("#result").append("<p>" + content + " at " + cliffSite + "</p>");
            } else {
                // Remove child element
                $("#result p:contains('" + content + " at " + cliffSite + "')").remove();

                // Check if there are any child elements within parent
                if ($("#result").has("p").length === 0) {
                    // Hide display box
                    $("#displaySelected").css("visibility", "hidden");
                    $("#displaySelected").css("margin-top", "0");
                }
            }
        }
    });
});
