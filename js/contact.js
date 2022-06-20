let formularioContact = document.getElementById ("formulario");
let nombreContact = document.getElementById ("nombre");
let apellidoContact = document.getElementById ("apellido");
let correoContact = document.getElementById ("correo");
let telefonoContact = document.getElementById ("telefono");
let boton = document.getElementById ("enviar");

formularioContact.addEventListener ("sumbit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log (e.target.children.value);
    alert ("Completaste correctamente con los datos");
}
enviar.addEventListener ("click", () => {
    console.log (enviar.value);
})

