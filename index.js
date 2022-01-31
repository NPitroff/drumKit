
// selecting all the drum buttons
const drumButtons = document.querySelectorAll(".drum")
// loop through each button to add an event listener
drumButtons.forEach(drumButton => {
  drumButton.addEventListener('click', (e) =>{
    console.log("Clicked!")
  })
})
