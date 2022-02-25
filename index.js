for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)
    makeAnimation(buttonInnerHTML)
  })
}

const eventKey = document.addEventListener("keypress", function(event) {
  makeSound(event.key)
  makeAnimation(event.key)
})

function makeSound(key) {
  switch (key) {

    case "w":
      let audio1 = new Audio("./sounds/tom-1.mp3")
      return audio1.play()
    break;

    case "a":
      let audio2 = new Audio("./sounds/tom-2.mp3")
      return audio2.play()
    break;

    case "s":
      let audio3 = new Audio("./sounds/tom-3.mp3")
      return audio3.play()
    break;

    case "d":
        let audio4 = new Audio("./sounds/tom-4.mp3")
        return audio4.play()
    break;

    case "j":
      let audio5 = new Audio("./sounds/snare.mp3")
    return audio5.play()
    break;

    case "k":
      let audio6 = new Audio("./sounds/crash.mp3")
      return audio6.play()
    break;

    case "l":
      let audio7 = new Audio("./sounds/kick-bass.mp3")
      return audio7.play()
    break;

    default: console.log(buttonInnerHTML, keypress.key);
  }
}

function makeAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey)
  activeButton.classList.toggle("pressed")
  setTimeout(function() {
    activeButton.classList.toggle("pressed")
  },100)
}
