function convertir() {
  let gradosF = parseFloat(document.getElementById("entrada").value)
  let gradosC = (gradosF - 32) * 5/9

  document.getElementById("resultado").innerHTML = `Conversión a Celsius: ${gradosC}`
}
