var frameNumber = 0; // start video at frame 0

// lower numbers = faster playback
const playbackConst = 400;

let setHeight = document.getElementById("set-height");
vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  console.log(frameNumber);
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);