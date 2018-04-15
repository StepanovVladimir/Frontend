function showWindow() {
    document.getElementById('window').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeWindow() {
    document.getElementById('window').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('write_me').onclick = showWindow;
document.getElementById('overlay').onclick = closeWindow;
document.getElementById('close').onclick = closeWindow;

document.getElementById('submit_form').onclick = function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name == '') {
        event.preventDefault();
        document.getElementById('name').style.borderColor = 'red';
    }
    if (email == '') {
        event.preventDefault();
        document.getElementById('email').style.borderColor = 'red';
    }
}

document.getElementById('name').onfocus = function() {
    document.getElementById('name').style.borderColor = null;
}

document.getElementById('email').onfocus = function() {
    document.getElementById('email').style.borderColor = null;
}

function showMovies() {
    document.getElementById('all_movies').style.display = 'none';
    var len = document.getElementsByClassName('hidden_movie').length;
    for (var i = 0; i < len; i++) {
        document.getElementsByClassName('hidden_movie')[i].style.display = 'block';
    }
}

document.getElementById('all_movies').onclick = showMovies;