let num1, num2

do {
  num1 = prompt("Ingresa el primer número:", "0")
  num1 = parseInt(num1)
} while(isNaN(num1))

do {
  num2 = prompt("Ingresa el segundo número:", "0")
  num2 = parseInt(num2)
} while(isNaN(num2))

function suma(n1, n2) {
  return n1 + n2
}

document.getElementById("salida").innerHTML = suma(num1, num2)
