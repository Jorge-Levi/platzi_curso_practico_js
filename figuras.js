// Cuadrado
const lado = 5;
let area = lado * lado;
let perimetro = lado * 4;

console.group("Cuadrado");
console.log(`Area = ${area}cm2`);
console.log(`Perimetro = ${perimetro}`);
console.groupEnd();

// Triangulo
let [base,altura,ladoTriangulo] = [10,5,6];
let areaCuadrado = base * altura;
let perimetroTriangulo = base + (ladoTriangulo * 2);
console.group("Triangulo");
console.log(`Area = ${areaCuadrado}cm2`);
console.log(`Perimetro = ${perimetroTriangulo}`);
console.groupEnd();

// Circulo
let radio = 5;
let areaCirculo = Math.PI * Math.pow(radio,2);
let perimetroCirculo = 2 * Math.PI * radio;
let circunferencia = 2*Math.PI*radio
console.group("Circulo");
console.log(`Area = ${areaCirculo}cm2`);
console.log(`Perimetro = ${perimetroCirculo}`);
console.log(`Circunferencia ${circunferencia}`);
console.groupEnd();