function showWindow() {
    document.getElementById('window').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeWindow() {
    document.getElementById('window').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('write_me').addEventListener('click', showWindow);
document.getElementById('overlay').addEventListener('click', closeWindow);
document.getElementById('close').addEventListener('click', closeWindow);

document.getElementById('submit_form').addEventListener('click', function(event) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    if (name.value == '') {
        event.preventDefault();
        name.style.borderColor = 'red';
    }
    if (email.value == '') {
        event.preventDefault();
        email.style.borderColor = 'red';
    }
});

document.getElementById('name').addEventListener('focus', function() {
    document.getElementById('name').style.borderColor = null;
});

document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('email').style.borderColor = null;
});

function showMovies() {
    document.getElementById('all_movies').style.display = 'none';
    var movie = document.getElementsByClassName('hidden_movie');
    for (var i = 0; i < movie.length; i++) {
        movie[i].style.display = 'block';
    }
}

document.getElementById('all_movies').addEventListener('click', showMovies);