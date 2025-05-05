function calcular() {
  let numero = parseFloat(document.getElementById("numero").value)
  let resultado = document.getElementById("resultado")

  if (isNaN(numero)) {
    resultado.innerHTML = "Por favor, ingrese un número válido"
  } else {
    let cuadrado = numero * numero
    let cubo = numero * numero * numero
    resultado.innerHTML = `El cuadrado de ${numero} es: ${cuadrado}<br>El cubo de ${numero} es: ${cubo}`
  }
}
