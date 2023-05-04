function flecha(event) {
    console.log('onKeyUp:' + event.key);
    const foto=document.querySelector("img");
    foto.src="oro.jpg";
    }
    
    document.addEventListener('keyup', flecha);