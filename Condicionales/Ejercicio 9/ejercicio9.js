let gradoIngresado, grado, edadIngresada, edad

gradoIngresado = prompt("Grado de formación:", "0");
grado = gradoIngresado.toLowerCase();

edadIngresada = prompt("Edad:", "0");
edad = parseInt(edadIngresada);

if (grado == "fp" || grado == "formación profesional")
  if (edad > 18)
    document.writeln("<h2>Bienvenid@</h2>");
  else
    document.writeln("<h2>No tiene acceso al portal.</h2>");
