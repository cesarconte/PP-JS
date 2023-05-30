// VARIABLES ###

// Números =====>

let number1 = 3.1416;
let number2 = 47;
let number3 = 31;
let number4 = 11;
let number5 = 7;

// Imprimir valor number1 (consola)

console.log(`Valor de  la variable "number1": ${number1}`);

// Imprimir valor number2 (pantalla: 'alert')

alert(`Valor de la variable "number2": ${number2}`);

// Imprimir variables en pantalla

document.getElementById("numbers").innerHTML = "- Esta es una variable de número: let number3 = " + number3;

// Cadenas de Texto / Strings =====>

let string1 = "¡Hola a tod@s!";
let string2 = "¡Bienvenidos a este taller!";
let string3 = "Mi nombre es ";
let string4 = "César, ";
let string5 = "y estoy intentando no pelearme mucho con JavaScript";

// Imprimir valor string1 (consola)

console.log(`Valor de la variable "string1": ${string1}`);

// Imprimir valor string2 (pantalla)

document.getElementById("string1").innerHTML = `- Esta es una variable de tipo string: let string 2 = "${string2}"`;

// Booleans =====>

let boolean1 = true;
let boolean2 = false;
let boolean3 = true;
let boolean4 = false;
let boolean5 = true;

// Imprimir valor boolean1 (consola)

console.log(boolean1);

// Imprimir valor boolean2 (pantalla)

document.getElementById("boolean1").innerHTML = `Hola, ¿te llamas Carlos?<br>No, eso es ${boolean2}`;

// Identificar Variables Tipo Números Enteros & Operaciones Aritméticas =====>

console.log("¿Qué tipo de variable es 'number1'? Es una variable de tipo " + typeof number1);

// Imprimir valor suma number2 + number3 (consola)

console.log(`La suma de ${number2} y ${number3} es: ` + (number2 + number3));

// Imprimir valor multiplicar number4 x number5 (pantalla)

document.getElementById("multiplication").innerHTML = `- El valor de multiplicar ${number4} y ${number5} es: ` + (number4 * number5);

// Imprimir valor restar number2 - number3 (consola)

console.log(`La resta de ${number2} y ${number3} es igual a: ` + (number2 - number3));

// Imprimir valor dividir number4 / number5 (pantalla)

document.getElementById('division').innerHTML = `- El valor de dividir ${number4} entre ${number5} es igual a: ` + (number4 / number5);

// Imprimir el valor redondeado de dividir number4 / number5 (pantalla)

document.getElementById('floorDivision').innerHTML = `- El valor redondeado de dividir ${number4} entre ${number5} es igual a: ` + Math.floor(number4 / number5);


// identificar Variables Tipo Texto: Concatenar =====>

// Concatenar las variables
let concatenar = "- " + string1 + " " + string2 + " " + string3 + string4 + string5;

// Mostrar el resultado en consola
console.log(concatenar);

// Mostrar el resultado en pantalla
document.getElementById("concatenarStrings").innerHTML = concatenar;

