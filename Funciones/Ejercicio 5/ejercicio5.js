let multiplicacion = function(x, y) {
  return x * y
}

let exponente = function(x, y) {
  return Math.pow(x, y)
}

let suma = (x, y) => {
  return x + y
}

var result = multiplicacion(5, 2)
alert(`Multiplicación: ${result}`)

result = suma(3, 4)
alert(`Suma: ${result}`)

result = exponente(2, 4)
alert(`Exponente: ${result}`)
