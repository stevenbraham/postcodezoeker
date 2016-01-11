$(document).ready(function() {
    $(".login-form").css({
        opacity: 1,
        "-webkit-transform": "scale(1)",
        "transform": "scale(1)",
        "-webkit-transition": ".5s",
        "transition": ".5s"
    });
    $("#searchForm").on("input", function() {
        //search function
        var searchTerm = parseInt($(this).val());
        if (searchTerm in postalCodes) {
            $("#searchResult").text(postalCodes[searchTerm]);
        } else {
            $("#searchResult").text("Geen resultaten");
        }
    })
});