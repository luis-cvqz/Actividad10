let num = 1, dato

while (num < 10) {
  dato = prompt("Introduce un número menor que 10:", "")
  num = parseInt(dato)

  document.writeln(`${num} <br>`)
}
