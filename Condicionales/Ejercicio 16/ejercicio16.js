let dia, mes, año

do {
  mes = prompt("Introduzca el número del mes:", "")
  mes = parseInt(mes)
} while (isNaN(mes) || mes < 1 || mes > 12)

if (
  mes === 1 ||
  mes === 3 ||
  mes === 5 ||
  mes === 7 ||
  mes === 8 ||
  mes === 10 ||
  mes === 12
)
  document.writeln("Este mes tiene 31 dias.")
else if (mes === 2)
  document.writeln("Este mes puede tener 29 dias.")
else
  document.writeln("Este mes tiene 30 dias.")
