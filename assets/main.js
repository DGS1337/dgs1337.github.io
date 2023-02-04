function overlay(){var btn=document.getElementById("overlay-start");var wrapper=document.getElementById("wrapper");btn.style.opacity=0;wrapper.style.cssText="visibility: visible;";mediaPlay();}
function mediaPlay(){var audio=document.getElementById("audio");var video=document.getElementById("bgvid");audio.muted=!audio.muted;audio.volume=1;audio.play()
video.play()}