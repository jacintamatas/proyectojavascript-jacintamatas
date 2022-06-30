let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}


var crearFormulario = () => { 
    var formularioContact = document.createElement ("div");
    formularioContact.className = "fieldsetContact2";
    formularioContact.innerHTML =
    `
    <legend class="legendContact">Información extra</legend>
    <p class="pContact">¿Desea recibir información a su mail?</p> 
    <br>
    <span class="spanContact">SI</span> 
    <input type="radio" name="opción" value="SI">  
    <span class="spanContact">NO</span> 
    <input type="radio" name="opción" value="NO">
    <br>
    <h3 id="info"> Información sobre:</h3> 
    <select name="Información sobre:" id="selectInfo">
    <option value="Empleos">Reservas</option>
    <option value="Encargos">Empleos</option>
    <option value="Delivery">Delivery</option>
    <option value="Propietarios">Encargos</option>
    <option value="Locales">Sucursales</option>
    </select>     

`;
document.body.appendChild (formularioContact);
}
crearFormulario();