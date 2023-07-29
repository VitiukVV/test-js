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

const BASE_URL = "https://jsonplaceholder.typicode.com";

let result = null;
fetch(`${BASE_URL}/users?_limit=9&_sort=name`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    result = data;
    console.log(result);
  })
  .catch(console.warn);
