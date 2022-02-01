
// selecting all the drum buttons
const drumButtons = document.querySelectorAll(".drum")
//selecting the audio file
var drumAudio = new Audio("sounds/tom-1.mp3")
// loop through each button to add an event listener
drumButtons.forEach(drumButton => {
  drumButton.addEventListener('click', (e) =>{
    drumAudio.play();
  })
})
