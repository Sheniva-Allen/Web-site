let formulario = document.getElementById('formulario');
let importeInput = document.getElementById('importe');
let porcentajeInput = document.getElementById('porcentaje');
let calcularButton = document.getElementById('calcular');
let resultadoP = document.getElementById('resultado');

calcularButton.addEventListener('click', calcularPropina);

function calcularPropina(event) {
    event.preventDefault();
    let importe = parseFloat(importeInput.value);
    let porcentaje = parseFloat(porcentajeInput.value);
    let propina = importe * (porcentaje / 100);
    resultadoP.textContent = `La propina es: $${propina.toFixed(2)}`;
}