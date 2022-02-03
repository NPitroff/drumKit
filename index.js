
// selecting all the drum buttons
const drumButtons = document.querySelectorAll(".drum").length

// loop through each button to add an event listener
for (var i=0; i < drumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // variable to catch the button html
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
});

}
// event listener for a keydown press
document.addEventListener("keydown", function(e){

  makeSound(e.key);
  buttonAnimation(e.key);

})

function makeSound (key){
  // switch statement to operate through the buttons
  switch (key) {
    // next button
    case "w":
    //selecting the audio file
    var crashAudio = new Audio("sounds/crash.mp3")
      crashAudio.play();
      break;
      // next button
      case "a":
      //selecting the audio file
    var tomOneAudio = new Audio("sounds/tom-1.mp3")
      tomOneAudio.play();
      break;
      // next button
      case "s":
      //selecting the audio file
      var tomTwoAudio = new Audio("sounds/tom-2.mp3")
      tomTwoAudio.play();
      break;
      // next button
      case "d":
      //selecting the audio file
    var kickAudio = new Audio("sounds/kick-bass.mp3")
      kickAudio.play();
      break;
      // next button
      case "j":
      //selecting the audio file
      var snareAudio = new Audio("sounds/snare.mp3")
      snareAudio.play();
      break;
      // next button
      case "k":
      //selecting the audio file
    var tomThreeAudio = new Audio("sounds/tom-3.mp3")
      tomThreeAudio.play();
      break;
      // next button
      case "l":
      //selecting the audio file
    var tomFourAudio = new Audio("sounds/tom-4.mp3")
      tomFourAudio.play();
      break;
    default:

  }
}

// function to animate a button to show it was pressed
function buttonAnimation(currentKey){
  // var to hold the queryselector of a button
  var activeButton = document.querySelector("."+currentKey)
  activeButton.classList.add("pressed");
// setTimeout to remove the pressed class
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
