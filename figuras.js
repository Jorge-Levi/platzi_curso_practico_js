// Cuadrado
let areaCuadrado = (lado) => lado * lado;
let perimetroCuadrado = (lado) => lado * 4;

console.group("Cuadrado");
console.log(`Area = ${areaCuadrado(5)}cm2`);
console.log(`Perimetro = ${perimetroCuadrado(5)}cm`);
console.groupEnd();

// Triangulo
let areaTriangulo = (base,altura) => (base*altura)/2;
let perimetroTriangulo = (base,lados) => base + (lados * 2);

console.group("Triangulo");
console.log(`Area = ${areaTriangulo(10,15)}cm2`);
console.log(`Perimetro = ${perimetroTriangulo(10,12)}cm`);
console.groupEnd();

// Circulo
let areaCirculo = (radio) => Math.PI * Math.pow(radio,2);
let perimetroCirculo = (radio) => 2 * Math.PI * radio;
let circunferencia = (radio) => 2 * Math.PI * radio;

console.group("Circulo");
console.log(`Area = ${areaCirculo(2)}cm2`);
console.log(`Perimetro = ${perimetroCirculo(2)}`);
console.log(`Circunferencia ${circunferencia(2)}`);
console.groupEnd();
