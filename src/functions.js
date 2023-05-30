// FUNCIONES ###

// Función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre. =====>

function great(name) {
  let message = "- Hola, " + name;

  // Print in cosole
  console.log(message);

  // Print in browser

  let browserScreen = document.getElementById("hello");
  browserScreen.innerHTML = message;
};

great("Martín");

// Función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberá imprimir el resultado por la pantalla del navegador y la consola. =====>

function sumAndPrint(num1, num2) {
  const sum = num1 + num2;
  const resultText = `- La suma de sumar los números: ${num1} y ${num2} es ${sum}`;

  // Mostrar el resultado en la pantalla del navegador
  document.getElementById("resultado").textContent = resultText;

  // Mostrar el resultado en la consola
  console.log(resultText);
}

// Ejemplo de uso
sumAndPrint(5, 3); // Llamada a la función con los números 5 y 3



// Función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola. =====>

function checkParity(number) {
  if (number % 2 === 0) {
    // El número es par
    console.log(`${number} es un número par`);
    document.getElementById("resultado2").textContent = `- ${number} es un número par`;
  } else {
    // El número es impar
    console.log(`${number} es un número impar`);
    document.getElementById("resultado2").textContent = `- ${number} es un número impar`;
  }
}

// Ejemplo de uso
checkParity(7); // Llamada a la función con el número 7


