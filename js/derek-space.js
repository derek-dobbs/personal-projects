"use strict";
$(document).ready(function() {
    function displayUpdated() {
        $.ajax("/data/blog.json").done(function (data) {
            data.forEach(function (element) {
                $('#blog-posts-display').append("<h3>" + element.title + "</h3>" + "<p class='post-body'>" + element.content + "</p>" + "<p>" + "<span class='make-white'>Categories:</span> " + element.categories.join(", ") + "</p>" + "<p>" + "<span class='make-white'>Date: </span>" + element.date + "</p>" + "<br>" + "<hr>");
            });
        });
    } //end displayUpdated()

    displayUpdated();

    $('#submit-post').click(function () {
        $('#blog-posts-display').empty();

        let userTitle = $('#title-input').val();
        let userCategory = $('#category-input').val();
        let userPost = $('#text-area-input').val();

        const blogPost = {title: userTitle, content: userPost, categories: userCategory};
        const url = '/data/blog.json';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        };
        fetch(url, options)
            .then(/* post was created successfully */)
            .catch(/* handle errors */);

        displayUpdated();
    });
});//end $(document).ready