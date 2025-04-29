var introducido

while (introducido != 7) {
  introducido = prompt('Introduce un número:', '')

  document.writeln(` El numero introducido es ${introducido} <br/>`)
}

document.writeln(`<br/> Fin del programa, se introdujo el numero ${introducido}`)