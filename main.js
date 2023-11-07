// Сумма элементов массива: Напишите функцию, которая находит сумму всех элементов в числовом массиве.
const arr = [11, 54, 214, 22, 369, 57, 3];

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArr(arr));
//Нахождение максимального элемента: Напишите функцию, которая находит максимальное число в числовом массиве.
function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0]; //предположим, что первый элемент максимальный
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      // Если текущий элемент больше максимального, обновляем максимальное значение.
      max = arr[i];
    }
  }
  return max;
}
const maxNumber = findMax(arr);
console.log(maxNumber);
//Подсчет четных чисел: Напишите функцию, которая подсчитывает количество четных чисел в массиве.
function evenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += 1;
    }
  }
  return sum;
}
console.log(evenNumbers(arr));
//Переворот строки: Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.

function overturn(arr) {
  const arrReversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
  }
  return arrReversed.join(" ");
}

const str = "Hello Liran a great girl !";
const arrStr = str.split(" ");
console.log(arrStr);
const reversedStr = overturn(arrStr);
console.log(reversedStr);
// Фильтрация массива: Напишите функцию, которая удаляет все отрицательные числа из массива и возвращает новый массив.
const arrBig = [-56, 55, -57, 63, 99, 478, -74, -22, 5];
function arrFilter(arr) {
  let arrSmall = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrSmall.push(arr[i]);
    }
  }
  return arrSmall;
}
const resFilter = arrFilter(arrBig);
console.log(resFilter);
//***через метод filter
const arrSmall = arrBig.filter(function (num) {
  return num > 0;
});

console.log(arrSmall);

// Поиск элемента в массиве: Напишите функцию, которая проверяет, содержится ли определенный элемент в массиве.
const arr3 = [12, 55, 47, 896, 32, 114, 2];
function searchNum(arr, num) {
  let found = false; // Флаг для отслеживания нахождения элемента
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      found = true; // Устанавливаем флаг в true, если элемент найден
      break; // Прерываем цикл, так как элемент уже найден
    }
  }
  if (found) {
    console.log(`Массив содержит ${num}`);
  } else {
    console.log(`Массив не содержит ${num}`);
  }
}

searchNum(arr3, 325);
//****эта же задача по-другому */
const arr31 = [12, 55, 47, 896, 32, 114, 2];

function searchNum(arr, num) {
  if (arr.includes(num)) {
    console.log(`Массив содержит ${num}`);
  } else {
    console.log(`Массив не содержит ${num}`);
  }
}

searchNum(arr31, 32);

// Генерация таблицы умножения: Напишите программу, которая создает таблицу умножения от 1 до 10 и выводит ее в консоль.

function multiTable() {
  for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
      console.log(`${i}*${k}=${i * k}`);
    }
  }
}
multiTable();

// Сортировка массива: Напишите функцию, которая сортирует числовой массив в порядке возрастания.

const arr44 = [5, 66, 51, 23, 774, 4, 212, 3, 12, 14, 1];
function ord(arr) {
  console.log(arr.sort((a, b) => a - b));
}
ord(arr44);
// Поиск дубликатов: Напишите функцию, которая находит все дубликаты в массиве и возвращает их в новом массиве.
const arrDouble = [11, 12, 45, 65, 65, 11, 85, 34, 34, 27, 99, 45, 12];
const arrUnique = new Set(arrDouble);
console.log(arrUnique);
//******or */
function findDuplicate(arr) {
  const duplicate = [];
  //   const count = {}; //Мы используем объект count, чтобы подсчитывать, сколько раз каждый элемент встречается в массиве, и затем добавляем элементы, у которых счетчик больше 1, в массив duplicates.
  for (let item of arr) {
    if ((item, index)) {
      item[index];
    }
  }
}
//***************************Anzor ************/
//Задача 1: Проверка на положительное, отрицательное или ноль

// Описание: Напишите функцию checkNumberType, которая принимает число и возвращает сообщение о том, является ли оно положительным, отрицательным или нулём.
function checkNumberType(num) {
  if (num > 0) {
    console.log(`${num} is positive number`);
  } else if (num < 0) {
    console.log(`${num} is negative number`);
  } else {
    console.log(`${num} is null!`);
  }
}
checkNumberType(0);

// Пример ввода:
// const number = -5;
// Пример вывода:
// 'Отрицательное число'

// Задача 2: Поиск максимального элемента в массиве

// Описание: Напишите функцию findMax, которая принимает массив чисел и возвращает максимальное значение.

function findMax(arr) {
  let maxNumber = 0;
  for (const item of arr) {
    if (item > maxNumber) {
      maxNumber = item;
    }
  }
  return maxNumber;
}
const numbers = [10, 5, 8, 20, 15];
console.log(findMax(numbers));
// Пример ввода:
// Пример вывода:
// 20

// Задача 3: Калькулятор

function calcFn(num1, num2, operation) {
  let res = 0;
  if (operation === "+") {
    res = num1 + num2;
  }
  if (operation === "-") {
    res = num1 - num2;
  }
  if (operation === "*") {
    res = num1 * num2;
  }
  if (operation === "/") {
    res = num1 / num2;
  }
  return res;
}
console.log(calcFn(10, 52, "+"));

