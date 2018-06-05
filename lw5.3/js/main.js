function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

function tryToListenId(id, eventName, func) {
    var el = getById(id);
    if (el) {
        el.addEventListener(eventName, func);
    }
}

function tryToListenClass(className, eventName, func) {
    var el = getByClass(className);
    if (el) {
        for (var i = 0; i < el.length; i++) {
            el[i].addEventListener(eventName, func);
        }
    }
}

function toggleHamburgerMenu() {
    var hamburger = $('#hamburger');
    var menu = $('#data_hamburger_menu');
    if (menu.css('visibility') == 'hidden') {
        menu.css('visibility', 'visible');
        menu.css('transform', 'translateY(0)');
        hamburger.removeClass('hamburger_box');
        hamburger.toggleClass('cross_box');
    } else {
        menu.css('transform', 'null');
        menu.css('visibility', 'null');
        hamburger.removeClass('cross_box');
        hamburger.toggleClass('hamburger_box');
    }
}

function showMovieForm() {
    $('#window_movie').css('display', 'block');
    $('#overlay_movie').css('display', 'block');
}

function closeMovieForm() {
    $('#window_movie').css('display', 'none');
    $('#overlay_movie').css('display', 'none');
}

function validateMovieForm() {
    var required = $('.movie_form');
    for (var i = 0; i < required.length; i++) {
        if (required[i].value == '') {
            event.preventDefault();
            required[i].classList.add('unfilled_form');
        }
    }
}

function addingBlock(URL, name, description) {
    var movieImage = '<img src="' + URL + '"alt="' + name + '"  class="movie_image">';
    var movieHeader = '<h3 class="movie_title">' + name + '</h3>';
    var movieDescription = '<p class="movie_caption">' + description + '</p>';
    if ($('#show_movies').css('display') == 'block') {
        var blockToAdd = '<div class="movie_container hidden_movie">' + movieImage + movieHeader + movieDescription + '</div>';
    } else {
        var blockToAdd = '<div class="movie_container">' + movieImage + movieHeader + movieDescription + '</div>';
    }
    $('#movies').append(blockToAdd);
    closeMovieForm();
}

function addFilmBlocks() {
    event.preventDefault();
    var requiredFields = $('.movie_form');
    var imageURL = $('#image_url').val();
    var filmName = $('#film_name').val();
    var filmDescription = $('#movie_description').val();
    if (!requiredFields.hasClass('unfilled_form')) {
        addingBlock(imageURL, filmName, filmDescription);
    }
}

function showWindow() {
    getById('window').style.display = 'block';
    getById('overlay').style.display = 'block';
}

function closeWindow() {
    getById('window').style.display = 'none';
    getById('overlay').style.display = 'none';
}

function validateForm(event) {
    var required = getByClass('required');
    for (var i = 0; i < required.length; i++) {
        if (required[i].value == '') {
            event.preventDefault();
            required[i].classList.add('unfilled_form');
        }
    }
}

function focusInForm() {
    this.classList.remove('unfilled_form');
}

function doOpacity() {
    var movies = getByClass('hidden_movie');
    for (var i = 0; i < movies.length; i++) {
        movies[i].style.opacity = 1;
    }
}

function showMovies() {
    this.style.display = 'none';
    var movies = getByClass('hidden_movie');
    for (var i = 0; i < movies.length; i++) {
        movies[i].style.display = 'block';
    }
    setTimeout(doOpacity, 0);
}

function onWindowLoaded() {
    $('.top_button').smoothScroll();
    $('#hamburger').on('click', toggleHamburgerMenu);
    $('#add_movie').on('click', showMovieForm);
    $('#close_movie').on('click', closeMovieForm);
    $('#overlay_movie').on('click', closeMovieForm);
    $('#submit_movie').on('click', validateMovieForm);
    $('#submit_movie').on('click', addFilmBlocks);
    $('.movie_form').on('focus', focusInForm);
    tryToListenId('write_me', 'click', showWindow);
    tryToListenId('close', 'click', closeWindow);
    tryToListenId('overlay', 'click', closeWindow);
    tryToListenId('submit_form', 'click', validateForm);
    tryToListenClass('required', 'focus', focusInForm);
    tryToListenId('show_movies', 'click', showMovies);
}

$(window).on('load', onWindowLoaded);