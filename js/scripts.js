$(document).ready(function() {
    $("form#yourHorrorscope").submit(function(event) {
        const horrorscope = $("#horrorscope").val();
        

    if (horrorscope === "aries") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.1");

    } else if (horrorscope === "taurus") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.2");

    } else if (horrorscope === "gemini") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.3");

    } else if (horrorscope === "cancer") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.4");

    } else if (horrorscope === "leo") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.5");

    } else if (horrorscope === "virgo") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.6");

    } else if (horrorscope === "libra") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.7");

    } else if (horrorscope === "scorpio") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.8");

    } else if (horrorscope === "sagittarius") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.9");

    } else if (horrorscope === "capricorn") {
        $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.10");
        
    } else if (horrorscope === "aquarius") {
            $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.11");

    } else {
        $("#output").text("Coding is probably right up your alley. I would begin with Python!");
        }
        event.preventDefault();
    });
});