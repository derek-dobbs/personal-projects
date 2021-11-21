"use strict";
// console.log("Hellooo");

$(document).ready(function() {

    $('#box-1').click(function() {
        $(this).css('background-color', 'red');
    });

    $('#box-2').click(function() {
        $(this).css('background-color', 'blue');
    });

    $('#box-3').click(function() {
        $(this).css('background-color', 'green');
    });

    $('#box-4').click(function() {
        $(this).css('background-color', 'yellow');
    });

    $('#julie-smile').click(function() {
        $('#julie-pic-box').css('background-image', 'url("/img/julie-smile.jpeg")');
        $('#dialouge-paragraph').html("Yayyy!");
    });

    $('#julie-frown').click(function() {
        $('#julie-pic-box').css('background-image', 'url("/img/julie-frown.jpeg")');
        $('#dialouge-paragraph').html("Boooooo!");
    });

    $('#julie-neutral').click(function() {
        $('#julie-pic-box').css('background-image', 'url("/img/julie-neutral.jpeg")');
        $('#dialouge-paragraph').html("Hello, I'm Julie!");
    });










});