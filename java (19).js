const texto = prompt("Escribe un texto: ");
const firstChar = texto.charAt(0);
const esLetra = isNaN(Number(firstChar));
console.log(esLetra ? 
    "El primer caracter es una letra " 
    :
     "El primer caracter es un numero")