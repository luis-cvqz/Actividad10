let num1, num2, resultado
num1 = window.prompt("Introduce el primer número ?", "0")
num2 = window.prompt("Introduce el segundo número ?", "0")
resultado = parseInt(num1) - parseInt(num2)

document.writeln(`La resta de ${num1} - ${num2} es ${resultado}`)