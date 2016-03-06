window.addEventListener('load', listener_play, false);
window.addEventListener('load', listener_pause, false);
window.addEventListener('load', listener_mute, false);

var music = document.getElementById('player');

function cambiarLista() {
	
}

//listener and action for play button
function listener_play() {
	var boton = document.getElementsByClassName('play');
	for (var i=0; i<boton.length; i++) {
		boton[i].addEventListener('click', playAction);	
	}
}

function playAction() {
	if (music.paused) {
		music.play();
	}
}

//listener and action for pause button
function listener_pause() {
	var boton = document.getElementsByClassName('pause');
	for (var i=0; i<boton.length; i++) {
		boton[i].addEventListener('click', pauseAction);	
	}
}

function pauseAction(){
	if (music.play) {
		music.pause();
	}
}

//listener and action for mute button
function listener_mute() {
	var boton = document.getElementsByClassName('mute');
	for (var i=0; i<boton.length; i++) {
		boton[i].addEventListener('click', muteAction);	
	}
}

function muteAction() {
	if (music.muted == false) {
    	music.muted=true;
    } else if (music.muted == true) {
    	music.muted=false;
    }
}