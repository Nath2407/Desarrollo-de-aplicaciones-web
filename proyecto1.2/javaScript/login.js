let sigUp = document.getElementById("sigUp");
let sigIn = document.getElementById("sigIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

sigIn.onclick = function() {
    nameInput.style.maxHeight= "0";
    title.innerHTML = "Login";
    sigUp.classList.add("disable");
    sigIn.classList.remove("disable");
}
sigUp.onclick = function(){
    nameInput.style.maxHeight="60px";
    title.innerHTML="Registro";
    sigUp.classList.remove("disable");
    sigIn.classList.add("disable");

}
