import { timpaniSounds } from "./soundImport.mjs";

let timpaniSelect1 = document.getElementById("timpaniSelectpauk1")
let timpaniSelect2 = document.getElementById("timpaniSelectpauk2")
let timpaniSelect3 = document.getElementById("timpaniSelectpauk3")
let timpaniSelect4 = document.getElementById("timpaniSelectpauk4")


document.getElementById("pauk1").addEventListener("click", () => {
    timpaniSounds[timpaniSelect1.value].play()
})

document.getElementById("pauk2").addEventListener("click", () => {
    timpaniSounds[timpaniSelect2.value].play()
})

document.getElementById("pauk3").addEventListener("click", () => {
    timpaniSounds[timpaniSelect3.value].play()
})

document.getElementById("pauk4").addEventListener("click", () => {
    timpaniSounds[timpaniSelect4.value].play()
})

// Execute a function when the user presses a key on the keyboard
document.addEventListener("keydown", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 49 is the "1" key on the keyboard
    if (event.keyCode === 49) {
        timpaniSounds[timpaniSelect1.value].play()
    } else if (event.keyCode === 50) {
        timpaniSounds[timpaniSelect2.value].play()
    } else if (event.keyCode === 51) {
        timpaniSounds[timpaniSelect3.value].play()
    } else if (event.keyCode === 52) {
        timpaniSounds[timpaniSelect4.value].play()
    }
  });

/**
 * Populate selection lists with all possible sounds
 * @param {*} selectionList 
 */
function populateWithOptions(selectionList){
    for (let timpaniKey in timpaniSounds){
        let option = document.createElement("option");
        option.text = timpaniKey;
        selectionList.add(option);
    }
}

populateWithOptions(timpaniSelect1)
populateWithOptions(timpaniSelect2)
populateWithOptions(timpaniSelect3)
populateWithOptions(timpaniSelect4)