let formulario = document.getElementById ("formulario");
let nombre = document.getElementById ("nombre");
let apellido = document.getElementById ("apellido");
let correo = document.getElementById ("correo");
let telefono = document.getElementById ("telefono");
let boton = document.getElementById ("enviar");

formulario.addEventListener ("sumbit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log (e.target.children.value);
    alert ("Completaste correctamente con los datos");
}

enviar.addEventListener ("click", () => {
    console.log (enviar.value);
})

