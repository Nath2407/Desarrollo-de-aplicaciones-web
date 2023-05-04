function abrirLoot(event){
    const newHeader=document.createElement("h1");
    newHeader.textContent="Felicidades";

    const nuevaFoto=document.createElement("img");
    nuevaFoto.src="oro,jpg";

    const container=document.querySelector("#container");
    container.innerHTML="";
    container.appendChild(newHeader);
    container.appendChild(nuevaFoto);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
