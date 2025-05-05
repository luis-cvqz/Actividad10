function calcularPorcentaje() {
  let numero = document.fnumero.entrada.value
  numero = parseInt(numero)

  if (isNaN(numero)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingrese un número válido."
    return
  }

  document.getElementById("resultado").innerHTML = `El 10% de ${numero} es: ${numero * .10}`
}
