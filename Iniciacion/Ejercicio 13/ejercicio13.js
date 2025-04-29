var contador
contador = 1

while (contador < 5) {
  let dato = prompt('Introduce un número del 1 al 10:', '')
  var num = parseInt(dato)

  document.writeln(` El numero introducido es ${num} <br/>`)
  document.writeln(` El contador es ${contador} <br/>`)

  contador = contador + 1
}

document.writeln(`
  <br/><h2>
    Fin del programa
    contador ya NO es menor que 5
  </h2>
  `)

document.writeln(`<br/> Último número introducido es ${num}`)