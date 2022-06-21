// libreria sweet alert

const btn = document.querySelector('#enviarFormulario');
btn.addEventListener("click", () => {
  Swal.fire(
    'Buen trabajo!',
    'Completaste correctamente el formulario!',
    'success'
  )
});