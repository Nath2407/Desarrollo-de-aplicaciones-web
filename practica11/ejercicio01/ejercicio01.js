function esBlanco(entradaCampo){
    if_(entradaCampo.type === "checkbox");{
        if(entradaCampo.checked){
            return false;
        }
        return true;
    }
    if (entradaCampo.value === ""){
        return true;
    }
    return false;
}
/*Crear dos funciones para aplicar el estilo de erroe a travez de JS*/
function estiloRojo(entradaDiv){
    entradaDiv.style.backgroundColor = 'rgb(170,0,0)';
    entradaDiv.parantNode.style.backgroundColor = 'rgb(170,0,0)';
    entradaDiv.parantNode.style.color = 'white';
}
function estiloReset(entradaDiv){
    entradaDiv.parantNode.style.backgroundColor = 'white';
    entradaDiv.parantNode.style.color = 'black';
    entradaDiv.style.backgroundColor = 'white';
}

var entradasRequeridas = document.querySelectorAll(".requerido")

for(let elemento of entradasRequeridas){
    elemento.onfocus = function(){
        this.style.backgroundColor = 'yellow';
    }
}

var formulario = document.getElementById("formulario");

formulario.onsubmit = function (event) {
    let error = false;

    for(let elemento of entradasRequeridas){
        if(esBlanco(elemento)){
            event.preventDefault();
            estiloRojo(elemento);
            error = true;
        }
        else{
            estiloReset(elemento);
        }
    }
    if(error){
        let requerido = document.querySelector("#error");
        requerido.classList.remove('oculto');
        requerido.classList.add('mensajeError');
        let mensajeError = document.querySelector("#errorMensaje");
        mensajeError.textContent = "Debes proporcionar todos los campos marcados como abligatorios";
    }
    
}

formulario.onreset = function (event) {
    let mensajeError = document.querySelector("#error"); 
    mensajeError.classList.add('oculto');
    mensajeError.classList.remove('mensajeError'); 
    for (let elemento of entradasRequeridas){
        estiloReset(elemento);
    } 
}