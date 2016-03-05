window.addEventListener('load', listener_play, false);
window.addEventListener('load', listener_pause, false);
window.addEventListener('load', listener_mute, false);

var music = document.getElementById('player');

function listener_play() {
	var boton = document.getElementById('play');
	boton.addEventListener('click', playAction);
}

function playAction() {
	if (music.paused) {
		music.play();
	}
}

function listener_pause() {
	var boton = document.getElementById('pause');
	boton.addEventListener('click', pauseAction);
}

function pauseAction(){
	if (music.play) {
		music.pause();
	}
}

function listener_mute() {
	var boton = document.getElementById('mute');
	boton.addEventListener('click', muteAction);
}

function muteAction() {
	if (music.muted == false) {
    	music.muted=true;
    } else if (music.muted == true) {
    	music.muted=false;
    }
}

