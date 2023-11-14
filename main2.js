"use strict";
//Reduce для строк:

// Задача 1): Используйте функцию reduce, чтобы объединить строки в одну строку.
// Входные строки: ["Hello", " ", "World", "!"]
// Ожидаемая конкатенация: "Hello" + " " + "World" + "!" = "Hello World!"

const str = ["Hello", " ", "World", "!"];
const strFull = str.reduce((sum, item) => sum + item);
console.log(strFull);

// Filter и Map:

// Задача2: Используйте filter, чтобы выбрать только четные числа из массива, затем используйте map, чтобы умножить каждое из них на 3.
// Входные числа: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Ожидаемый результат: [6, 12, 18, 24, 30]

const arrFull = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSmall = arrFull.filter((item) => item % 2 === 0).map((i) => i * 3);
console.log(arrSmall);

// Задача3
// Task: Работа с массивами

// Step 1: Создайте массив строк.
const newArr = new Array("apple", "banana", "orange", "kiwi");
console.log(newArr);

// Input: ["apple", "banana", "orange", "kiwi"]

// Step 2: Объедините все строки в одну строку, разделенную запятыми.
const strAr = newArr.join(", ");
console.log(strAr);

// Input: ["apple", "banana", "orange", "kiwi"]
// Output will be string: "apple, banana, orange, kiwi"

// Step 3: Преобразуйте каждую строку в верхний регистр.(use map and toUpperCase)
const upStr = newArr.map((i) => i.toUpperCase());
console.log(upStr);
// Input: ["apple", "banana", "orange", "kiwi"]
// Output: ["APPLE", "BANANA", "ORANGE", "KIWI"]

// Step 4: Выберите только те строки, которые начинаются с "A"(use filter).
const arrA = newArr.filter((i) => i[0] === "a");
//***или так */
function isA(arr) {
  const arrLower = arr.map((i) => i.toLowerCase());
  return arrLower.filter((i) => i[0] === "a");
}
console.log(isA(newArr));
// Input: ["apple", "banana", "orange", "kiwi"]
// Output: ["apple"]

// Задача 4

// Task: Обработка событий и стили:

// Step 1: Создайте кнопку (HTML) с текстом "Click me!".

// Input: Button with text "Click me!"
// Step 2: Добавьте обработчик события, который меняет цвет кнопки на случайный при каждом клике.
const btnClickMe = document.querySelector(".btn_clickme");
btnClickMe.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  btnClickMe.style.backgroundColor = randomColor;
  btnClickMe.style.color = "#fff";
  btnClickMe.style.fontWeight = 700;
  btnClickMe.style.letterSpacing = " 4px";
  btnClickMe.innerHTML = "Try again!!!";
});
// Задача 13
// Обработка событий и изменение текста:
// Задача: Создайте кнопку и напишите функцию, которая при клике на кнопке изменяет текст кнопки.
// Input: Кнопка с текстом (например, <button>Click me</button>).

// Input: Button with text "Click me!"
// Output: Button changes color on each click.
// (to generate random color use the code:
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

// Задача 5

// Task: Функции и массивы:

// Step 1: Создайте функцию, которая возвращает массив положительных чисел.
const arrBig = [1, -2, 3, -4, 5];
function findPositiveNumbers(arr) {
  let arrPos = [];
  for (let item of arr) {
    if (item > 0) {
      arrPos.push(item);
    }
  }
  return arrPos;
}
console.log(findPositiveNumbers(arrBig));
// Input: [1, -2, 3, -4, 5]
// Output: [1, 3, 5]

// Задача 6

// Работа с функциями и строками:
// Задача: Напишите функцию, которая принимает строку и возвращает ее обратно, но каждое слово начинается с большой буквы.
// Input: "hello world"
// Output: "Hello World"
function getUpp(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    //тут неправильно, но как смогла
    arr.map((i) => i[0].toLocaleUpperCase());
  }
  return arr.join(", ");
}
getUpp("hello world");
// Задача 7

// Работа с объектами и условиями:
// Задача: Создайте объект, представляющий продукт (название, цена). Напишите функцию, которая выводит информацию о продукте и добавляет к цене НДС (20%).
function findVAT(obj) {
  let objFull = { ...obj };
  let vat = objFull.price * 1.2;
  objFull.priceVat = vat;
  console.log(
    `Product: ${objFull.name}, Price: $${objFull.price}, Price with VAT: $${objFull.priceVat}`
  );
}

const obj1 = { name: "Laptop", price: 1000 };
findVAT(obj1);
// Input: { name: 'Laptop', price: 1000 }
// Output: "Product: Laptop, Price: $1000, Price with VAT: $1200"

// Задача 8
// Работа с числами и математикой:
// Задача: Напишите функцию, которая принимает число и возвращает его факториал.
function factorial(number) {
  let calc = 1;
  for (let i = 1; i <= number; i++) {
    calc = calc * i;
  }
  return calc;
}
console.log(factorial(5));
// Input: 5
// Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

// Задача 9

