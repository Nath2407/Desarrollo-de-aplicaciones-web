function abrirLoot(){
    const foto=event.currentTarget;
    foto.src="oro.jpg";
    const mensaje=document.querySelector("h1");
    mensaje.textContent="Felicidades"
    foto.removeEventListener("click",abrirLoot);
}
const foto = document.querySelector('img');
foto.addEventListener('click', abrirLoot);