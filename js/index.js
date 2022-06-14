const btn = document.getElementById ('#logIn');
btn.addEventListener ("click", () => {
Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  )
})


const leerDatos = (valorAPedir) => {
    return prompt (`Ingrese su ${valorAPedir}`);
}

let nombre = leerDatos ("nombre");
let apellido = leerDatos ("apellido");
let edad = leerDatos ("edad");

console.log (`Hola ${nombre} ${apellido}`);


const validarEdad = (validarEdad) => {
    if (edad >= 18) {
    console.log ("Tiene: " + edad + " anos de edad" + "\n Si puede comprar en esta tienda");
} else {
    console.log ("Tiene: " + edad + " anos de edad" + "\n No puede comprar en esta tienda");
}
}


let botonIndex = document.getElementById("btnIndex")

botonIndex.addEventListener ("mousedown", () => {
    console.log ("click con mousedown");
    botonIndex.className = "tienda";
})

botonIndex.addEventListener ("mouseup", () => {
    console.log ("click con mouseup");
    botonIndex.className = "tienda2";
})

/*
const btn = document.getElementById ('#logIn');
btn.addEventListener ("click", () => {
    Swal.fire({
    title: 'Login Form',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().getElementById('#logIn').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(`
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim())
  })
})


