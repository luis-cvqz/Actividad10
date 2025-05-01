let origen = prompt("Introduce la ciudad de origen:");
let destino = prompt("Introduce la ciudad de destino:");

let descuento = 0;

if (origen === "Palma") {
  if (destino === "Barcelona") {
    descuento = 5;
  } else if (destino === "Madrid") {
    descuento = 10;
  } else if (destino === "Valencia") {
    descuento = 15;
  }
}

document.writeln(`<h2>El descuento es de ${descuento}%</h2>`);
