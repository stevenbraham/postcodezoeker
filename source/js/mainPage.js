$(document).ready(function() {
    $(".login-form").css({
        opacity: 1,
        "-webkit-transform": "scale(1)",
        "transform": "scale(1)",
        "-webkit-transition": ".5s",
        "transition": ".5s"
    });
    $(".login-form").on("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var searchTerm = parseInt($("#searchForm").val());
        if (searchTerm in postalCodes) {
            $("#searchResult").text(postalCodes[searchTerm]);
        } else {
            $("#searchResult").text("Geen resultaten");
        }
    });
    $("#searchForm").on("input", function() {
        $(".login-form").submit();
    })
});