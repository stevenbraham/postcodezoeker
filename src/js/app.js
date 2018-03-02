import $ from 'jquery'
import 'metro/build/js/metro.js'
import postalCodes from "./postalcodeList"

$(document).ready(function () {
    let loginForm = $(".login-form");
    loginForm.css({
        opacity: 1,
        "-webkit-transform": "scale(1)",
        "transform": "scale(1)",
        "-webkit-transition": ".5s",
        "transition": ".5s"
    });
    loginForm.on("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var searchTerm = parseInt($("#searchForm").val());
        if (searchTerm in postalCodes) {
            $("#searchResult").text(postalCodes[searchTerm]);
        } else {
            $("#searchResult").text("Geen resultaten");
        }
    });
    $("#searchForm").on("input", function () {
        loginForm.submit();
    })
});