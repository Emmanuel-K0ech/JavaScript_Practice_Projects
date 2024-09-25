// Building a JavaScript Drum Kit - click and it plays the sound
// lets start with one button
// KeyCode attribute depreciated so moving on to code instead
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return; // stop the function from running if audio is not there
  audio.currentTime = 0; // Rewinds to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //stop it if not a transfrom
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

// Key topics
// - Key Events - Playing Audio - Listening on Transitions and Events
