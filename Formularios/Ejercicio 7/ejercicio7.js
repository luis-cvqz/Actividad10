function convertir() {
  let gradosC = parseFloat(document.getElementById("entrada").value)
  let gradosF = (gradosC * 1.8) + 32

  document.getElementById("resultado").innerHTML = `Conversión a Fahrenheit: ${gradosF}`
}
