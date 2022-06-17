
const productos = [
    // DESAYUNOS // 
    { imagenProducts: "https://modestogodoy.com.ar/wp-content/uploads/2020/05/modesto-godoy-gidtcard-desayuno-4.png", descripcionesProducts: "desayuno alison", especificacionesProducts: "yogurt con granola y frutas + medialuna jamón y queso + té o café + jugo de naranja" , preciosProducts: "$1500" },
    { imagenProducts: "https://i.pinimg.com/564x/a4/32/b7/a432b7291663f3aa87bbd3d953d99d00.jpg", descripcionesProducts: "desayuno premium", especificacionesProducts: "porción de budín a elección + té o café + jugo de naranja" , preciosProducts: "$1200"},
    { imagenProducts: "https://i.pinimg.com/564x/7b/ad/d0/7badd03e98f7042385d0f1d9c5f9ce9d.jpg", descripcionesProducts: "desayuno classic", especificacionesProducts: "2 pastries a elección + té o café" , preciosProducts: "1100"},
    { imagenProducts: "https://i.pinimg.com/564x/55/b8/bc/55b8bc4f5a122d422a721e91e0fc31c8.jpg", descripcionesProducts: "tostados alison", especificacionesProducts: "tostados de jamón y queso con palta (opcional)" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/7d/f3/ff/7df3ff19a13a13909762c3da327e85dc.jpg", descripcionesProducts: "mega toasts", especificacionesProducts: "tostadas a elección con mantequilla o nutella, banana o manzana y chocolate" , preciosProducts: "$800"},
    { imagenProducts: "https://i.pinimg.com/564x/62/13/c0/6213c06a6eda86f2ea7116b53c741100.jpg", descripcionesProducts: "avocado toasts", especificacionesProducts: "tostadas a elección con palta, huevo poché / duro / revuelto" , preciosProducts: "$800"},
    { imagenProducts: "https://i.pinimg.com/564x/fb/0c/3b/fb0c3b24461fbbed4843e307b8d1cfa4.jpg", descripcionesProducts: "waffles / panqueques alison", especificacionesProducts: "con frutillas y banana, bañado en nutella" , preciosProducts: "$900"},
    { imagenProducts: "https://modestogodoy.com.ar/wp-content/uploads/2020/05/modesto-godoy-gidtcard-desayuno-2.png", descripcionesProducts: "panqueques healthy", especificacionesProducts: "panqueques de avena con fruta, miel y canela o cacao (opcional)" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/1c/60/46/1c604624c8cdcf7415aa970ea56b8cd5.jpg", descripcionesProducts: "croissants (2 unidades)", especificacionesProducts: "jamon y queso / almendras / chocolate / dulce de leche" , preciosProducts: "$400"},
    { imagenProducts: "https://i.pinimg.com/564x/30/2b/63/302b63ff7a3e6aaecdb9ccf7c0ff11ec.jpg", descripcionesProducts: "yogurt con granola y frutas", especificacionesProducts: "yogurt griego, granola casera, coco en escamas, frutas de estacion y semillas" , preciosProducts: "$850"},
    { imagenProducts: "https://i.pinimg.com/564x/77/57/a8/7757a8da2d0da5f03705683e350b2966.jpg", descripcionesProducts: "acai bowl", especificacionesProducts: "base de frutos rojos, toppings a eleccion: frutas, granola, pasta de mani, coco, miel, chocolate" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/e9/c4/33/e9c4337de8b928451014699ba5783591.jpg", descripcionesProducts: "french toasts", especificacionesProducts: "tostadas francesas acompañadas de fruta, coco y canela" , preciosProducts: "$900"},
    // ALMUERZOS // 

    { imagenProducts: "https://modestogodoy.com.ar/wp-content/uploads/2020/05/modestogallery12.jpg", descripcionesProducts: "sandwich alison", especificacionesProducts: "de pollo o carne - queso cheddar o suizo, lechuga, tomate y palta acompañado de papas" , preciosProducts: "$1200"},
    { imagenProducts: "https://i.pinimg.com/564x/bc/f8/7d/bcf87def3cefca3cead5355503cd60cd.jpg", descripcionesProducts: "burger alison", especificacionesProducts: "hamburguesa con doble carne, queso suizo o cheddar, panceta, tomate y cebolla caramelizada acompañado con papas" , preciosProducts: "$1200"},
    { imagenProducts: "https://images.squarespace-cdn.com/content/v1/5fc6985aec917750a3ff0c92/1618425908289-XJS7K1Z8B79RZD5P7HM4/DSC_0020.jpg?format=1000w", descripcionesProducts: "bowl alison", especificacionesProducts: "salmon / pollo / langostinos - quinoa, tomate, cebolla, mango, palta y rúcula con dressing de palta" , preciosProducts: "$950"},
    { imagenProducts: "https://i.pinimg.com/564x/ce/9c/4b/ce9c4b561c9dd2d08d8fb9e96eb7c5eb.jpg                    ", descripcionesProducts: "milanesa alison", especificacionesProducts: "de carne o pollo, acompañada de spaguettis con crema o bolognesa" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/ac/cf/76/accf7664e7f0590e5415f62188617efd.jpg", descripcionesProducts: "milanesa napolitana", especificacionesProducts: "de carne o pollo, acompañada de pure de papa / verduras grilladas / ensalada / papas fritas" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/27/f2/86/27f286e3851e730cec2bd1f41f687050.jpg", descripcionesProducts: "milanesa a caballo", especificacionesProducts: "de carne o pollo, acompañada de pure de papa / verduras grilladas / ensalada / papas fritas" , preciosProducts: "$950"},
    { imagenProducts: "https://i.pinimg.com/564x/ee/06/0d/ee060d846087bc18a92b4622b8cb081a.jpg", descripcionesProducts: "tarta del día", especificacionesProducts: "acompañado de pure de papa / verduras grilladas / ensalada / papas fritas" , preciosProducts: "$750"},
    { imagenProducts: "https://i.pinimg.com/564x/88/59/79/885979c6c784ce6358f8a56157693b36.jpg", descripcionesProducts: "carne del día", especificacionesProducts: "acompañado de pure de papa / verduras grilladas / ensalada / papas fritas" , preciosProducts: "$1300"},
    { imagenProducts: "https://i.pinimg.com/564x/d2/b3/bd/d2b3bd018e0ba5672f543c973f9a889a.jpg", descripcionesProducts: "salmón o branzino", especificacionesProducts: "acompañado de pure de papa / verduras grilladas / ensalada / papas fritas" , preciosProducts: "$1600"},
    { imagenProducts: "https://i.pinimg.com/564x/1e/52/b9/1e52b94c47b9a412a26478ee248f29d4.jpg", descripcionesProducts: "poke bowl", especificacionesProducts: "salmon / langostinos / tuna - arroz de sushi, palta, rabanitos y sésamo con salsa chilli" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/5b/07/95/5b07957c3a3d42005b5892548366f482.jpg", descripcionesProducts: "vegggie bowl", especificacionesProducts: "garbanzos, espinaca, brocoli, arroz, calabaza, palta y dressing de cilantro" , preciosProducts: "$850"},
    { imagenProducts: "https://i.pinimg.com/564x/f6/01/de/f601de3322b2631b8a8b7817e9fb22d3.jpg", descripcionesProducts: "super bowl", especificacionesProducts: "salmon / pollo / langostinos - quinoa, tomate, cebolla, mango, palta y rúcula con dressing de palta" , preciosProducts: "$950"},
    { imagenProducts: "https://i.pinimg.com/564x/89/94/76/8994768c74664105b4add642cda924e3.jpg", descripcionesProducts: "pizzas", especificacionesProducts: "margarita / especial / rucula y jamón crudo" , preciosProducts: "$800"},
    { imagenProducts: "https://i.pinimg.com/564x/6b/2f/da/6b2fda22544f1f3bcc3e70ab85e3aace.jpg", descripcionesProducts: "penne / spaguetti / fussile / fetuccini", especificacionesProducts: "con salsa bolgnesa o alfredo / crema / salsa blanca" , preciosProducts: "$900"},
    { imagenProducts: "https://i.pinimg.com/564x/22/59/dd/2259dd111d8161b82f57f362c9aef5b6.jpg", descripcionesProducts: "sushi boat", especificacionesProducts: "15 piezas a elección (consultar)" , preciosProducts: "$1600"},

    // PASTELERIA // 

    { imagenProducts: "https://i.pinimg.com/564x/e1/76/ef/e176ef7829a311ed90cadd92ffb5eb4e.jpg", descripcionesProducts: "budines", especificacionesProducts: "limón / chocolate / banana / vainilla / arandanos / naranja / pistacho" , preciosProducts: "$350"},
    { imagenProducts: "https://i.pinimg.com/564x/3d/27/73/3d27730ab35aaa5dfcff56390baef1a2.jpg", descripcionesProducts: "macarons", especificacionesProducts: "3 unidades" , preciosProducts: "$400"},
    { imagenProducts: "https://i.pinimg.com/564x/93/5f/70/935f70b6fd996bb0d4ab8b53c5030eea.jpg", descripcionesProducts: "cinnamon rolls", especificacionesProducts: "1 unidad" , preciosProducts: "$500"},
    { imagenProducts: "https://i.pinimg.com/564x/88/2c/f0/882cf0c1eee8f21dc757b3212b27c72f.jpg", descripcionesProducts: "pastries", especificacionesProducts: "1 porción" , preciosProducts: "$250"},
    { imagenProducts: "https://i.pinimg.com/564x/a4/0b/3d/a40b3d46ab25e51249be0aeb45f40a1a.jpg", descripcionesProducts: "torta oreo", especificacionesProducts: "1 porción" , preciosProducts: "$650"},
    { imagenProducts: "https://i.pinimg.com/564x/6f/e1/c5/6fe1c5185ac0cb278416a3c6ad36fb3c.jpg", descripcionesProducts: "cheesecake con frutos rojos", especificacionesProducts: "1 porción" , preciosProducts: "$600"},
    { imagenProducts: "https://i.pinimg.com/564x/fe/9d/ee/fe9dee563013c3e3b8246de177545e5c.jpg", descripcionesProducts: "rogel", especificacionesProducts: "1 porción" , preciosProducts: "$500"},
    { imagenProducts: "https://i.pinimg.com/564x/6d/98/47/6d9847abe46be4d66ffd809f7aab6894.jpg", descripcionesProducts: "lemon pie", especificacionesProducts: "1 porción" , preciosProducts: "$500"},
    { imagenProducts: "https://i.pinimg.com/564x/ca/1c/27/ca1c27abfa5980a0f1c03a5f48f3cf54.jpg", descripcionesProducts: "tiramisú", especificacionesProducts: "1 porción" , preciosProducts: "$450"},


    // BEBIDAS // 

    { imagenProducts: "https://modestogodoy.com.ar/wp-content/uploads/2020/05/modestogallery1.jpg", descripcionesProducts: "té en hebras", especificacionesProducts: "manzanilla, cachamai, canela, frutos rojos, verde, limón, jengibre y naranja" , preciosProducts: "$150"},
    { imagenProducts: "https://i.pinimg.com/564x/98/d9/b3/98d9b337f0a731e7624d3882a270b279.jpg", descripcionesProducts: "café con leche", especificacionesProducts: "leche a elección (sin lactosa, almendras, avena, coco)" , preciosProducts: "$250"},
    { imagenProducts: "https://i.pinimg.com/564x/c0/eb/4d/c0eb4dd168a2fcf8f6ec6c3d9c47650c.jpg", descripcionesProducts: "capuccino", especificacionesProducts: "leche a elección (sin lactosa, almendras, avena, coco)" , preciosProducts: "$300"},
    { imagenProducts: "https://i.pinimg.com/564x/ec/9e/df/ec9edfea4529181d37add9cce8787c43.jpg", descripcionesProducts: "iced coffee", especificacionesProducts: "leche a elección (sin lactosa, almendras, avena, coco)" , preciosProducts: "$250"},
    { imagenProducts: "https://i.pinimg.com/564x/da/b4/11/dab41167ecf8883aa934cb8a29ea9621.jpg", descripcionesProducts: "matcha latte", especificacionesProducts: "leche a elección (sin lactosa, almendras, avena, coco)" , preciosProducts: "$300"},
    { imagenProducts: "https://i.pinimg.com/564x/86/60/da/8660da9b4ab2b4a729b5152e057f84e1.jpg", descripcionesProducts: "jugos naturales", especificacionesProducts: "anana / frutilla / naranja / banana / kiwi / durazno" , preciosProducts: "$350"},
    { imagenProducts: "https://i.pinimg.com/originals/fc/06/46/fc064614d3f8f85581f5b34b625989ad.gif", descripcionesProducts: "cerveza", especificacionesProducts: "corona / stella artois / heineken" , preciosProducts: "$450"},
    { imagenProducts: "https://i.pinimg.com/564x/66/9f/de/669fdedcb5e7355eaa41cd1b48f8ead5.jpg", descripcionesProducts: "aperol spritz", especificacionesProducts: "con pomelo o soda" , preciosProducts: "$550"},
    { imagenProducts: "https://i.pinimg.com/564x/fc/aa/3c/fcaa3cc181c6b2960b9710fa4b832ff2.jpg", descripcionesProducts: "fernet", especificacionesProducts: "" , preciosProducts: "$400"},
    { imagenProducts: "https://www.sanpellegrino.com/media//international/home/brand/pet/Sanpellegrino_HP_33_pet.jpg", descripcionesProducts: "soda o agua mineral", especificacionesProducts: "" , preciosProducts: "$150"},
    { imagenProducts: "https://preview.free3d.com/img/2018/07/2162675739588035929/0k9ff6rn-900.jpg", descripcionesProducts: "gaseosas", especificacionesProducts: "" , preciosProducts: "$250"}

]

let contenedor = document.createElement ("div"); 
contenedor.className = "card";
contenedor.innerHTML = `<img src= "${producto.imagenProducts}" >`
document.body.appendChild (contenedor);

const crearProductos = () => {
    
    for (const producto of productos) {
        
        let contenedorProducts = document.createElement ("div"); 
        contenedorProducts.className = "card-body";
        contenedorProducts.innerHTML = `
                            <p> Producto: ${producto.descripcionesProducts} </p>
                            <p2> Especificacion: ${producto.especificacionesProducts} </p2>
                            <b> Precio: ${preciosProducts} </b>`;
    document.body.appendChild (contenedorProducts);
}
}

const aplicarStorage = (clave, valor) => { 
    localStorage.setItem(clave, valor);
}

for (const producto of productos) {
    guardarLocal(producto.descripcionesProducts, JSON.stringify(producto))
}

const traerProductosJson = (async) => {
    let response = await fetch ("./json/archivoProducts.json");
    let data = await response.json ();
    console.log (response);
    console.log(data);
}


