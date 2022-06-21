let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}

/*

const crearFormulario = () => { 
    let formularioContact = document.createElement ("div");
    formularioContact.innerHTML =
    `
    <fieldset class="fieldsetContact1"> 
    <p>Datos personales</p>   
    <input type="text">Nombre<br>    
    <input type="text">Apellido<br>
    <input type="email">Correo electrónico<br>
    <input type="teléfono">Teléfono<br>
    <input type="text">Comentarios<br>
    <h4 class="formularioRespuesta"> Acepta términos y condiciones </h4>
    <input class="formularioRespuesta" type="checkbox" name="Acepta" value="1">
    <button id="enviarFromulario">ENVIAR</button>
    </fieldset>     
`;
document.body.appendChild (formularioContact);
}
crearFormulario();

let formularioContact = document.getElementById("formulario");
formularioContact.addEventListener ("sumbit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log (e.target.children.value);
    alert ("Completaste correctamente con los datos");
}
validarFormulario ();

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}

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

            
            <form action="" id="formulario" class="formContact" class="form-control-plaintext">    

                    

                    <fieldset class="fieldsetContact1">  
                    <legend class="legendContact">Datos personales</legend>   
                    <label for="nombre">Nombre:</label><br> 
                    <input type="text" ><br>    
                    
                    <label for="apellido">Apellido:</label><br>
                    <input type="text"><br>

                    <label for="email">Correo electrónico:</label><br>
                    <input type="email" ><br>

                    <label for="teléfono">Teléfono:</label><br>
                    <input type="teléfono" ><br>

                    <label for="comentarios">Comentarios:</label><br>   
                    <textarea name="comentarios" cols="30" rows="10"></textarea><br>
                
                </fieldset>    
                
                <fieldset class="fieldsetContact2"> 

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

                <br>    

                    <h4 class="formularioRespuesta"> Acepta términos y condiciones </h4>
                    <input class="formularioRespuesta" type="checkbox" name="Acepta" value="1">

                    <button id="enviarFromulario">ENVIAR</button>

                </fieldset>            
            </form> 
*/