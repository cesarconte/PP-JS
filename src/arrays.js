// ARRAYS ###

// array de 10 números =====>

let arrayOfNumbers = [43, 17, 29, 8, 36, 21, 49, 14, 5, 31];

let arrayElement = document.getElementById("array1");

// Mostrar el array en pantalla
arrayElement.textContent = arrayOfNumbers;

// 1- Función que muestra en consola todos los elementos del array 'numbers' usando un 'for...' loop =====>

function printNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printNumbers(arrayOfNumbers);

// 2- Función que añade un número al array 'arrayOfNumbers' =====>

function addNumberToArray(number) {
  arrayOfNumbers.push(number);
  document.getElementById("resultado7").textContent = "Array: " + arrayOfNumbers.join(", ");
}

addNumberToArray(42);
console.log(arrayOfNumbers);

// 3- Función que elimina los números pares del array 'numbers' =====>

function removeEvenNumbers() {
  const oddNumbers = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 !== 0) {
      oddNumbers.push(arrayOfNumbers[i]);
    }
  }

  arrayOfNumbers = oddNumbers;
  const resultElement = document.getElementById("resultado8");
  resultElement.innerHTML = "Array: " + arrayOfNumbers.join(", ");
  console.log(arrayOfNumbers);
}

removeEvenNumbers();

// 4- Función que devuelva el número mayor del array 'arrayOfNumbers' =====>

// 4.1 Usando el método 'Math.max':

const getMaxNumber1 = () => {
  const maxNumber = Math.max(...arrayOfNumbers);
  const resultElement = document.getElementById("resultado9");
  resultElement.innerHTML = "El número mayor es: " + maxNumber;
};

getMaxNumber1();


// 4.1 Usando un 'for...' loop:

const getMaxNumberFor = () => {
  let max = arrayOfNumbers[0];

  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
      max = arrayOfNumbers[i];
    }
  }

  console.log("El número mayor es:", max);
};

console.log(getMaxNumberFor());

// 4.2 Utilizando un bucle 'for...of':

const getMaxNumberForOf = () => {
  let max = arrayOfNumbers[0];

  for (const number of arrayOfNumbers) {
    if (number > max) {
      max = number;
    }
  }

  console.log("El número mayor es:", max);
};

console.log(getMaxNumberForOf());


// 4.3 Utilizando el método 'reduce' y 'Math.max':

function getMaxNumberReduce() {
  return arrayOfNumbers.reduce((max, current) => Math.max(max, current));
}

console.log(getMaxNumberReduce());


// 4.4 Utilizando el método sort:

const getMaxNumberSort = () => {
  const sortedNumbers = arrayOfNumbers.sort((a, b) => b - a);
  return sortedNumbers[0];
};

console.log(getMaxNumberSort());


// 4.5 Utilizando el método 'Math.max' y el spread operator ('...'):

const getMaxNumberMathMax = () => {
  return Math.max(...arrayOfNumbers);
};

console.log(getMaxNumberMathMax());


// 5- Función que devuelva el número menor de un array =====>

// 5.1 Utilizando el método 'Math.min':

const getMinNumber1 = () => {
  const minNumber = Math.min(...arrayOfNumbers);
  const resultElement = document.getElementById("resultado10");
  resultElement.textContent = "El número menor es: " + minNumber;
  console.log("El número menor es:", minNumber);
};

getMinNumber1();


// 5.2 Utilizando un bucle `for...of`:

const getMinNumber2 = () => {
  let min = arrayOfNumbers[0];
  for (const number of arrayOfNumbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
};

console.log(getMinNumber2());

// 5.3 Utilizando el método `reduce`:

const getMinNumber3 = () => {
  return arrayOfNumbers.reduce((min, current) => (current < min ? current : min), arrayOfNumbers[0]);
};

console.log(getMinNumber3());

// 5.4 Utilizando un 'for' loop:

const getMinNumber4 = () => {
  let min = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < min) {
      min = arrayOfNumbers[i];
    }
  }
  return min;
};

console.log(getMinNumber4());

// 6- Crear un función que convierta en minúsculas todas las letras de un texto. =====>

let textToLowercase = 'Función QUE conVIERte en MINÚSculas tOdAs LAs letras de éste TeXtO';

// 6.1 Utilizando el método 'toLowerCase()':

const convertToLowerCase = (text) => {
  const lowerCaseText = text.toLowerCase();
  console.log(lowerCaseText);
  document.getElementById("resultado11").textContent = lowerCaseText;
};

// Ejemplo de uso
convertToLowerCase(textToLowercase);


// 6.2 Utilizando el operador de desestructuración y el método 'map()':

const convertToLowerCase2 = (text) => {
  return [...text].map((char) => char.toLowerCase()).join('');
};

console.log(convertToLowerCase2(textToLowercase));

// 6.3 Utilizando un bucle 'for...of' y el método 'toLocaleLowerCase()':

const convertToLowerCase3 = (text) => {
  let result = '';
  for (const char of text) {
    result += char.toLocaleLowerCase();
  }
  return result;
};

console.log(convertToLowerCase3(textToLowercase));

// 7- Función que convierte en mayúsculas todas las letras de un texto. =====>

// Usando el método 'toUpperCase()':

const convertToUpperCase = (text) => {
  const upperCaseText = text.toUpperCase();
  console.log(upperCaseText);
  document.getElementById("resultado12").innerHTML = upperCaseText;
};

// Ejemplo de uso
convertToUpperCase(textToLowercase);

// 8- Función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula. =====>

let names = ['alberto', 'carlos', 'david', 'fernando', 'gustavo', 'luis'];

// 8.1 Sin crear un nuevo array, y usando un 'for' loop.

const capitalizeFirstLetterInPlace1 = (names) => {
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
  }
};

capitalizeFirstLetterInPlace1(names);
console.log(names);

const resultElement = document.getElementById("resultado13");
resultElement.innerHTML = names.join(", ");


// 8.2 Sin crear un nuevo array, y usando un 'for...of' loop.

const capitalizeFirstLetterInPlace2 = (names) => {
  for (let name of names) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
};

capitalizeFirstLetterInPlace2(names);
console.log(names);

// 8.3 Creando un nuevo array, usando el método 'map()' y el método 'charAt()':

const capitalizeFirstLetter1 = (names) => {
  return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
};

console.log(capitalizeFirstLetterInPlace1(names));

//8.4 Creando un nuevo array, usando el método 'map()' y el método 'replace()':

const capitalizeFirstLetter2 = (names) => {
  return names.map((name) => name.replace(/^\w/, (char) => char.toUpperCase()));
};

console.log(capitalizeFirstLetter2(names));

// 8.5 Creando un nuevo array, y usando el bucle 'for...of' y el método 'slice()':

const capitalizeFirstLetter3 = (names) => {
  const capitalizedNames = [];
  for (const name of names) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    capitalizedNames.push(capitalizedName);
  }
  return capitalizedNames;
};

console.log(capitalizeFirstLetter3(names));