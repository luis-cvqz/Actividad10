function calcularNota() {
  // Obtener valores
  let nota1 = parseFloat(document.getElementById("nota1").value)
  let porcentaje1 = parseFloat(document.getElementById("porcentaje1").value)
  let nota2 = parseFloat(document.getElementById("nota2").value)
  let porcentaje2 = parseFloat(document.getElementById("porcentaje2").value)

  let resultadoDiv = document.getElementById("resultado")
  let errorDiv = document.getElementById("error")

  // Limpiar mensajes previos
  resultadoDiv.innerHTML = ""
  errorDiv.innerHTML = ""

  // Validaciones
  if (isNaN(nota1) || isNaN(nota2) || isNaN(porcentaje1) || isNaN(porcentaje2)) {
    errorDiv.innerHTML = "Por favor, completa todos los campos."
    return
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    errorDiv.innerHTML = "Las notas deben estar entre 0 y 10."
    return
  }

  if (porcentaje1 < 0 || porcentaje2 < 0 || porcentaje1 > 100 || porcentaje2 > 100) {
    errorDiv.innerHTML = "Los porcentajes deben estar entre 0 y 100."
    return
  }

  if (porcentaje1 + porcentaje2 !== 100) {
    errorDiv.innerHTML = "La suma de los porcentajes debe ser 100%."
    return
  }

  // Calcular nota media ponderada
  let notaPonderada = (nota1 * porcentaje1) / 100 + (nota2 * porcentaje2) / 100
  resultadoDiv.innerHTML = `Nota Media Ponderada: ${notaPonderada.toFixed(2)}`
}
