// add plaay audio
var myAudio = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  // $('.extra-button-cont .icon-bar a:last-child img').removeClass('mute');
  $('.extra-button-cont .icon-bar a').last().find('img').removeClass('mute');
};
myAudio.onpause = function() {
  isPlaying = false;
  // $('.extra-button-cont .icon-bar a:last-child img').addClass('mute');
  $('.extra-button-cont .icon-bar a').last().find('img').addClass('mute');
};