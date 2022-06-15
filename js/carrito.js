const carro = new Carrito ();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const btnAgregar = getElementById ("btnAgregar");

cargarEventos ();
function cargarEventos() {
    productos.addEventListener ('click', (e) => {carro.comprarProducto(e)});
    carrito.addEventListener ("click", (e) => {carro.eliminarProducto(e)});
}

class Carrito {
// Anadir producto al carrito
    comprarProducto(e) {
        e.preventDefault ();
        if (e.target.classList.contains("agregar-carrito")){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto (producto);
            console.log (producto);
        }
    }
    leerDatosProducto (producto){
        const infoProducto = {
            producto: document.getElementsByClassName ("descripcionesProducts"),
            especificacion: document.getElementsByClassName ("especificacionesProducts"),
            precio: document.getElementsByClassName ("preciosProducts"),
        }
    } 
}