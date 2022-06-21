var botonholaaa = document.querySelector ('#holaaa');
botonholaaa.addEventListener ("click", () => {
    Swal.fire('Any fool can use a computer')
})
/*
const leerDatos = (valorAPedir) => {
    return prompt (`Ingrese su ${valorAPedir}`);
}

let usuario;
let nombre = leerDatos ("nombre");
let apellido = leerDatos ("apellido");
let edad = leerDatos ("edad");

console.log (`Hola ${nombre} ${apellido}, usted tiene ${edad} anos de edad`);

const validarEdad = (edad >= 18) ? true : false
validarEdad ? alert(`Tiene ${edad} anos de edad. Si puede comprar en esta tienda`) : alert(`Tiene ${edad} anos de edad. No puede comprar en esta tienda`);
validarEdad ();





const leerDatos = (valorAPedir) => {
    return prompt (`Ingrese su ${valorAPedir}`);
}

let nombre = leerDatos ("nombre");
let apellido = leerDatos ("apellido");
let edad = leerDatos ("edad");

console.log (`Hola ${nombre} ${apellido}, tienes ${edad} anos de edad`);
const validarEdad = () => {
    if (edad >= 18) {
    alert ("Tiene: " + edad + " anos de edad" + "\n Si puede comprar en esta tienda");
} else {
    console.log ("Tiene: " + edad + " anos de edad" + "\n No puede comprar en esta tienda");
}
}
validarEdad ();

//

const validarEdad = (edad >= 18) ? true : false
validarEdad ? alert("Tiene: " + edad + " anos de edad" + "\n Si puede comprar en esta tienda") : alert("No puede comprar")

// libreria index
const botonLogIn = document.querySelector ('#logIn');

botonLogIn.addEventListener ("click", () => {
    console.log (botonlogIn);
    Swal.fire('Any fool can use a computer')

    })

    Swal.fire({
    title: 'Login Form',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#logIn').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(
      `Login: ${result.value.login}`
      `Password: ${result.value.password}`
    .trim())
  }) 
  
  
const validarEdad = () => {
    if (edad >= 18) {
    console.log ("Tiene: " + edad + " anos de edad" + "\n Si puede comprar en esta tienda");
} else {
    console.log ("Tiene: " + edad + " anos de edad" + "\n No puede comprar en esta tienda");
}
}

const validarEdad = (edad >= 18) ? true : false
edad ? Swal.fire({
    icon: 'error',
    title: 'Si puede comprar en esta tienda!',
    text: 'Es mayor de edad',
    confirmButtonText: 'Ok',
  })
  : Swal.fire({
    icon: 'error',
    title: 'No puede comprar en esta tienda, es menor de edad',
    text: 'Lo sentimos!',
    confirmButtonText: 'Ok',
  })
*/