var audio = new Audio("assets/music/msc.mp3");
  audio.volume = 0.2;
  audio.loop = true;
document.onclick = function() {
  audio.play();
}
