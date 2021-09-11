let areaTriangulo = () => {
  let ladosA = document.getElementById("ladosATriangulo");
  let ladosB = document.getElementById("ladoBTriangulo");
  let ladosAValue = ladosA.value;
  let ladosBValue = ladosB.value;

  if (ladosAValue === ladosBValue) {
    alert(`Este no es un triangulo isosceles`);
  } else {
    let area = Math.sqrt(
      Math.pow(ladosAValue, 2) - Math.pow(ladosBValue, 2) / 4
    );
    alert(`Area = ${Math.round(area)}`);
  }
};