//*******через switch */
function calcFn2(num1, num2, operation) {
  let res = 0;
  switch (operation) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      console.log("Try again!");
  }
  return res;
}
console.log(calcFn2(11, 47, "*"));

// Описание: Создайте калькулятор, который запрашивает два числа и операцию (+, -, *, /) у пользователя, а затем выводит результат.
// Пример ввода:
// const num1 = 10;
// const num2 = 5;
// const operation = '+'; // ввод пользователя
// Пример вывода:
// 'Результат: 15'

// Задача 4: Найти среднее значение

// Описание: Напишите функцию, которая принимает массив чисел и возвращает среднее значение (среднюю арифметическую).
// const numbers = [10, 5, 8, 20, 15];
// Ожидаемый результат: 11.6
const arr55 = [12, 21, 22, 23, 56, 54, 74, 584];
function findAverage(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  let average = sum / arr.length;
  return average;
}
console.log(findAverage(arr55));
// Задача 5: Калькулятор оценок

// Описание: Напишите функцию, которая принимает оценку студента и возвращает его оценку. Используйте стандартную шкалу оценок (A, B, C, D, F).
const studentScore = 95;
// Ожидаемый результат: 'A'
function studentGrade(score) {
  let grade;
  switch (true) {
    case score < 20:
      grade = "F";
      break;
    case score < 40 && score > 20:
      grade = "D";
      break;
    case score < 60 && score > 40:
      grade = "C";
      break;
    case score < 80 && score > 60:
      grade = "B";
      break;
    case score < 100 && score > 80:
      grade = "A";
      break;
    default:
      grade = "Invalid score";
  }
  return grade;
}
console.log(studentGrade(studentScore));
//*******по-другому */
function studentGrade2(score) {
  if (score <= 20) {
    return "F";
  } else if (score <= 40 && score > 20) {
    return "D";
  } else if (score <= 60 && score > 40) {
    return "C";
  } else if (score <= 80 && score > 60) {
    return "B";
  } else if (score <= 100 && score > 80) {
    return "A";
  } else {
    return "Invalid score";
  }
}
console.log(studentGrade2(studentScore));
// Задача 6: Сумма четных чисел

// Описание: Напишите программу, которая находит сумму всех четных чисел в массиве.
// const numbers = [1, 2, 3, 4, 5, 6];
// Ожидаемый результат: 12 (2 + 4 + 6)

const arr414 = [10, 26, 34, 47, 53, 62];
function findSum(arr) {
  let sum = 0;
  for (item of arr) {
    if (item % 2 === 0) {
      sum += item;
    }
  }
  return sum;
}
console.log(findSum(arr414));
//****************************** */
// Задача6: Фильтрация чисел

// Напишите функцию, которая фильтрует массив чисел, оставляя только четные числа.
const arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findEven(arr) {
  let evenArr = [];
  for (let item of arr) {
    if (item % 2 === 0) {
      evenArr.push(item);
    }
  }
  return evenArr;
}
console.log(findEven(arr18));
// Вход: [1, 2, 3, 4, 5, 6]
// Выход: [2, 4, 6]

// Задача7: Проверка на палиндром

// Напишите функцию, которая проверяет, является ли строка палиндромом.
function isPalindrom(str) {
  const arr = str.split("");
  const reversArr = [...arr].reverse();
  const originStr = arr.join("");
  const reversStr = reversArr.join("");
  if (originStr === reversStr) {
    console.log("This string is a palindrome");
  } else {
    console.log("This string isn't a palindrome");
  }
}

isPalindrom("arosa asora");
// Вход: "топот"
// Выход: true

// Задача8: Уникальные элементы

// Определите функцию, которая возвращает массив уникальных элементов.
const arrOrigin = [1, 2, 2, 3, 4, 4, 5];
function findUniqueNumbers(arr) {
  let numUnique = new Set(arr);
  let arrUnique = Array.from(numUnique);
  return arrUnique;
}
console.log(findUniqueNumbers(arrOrigin));
// Вход: [1, 2, 2, 3, 4, 4, 5]
// Выход: [1, 2, 3, 4, 5]

// Задача9: Обратная строка

// Напишите функцию, которая переворачивает строку задом наперед.
function reversStr(str) {
  const arr = str.split("");
  const reversArr = [...arr].reverse();
  const newStr = reversArr.join("");
  return newStr;
}
console.log(reversStr("Привет"));
// Вход: "Привет"
// Выход: "тевирП"

// Задача 10: Слияние двух массивов

// Напишите функцию, которая объединяет два массива в один.
function addArrs(arr1, arr2) {
  let fullArr = [].concat(arr1, arr2);
  return fullArr;
}
const arr2525 = [1, 2, 3];
const arr2626 = [4, 5, 6];
console.log(addArrs(arr2525, arr2626));
// Вход: [1, 2, 3], [4, 5, 6]
// Выход: [1, 2, 3, 4, 5, 6]
