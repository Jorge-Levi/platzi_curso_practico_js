let calcularPrecio = (precioInicial,descuento) => (precioInicial * (100 - descuento)) / 100;

let precioInicial = 100;
let descuento = 50;

let precioFinal = calcularPrecio(precioInicial,descuento);

console.log(`${precioFinal}`);