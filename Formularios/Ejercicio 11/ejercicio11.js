function calcular() {
  let altura = parseFloat(document.getElementById("altura").value)
  let edad = parseFloat(document.getElementById("edad").value)
  let sexo = document.getElementById("sexo").value
  let peso = parseFloat(document.getElementById("peso").value)

  let pesoReferencia = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
  if (sexo === "M") {
    pesoReferencia *= 0.9;
  }

  document.getElementById("resultado").innerHTML =
    `Peso de referencia aproximado: <strong>${pesoReferencia.toFixed(1)} kg</strong>`;
}
