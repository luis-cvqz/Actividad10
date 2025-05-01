let edadIngresada, edad, mensaje = ""

edadIngresada = prompt("Edad:", "0")
edad = parseInt(edadIngresada)

if (edad < 1 || edad > 120)
  alert("Ingrese una edad válida")
else
  if (edad > 18)
    mensaje = "Si tiene permiso de acceso"
  else
    mensaje = "No tiene permiso de acceso"

document.writeln(`<h3>${mensaje}</h3>`)
