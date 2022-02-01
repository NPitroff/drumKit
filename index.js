
// selecting all the drum buttons
const drumButtons = document.querySelectorAll(".drum").length
//selecting the audio file
var drumAudio = new Audio("sounds/tom-1.mp3")
// loop through each button to add an event listener
for (var i=0; i < drumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    this.style.color = "white";
  })
}



// drumAudio.play();
