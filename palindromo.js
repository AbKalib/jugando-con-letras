// Pedimos al usuario que ingrese una cadena
const palabra = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");

// Eliminamos los espacios en blanco y convertimos la cadena a minúsculas
const cadena = palabra.toLowerCase().replace(/\s/g, '');

// Invertimos la cadena
let inversa = '';
for (let i = cadena.length - 1; i >= 0; i--) {
  inversa += cadena[i];
}

// Verificamos si la cadena original y la cadena invertida son iguales
if (cadena === inversa) {
  console.log(`"${palabra}" es un palíndromo.`);
} else {
  console.log(`"${palabra}" no es un palíndromo.`);
}
