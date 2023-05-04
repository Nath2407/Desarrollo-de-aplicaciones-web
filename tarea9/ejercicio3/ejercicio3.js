function abrirLoot(){
    const foto=document.querySelector("img");
    foto.src="oro.jpg";
    foto.removeEventListener("click",abrirLoot);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