// Работа с массивами и сортировкой:
// Задача: Напишите функцию, которая сортирует массив строк в порядке убывания длины строк.
// Input: ["apple", "banana", "kiwi", "orange"]
// Output: ["banana", "orange", "apple", "kiwi"]
function findLonger(arr) {
  let arrLonger = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      arrLonger.push(arr[i]);
    }
  } //не получилось
  return arrLonger;
}
const arr1212 = ["apple", "banana", "kiwi", "orange"];
console.log(findLonger(arr1212));
// Задача 10
// Работа с массивами и поиском:
// Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму всех чисел, которые делятся на 3 или 5.
function getThree(arr) {
  let arrThree = [];
  let arrSum = 0;
  for (let item = 0; item <= arr.length; item++) {
    if (item % 3 === 0 || item % 5 === 0) {
      arrThree.push(item);
    }
  }
  console.log(arrThree);
  arrSum = arrThree.reduce((sum, i) => sum + i, 0);
  return arrSum;
}
const arr101 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getThree(arr101));

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 33 (сумма чисел 3, 5, 6, 9, 10)

// Задача 11

// Обработка событий и изменение стилей:
// Задача: Создайте три кнопки с различными цветами, и напишите функцию, которая при клике на каждой кнопке меняет цвет фона документа на цвет кнопки.
const btnColorOne = document.querySelector(".color_1");
const btnColorTwo = document.querySelector(".color_2");
const btnColorThree = document.querySelector(".color_3");
const block = document.querySelector(".block2");
console.log(block);

function changeColor(btn) {
  btn.addEventListener("click", function () {
    const colorBtn = getComputedStyle(btn).backgroundColor;
    console.log(colorBtn);
    block.style.backgroundColor = colorBtn;
  });
}

changeColor(btnColorOne);
changeColor(btnColorTwo);
changeColor(btnColorThree);
// Input: Три кнопки с разными цветами.

// Задача 12
// Обработка событий и валидация формы:
// Задача: Создайте HTML-форму с полями для ввода (например, имя, email) и напишите функцию, которая при отправке формы проверяет введенные данные и выводит сообщение об успешной отправке или об ошибке.
// Input: HTML-форма с полями ввода.
const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const messageForm = document.getElementById("message");
const sendForm = document.getElementById("send");

function isFormFull() {
  nameForm.addEventListener("input", function () {
    if (nameForm.value.trim() !== "") {
      console.log("Yes!");
    } else {
      console.log("Please enter your name");
    }
    emailForm.addEventListener("input", function () {
      if (emailForm.value.trim() !== "") {
        console.log("Yes!");
      } else {
        console.log("Please enter your email");
      }
    });
    messageForm.addEventListener("input", function () {
      if (messageForm.value.trim() !== "") {
        console.log("Yes!");
      } else {
        console.log("Please enter your message");
      }
    });

    sendForm.addEventListener("click", function () {
      console.log("Form submitted!");
    });
  });
}
isFormFull(); //не работает
// Задача 14

// Обработка событий и скрытие элемента:
// Задача: Создайте HTML-элемент (например, <div></div>) и кнопку. Напишите функцию, которая при клике на кнопке скрывает или отображает данный элемент.
const btnHide = document.querySelector(".btn_hide");
console.log(btnHide);

function hideMe(btn) {
  btn.addEventListener("click", function () {
    const parent = btn.parentElement;
    console.log(parent);
    parent.classList.toggle("none");
  });
}
hideMe(btnHide);
// Input: HTML-элемент и кнопка.

// Задача 15
// Обработка событий и подчеркивание ссылки:
// Задача: Создайте несколько ссылок (<a>), и напишите функцию, которая при наведении мыши подчеркивает ссылку, а при уходе мыши убирает подчеркивание.
// Input: Несколько элементов <a>.
const links = document.querySelectorAll(".link");
function underlineLink(items) {
  items.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.style.textDecoration = "underline";
      item.style.textDecorationColor = "#b52295";
      item.style.textDecorationThickness = "0.1px";
    });
    item.addEventListener("mouseleave", function () {
      item.style.textDecoration = "none";
      item.style.textDecorationColor = "none";
      item.style.textDecorationThickness = "0";
    });
  });
}
underlineLink(links);
// Задача 16
// Обработка событий и смена цвета текста:
// Задача: Создайте несколько абзацев текста (<p>). Напишите функцию, которая при клике на абзаце меняет цвет текста.
// Input: Несколько элементов <p>.
const text = document.querySelectorAll(".text");
function changeColorText(items) {
  items.forEach((item) => {
    item.addEventListener("click", function () {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      item.style.color = randomColor;
    });
  });
}
changeColorText(text);
// Задача 17
// Обработка событий и изменение размеров картинки:
// Задача: Вставьте изображение (<img>) на страницу. Напишите функцию, которая при клике на изображении изменяет его размер.
// Input: Элемент <img>.
function changeSize(imgItem) {
  imgItem.addEventListener("mouseenter", function () {
    imgItem.style.transform = "scale(1.2) rotate(15deg)";
    imgItem.style.transition = "0.3s ease";
  });
  imgItem.addEventListener("mouseleave", function () {
    imgItem.style.transform = "scale(1)";
  });
}
const frog = document.getElementById("frog");
changeSize(frog);
