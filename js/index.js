/* DESAFÍO 2 (Incorporar eventos) */

let botonIndex = document.getElementById("btnIndex")

botonIndex.addEventListener ("mousedown", () => {
    console.log ("click con mousedown");
    botonIndex.className = "tienda";
})

botonIndex.addEventListener ("mouseup", () => {
    console.log ("click con mouseup");
    botonIndex.className = "tienda2";
})


