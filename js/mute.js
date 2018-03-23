function mute(){
  var audio = document.getElementById("musiikki")
  var toggle = document.getElementById("toggle")
  if (audio.muted == true) {
    audio.muted=false
    toggle.innerHTML ="MUTE"
	localStorage.setItem('audio.muted', 1);
    document.getElementById('toggle').innerHTML = 'MUTE';
  } else {
    audio.muted=true
    localStorage.setItem('audio.muted', 0);
    document.getElementById('toggle').innerHTML = 'UNMUTE';
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  if (+localStorage.getItem('audio.muted')) {
	audio.muted=false  
    document.getElementById('toggle').innerHTML = 'MUTE';
  } else {
	audio.muted=true
    document.getElementById('toggle').innerHTML = 'UNMUTE';
  }
})