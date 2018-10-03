// Sounds from https://freesound.org/search/?a_tag=&a_username=&g=1&f=grouping_pack%3A%221548_timpani%22+&a_filename=&a_soundid=&q=timpani&s=%22avg_rating+desc%22&a_packname=&a_description=&advanced=0&page=2#sound

var timp_b = new Howl({
    src: ["audio/timp_b_strong.flac"],
    html5: true,
    preload: true
})
var timp_f = new Howl({
    src: ["audio/timp_f_strong.flac"],
    html5: true,
    preload: true
})

var timp_g = new Howl({
    src: ["audio/timp_g_strong.flac"],
    html5: true,
    preload: true
})

var timp_dsharp = new Howl({
    src: ["audio/timp_dsharp_strong.flac"],
    html5: true,
    preload: true
})

var timp_csharp = new Howl({
    src: ["audio/timp_csharp_strong.flac"],
    html5: true,
    preload: true
})

var timp_c3 = new Howl({
    src: ["audio/timp_C3_strong.wav"],
    html5: true,
    preload: true
})

var timp_c4 = new Howl({
    src: ["audio/timp_C4_strong.wav"],
    html5: true,
    preload: true
})

let timpaniSounds = {
    "Timpani in B" : timp_b,
    "Timpani in F" : timp_f,
    "Timpani in G" : timp_g,
    "Timpani in D#" : timp_dsharp,
    "Timpani in C#" : timp_csharp,
    "Timpani in C3" : timp_c3,
    "Timpani in C4" : timp_c4
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