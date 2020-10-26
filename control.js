const form = document.querySelector("form");

form.addEventListener('submit', e => {
    e.preventDefault()
    const usuario = document.querySelector("#usuario");
    const clave = document.querySelector("#clave");

    if(usuario.value == ""){
        alert("El campo usuario no puede estar vacío")
    }else if(clave.value == ""){
        alert("El campo clave no puede estar vacío")
    }
    else if(!(/@/.test(usuario.value))){
        alert("El campo usuario debe tener una direccion de mail valida");
    }
    else{
        alert("El formulario se envió correctamente")
    }
});



