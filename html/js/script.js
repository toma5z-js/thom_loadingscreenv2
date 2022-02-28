var audio = new Audio('video/paranoia.mp3');
audio.volume = 0.01;
audio.play();
if (audio) {

window.addEventListener('keydown', function (event) {

var key = event.which || event.keyCode;

if (key === 32) { // spacebar

// eat the spacebar, so it does not scroll the page
event.preventDefault();

audio.paused ? audio.play() : audio.pause();

}

});
}

