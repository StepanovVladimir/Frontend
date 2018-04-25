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
    tryToListenId('write_me', 'click', showWindow);
    tryToListenId('close', 'click', closeWindow);
    tryToListenId('overlay', 'click', closeWindow);
    
    tryToListenId('submit_form', 'click', validateForm);
    tryToListenClass('required', 'focus', focusInForm);
    
    tryToListenId('show_movies', 'click', showMovies);
}

window.onload = onWindowLoaded;