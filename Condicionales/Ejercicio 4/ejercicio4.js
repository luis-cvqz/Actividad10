let dato1, dato2, num1, num2

dato1 = window.prompt("Ingrese el primer número", "0")
num1 = parseInt(dato1)

dato2 = window.prompt("Ingrese el segundo número", "0")
num2 = parseInt(dato2)

if (num1 > num2) {
  document.writeln(`El mayor es el primer número: ${num1} `)
} else {
  if (num2 > num1)
    document.writeln(`El mayor es el segundo número: ${num2} `)
  else
    document.writeln(`Los números son iguales `)
}
