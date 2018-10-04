let timp_c2 = new Howl({
    src: ["audio/timpani/C2-PB.wav"],
    html5: true,
    preload: true
})

let timp_db2 = new Howl({
    src: ["audio/timpani/Db2-PB.wav"],
    html5: true,
    preload: true
})

let timp_d2 = new Howl({
    src: ["audio/timpani/D2-PB.wav"],
    html5: true,
    preload: true
})

let timp_eb2 = new Howl({
    src: ["audio/timpani/Eb2-PB.wav"],
    html5: true,
    preload: true
})

let timp_e2 = new Howl({
    src: ["audio/timpani/E2-PB.wav"],
    html5: true,
    preload: true
})

let timp_f2 = new Howl({
    src: ["audio/timpani/F2-PB.wav"],
    html5: true,
    preload: true
})

let timp_gb2 = new Howl({
    src: ["audio/timpani/Gb2-PB.wav"],
    html5: true,
    preload: true
})

let timp_g2 = new Howl({
    src: ["audio/timpani/G2-PB.wav"],
    html5: true,
    preload: true
})

let timp_ab2 = new Howl({
    src: ["audio/timpani/Ab2-PB.wav"],
    html5: true,
    preload: true
})

let timp_a2 = new Howl({
    src: ["audio/timpani/A2-PB.wav"],
    html5: true,
    preload: true
})

let timp_bb2 = new Howl({
    src: ["audio/timpani/Bb2-PB.wav"],
    html5: true,
    preload: true
})

let timp_b2 = new Howl({
    src: ["audio/timpani/B2-PB.wav"],
    html5: true,
    preload: true
})

let timp_c3 = new Howl({
    src: ["audio/timpani/C3-PB.wav"],
    html5: true,
    preload: true
})

let timp_db3 = new Howl({
    src: ["audio/timpani/Db3-PB.wav"],
    html5: true,
    preload: true
})

let timp_d3 = new Howl({
    src: ["audio/timpani/D3-PB.wav"],
    html5: true,
    preload: true
})

let timp_eb3 = new Howl({
    src: ["audio/timpani/Eb3-PB.wav"],
    html5: true,
    preload: true
})

let timp_e3 = new Howl({
    src: ["audio/timpani/E3-PB.wav"],
    html5: true,
    preload: true
})

let timp_f3 = new Howl({
    src: ["audio/timpani/F3-PB.wav"],
    html5: true,
    preload: true
})

let timp_gb3 = new Howl({
    src: ["audio/timpani/Gb3-PB.wav"],
    html5: true,
    preload: true
})

let timp_g3 = new Howl({
    src: ["audio/timpani/G3-PB.wav"],
    html5: true,
    preload: true
})


let timpaniSounds = {
    "C2 - Timpani" : timp_c2,
    "C#2 - Timpani" : timp_db2,
    "D2 - Timpani" : timp_d2,
    "Eb2 - Timpani" : timp_eb2,
    "E2 - Timpani" : timp_e2,
    "F2 - Timpani" : timp_f2,
    "F#2 - Timpani" : timp_gb2,
    "G2 - Timpani" : timp_g2,
    "G#2 - Timpani" : timp_ab2,
    "A2 - Timpani" : timp_a2,
    "Bb2 - Timpani" : timp_bb2,
    "B2 - Timpani" : timp_b2,
    "C3 - Timpani" : timp_c3,
    "C#3 - Timpani" : timp_db3,
    "D3 - Timpani" : timp_d3,
    "Eb3 - Timpani" : timp_eb3,
    "E3 - Timpani" : timp_e3,
    "F3 - Timpani" : timp_f3,
    "F3# - Timpani" : timp_gb3,
    "G3 - Timpani" : timp_g3
}

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