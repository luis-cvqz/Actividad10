let edad, final

edad = prompt("Edad: ", "0")

if (isNaN(edad))
  final = "Error. No es un número"
else
  final = (edad < 18) ? "Demasiado joven" : "Mayor de edad"

document.writeln(final)
