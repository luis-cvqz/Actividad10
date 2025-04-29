let num1, num2
num1 = window.prompt("Introduce el primer número ?", "0")
num2 = window.prompt("Introduce el segundo número ?", "0")
let resta = parseInt(num1) - parseInt(num2)
let multiplicacion = parseInt(num1) * parseInt(num2)

document.writeln(`La resta de ${num1} - ${num2} es ${resta}`)
document.writeln("<br>")
document.writeln(`La mutliplicación de ${num1} * ${num2} es ${multiplicacion}`)