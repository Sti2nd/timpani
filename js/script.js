// Sounds from https://freesound.org/search/?a_tag=&a_username=&g=1&f=grouping_pack%3A%221548_timpani%22+&a_filename=&a_soundid=&q=timpani&s=%22avg_rating+desc%22&a_packname=&a_description=&advanced=0&page=2#sound

var timp_b = new Howl({
    src: ["audio/timp_b_strong.flac"],
    html5: true
})

document.getElementById("pauk1").addEventListener("click", () => {
    timp_b.play()
})

var timp_f = new Howl({
    src: ["audio/timp_f_strong.flac"],
    html5: true
})

document.getElementById("pauk2").addEventListener("click", () => {
    timp_f.play()
})

var timp_g = new Howl({
    src: ["audio/timp_g_strong.flac"],
    html5: true
})

document.getElementById("pauk3").addEventListener("click", () => {
    timp_g.play()
})