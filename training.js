// const button = document.querySelector(".js-click");
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);

// let step = 0;
// function onClick(event) {
//   step += 10;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
//   console.log(event.currentTarget);
// }

// const title = document.querySelector(".js-title");
// title.addEventListener("click", onClick);
// const maxLength = 13;
// const totalLength = maxLength + 3;
// function onClick(event) {
//   const title = event.currentTarget;
//   const str = title.textContent.slice(0, maxLength);
//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);

//     title.setAttribute("data-title", remainder);
//     title.textContent = str + "...";
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = str + remainder;
//     console.log(remainder);
//   }
// }

// const userName = document.querySelector(".js-input");
// console.log("🚀 ~ userName:", userName);

// userName.addEventListener("input", onInput);

// function onInput(event) {
//   console.dir(event.currentTarget.value);
// }

// const formEl = document.querySelector(".login-form");
// formEl.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   const data = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(data);
// }

// const container = document.querySelector(".js-container");
// document.addEventListener("keydown", onKey);

// function onKey(event) {
//   console.log(event.code);
//   if (event.code === "Escape" || event.code === "Enter") {
//     container.classList.toggle("tog");
//   }
// }

// let sizeEl = 50;
// const markup = `<div style="background: tomato; width: ${sizeEl}px; height: ${sizeEl}px;"></div>
//     <button class="decrement" type="button">Зменьшити</button>
//     <button class="increment" type="button">Збільшити</button>`;
// document.body.insertAdjacentHTML("afterbegin", markup);
// const divEl = document.querySelector("div");
// const decrementBtn = document.querySelector(".decrement");
// const incrementBtn = document.querySelector(".increment");

// decrementBtn.addEventListener("click", onDecrement);
// function onDecrement() {
//   if (sizeEl === 10) return;
//   sizeEl -= 10;
//   divEl.style.cssText = `background: tomato; width: ${sizeEl}px; height: ${sizeEl}px;`;
// }
// incrementBtn.addEventListener("click", onIncrement);
// function onIncrement() {
//   sizeEl += 10;
//   divEl.style.cssText = `background: tomato; width: ${sizeEl}px; height: ${sizeEl}px;`;
// }

/* перевірка кліку на кнопку (фільтр цілі делегування) */
// const tagsContainer = document.querySelector(".js-tags");
// const selectedTags = new Set();
// tagsContainer.addEventListener("click", onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains("tags__btn-active");

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }
//   btn.classList.toggle("tags__btn-active");
// }

// const myPlants = [
//   {
//     type: "flowers",
//     list: ["rose", "tulip", "dandelion"],
//   },
//   {
//     type: "trees",
//     list: ["fir", "pine", "birch"],
//   },
// ];

// const secondTree = myPlants[1].list[1];
// console.log("🚀 ~ secondTree:", secondTree);

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// let result = null;
// fetch(`${BASE_URL}/users?_limit=9&_sort=name`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     result = data;
//     console.log(result);
//   })
//   .catch(console.warn);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Налаштування
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
/* Завершіть функцію, використовуючи правила нижче, щоб змінити об’єкт, переданий до функції.

Ваша функція завжди повинна повертати весь об’єкт records.
Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
Якщо prop не є tracks та value не є пустим рядком, призначте value до prop альбому.
Якщо prop є tracks та value не є пустим рядком, вам треба оновити масив tracks в альбомі. Якщо альбом не має властивості tracks, то призначте порожній масив. Потім додайте value як останній елемент у масиві tracks альбому. */
// Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }
//   return records;
// }

// Налаштування
// const myArr = [2, 3, 4, 5, 6];

// // Змініть код лише під цим рядком
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// console.log(total);

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );

// Налаштування
// const myArray = [];
// let i = 10;

// // Змініть код лише під цим рядком
// do {
//   myArray.push(i);
//   i++;
// } while (i < 10);

// console.log(myArray);

/* Напишіть рекурсивну функцію sum(arr, n), яка повертає суму перших n елементів масиву arr. */
// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Змініть код лише над цим рядком
// }

// console.log(sum([2, 3, 4, 5], 4));

// Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком

//   for (const contact of contacts) {
//     if (name === contact.firstName) {
//       if (Object.keys(contact).includes(prop)) {
//         return contact[prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Kristian", "lastName"));

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));

// console.log(Math.round10(3.05));
let num = 3.16;
console.log(num.toFixed(1));
console.log(Math.round(num * 10) / 10);
