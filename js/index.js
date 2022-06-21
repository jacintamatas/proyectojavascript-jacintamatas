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