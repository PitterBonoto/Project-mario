let myForm = document.querySelector(".my-form")
let mascaraForm = document.querySelector(".mascara-form")
const audioItsMe = document.querySelector(".audio-its-me")
const audioOkiDoki = document.querySelector(".audio-oki-doki")

function contact() {

    audioItsMe.play()
    myForm.style.left = "500px"
    mascaraForm.style.visibility = "visible"
}


function toSend() {

    audioOkiDoki.play()
    myForm.style.left = "-350px"
    mascaraForm.style.visibility = "hidden"
}