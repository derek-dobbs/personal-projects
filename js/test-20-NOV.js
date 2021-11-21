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

    // $('#hover-box-1').hover(function() {
    //     $(this).css('background-color', 'red');
    // });

    // $('#hover-box-2').hover(function() {
    //     $(this).css('background-color', 'blue');
    // });
    //
    // $('#hover-box-3').hover(function() {
    //     $(this).css('background-color', 'green');
    // });
    //
    // $('#hover-box-4').hover(function() {
    //     $(this).css('background-color', 'yellow');
    // });

    $('#hover-box-1').hover(
        function() {
            $(this).css('background-color', 'red');
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );

    $('#hover-box-2').hover(
        function() {
            $(this).css('background-color', 'blue');
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );

    $('#hover-box-3').hover(
        function() {
            $(this).css('background-color', 'green');
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );

    $('#hover-box-4').hover(
        function() {
            $(this).css('background-color', 'yellow');
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );

    $('#color-click-reset').click(
        function () {
            $('.box-paragraph-click').css('background-color', 'white');
        }
    );

    $('#up-arrow-box').mousedown(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-jump.jpeg")');
    });

    $('#up-arrow-box').mouseup(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-start.jpeg")');
    });

    $('#left-arrow-box').mousedown(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-right.jpeg")');
    });

    $('#left-arrow-box').mouseup(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-start.jpeg")');
    });

    $('#down-arrow-box').mousedown(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-down.jpeg")');
    });

    $('#down-arrow-box').mouseup(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-start.jpeg")');
    });

    $('#right-arrow-box').mousedown(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-left.jpeg")');
    });

    $('#right-arrow-box').mouseup(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-start.jpeg")');
    });

    $('#turn-around-box').mousedown(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-rear.jpeg")');
    });

    $('#turn-around-box').mouseup(function() {
        $('#matthew-pic-box').css('background-image', 'url("/img/matthew-start.jpeg")');
    });












});