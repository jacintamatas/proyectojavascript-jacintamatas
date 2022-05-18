let entrada = document.getElementById("entrada");
let productos = document.getElementById("productos");

entrada.addEventListener ("keyup", (e) => {
    if (e.key === "Enter") {
        info.className = "tienda1";
    }
    if (e.key === "a") {
        info.className = "tienda2";
    }
})

