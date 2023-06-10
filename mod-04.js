/* task 01 */
/* Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza. */
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);
//
//
/* task 02 */
/* Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється. */
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
/* task 03 */
/* Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>". */
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
/* task 04 */
/* Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй. */
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
/* task 05
Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach. */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach((element, index) => {
//     totalPrice += orderedItems[index];
//   });
//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
/* task 06
Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
 */
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach((element) => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
/* task 07
Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
 */
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     return commonElements;
//     // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
/* task 08
Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
 */
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
/* task 10
Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію. */
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((element) => {
//         totalPrice += element;
//     });
//     return totalPrice;
// };
// // Change code above this line
/* task 11
Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції. */
// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
/* task 12
Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції. */
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
/* task 13
Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями. */
// function changeEven(numbers, value) {
//     // Change code below this line
//     let newArr = [];
//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             newArr.push(element + value);
//         } else {
//             newArr.push(element);
//         }
//     });
//     return newArr;
//     // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
/* task 14
Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map(). */
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
/* task 15
Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);
// console.log(titles);
/* task 16
Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.*/
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
/* task 17
Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users. */
// // Change code below this line
// const getUserNames = (users) => {
//     return users.map((user) => user.name);
// };
// // Change code above this line
/* task 18
Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users. */
// // Change code below this line
// const getUserEmails = (users) => {
//     return users.map((user) => user.email);
// };
// // Change code above this line
/* task 19
Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter(). */
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
/* task 20
Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//     (genres, index) => allGenres.indexOf(genres) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);
/* task 21
Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
/* task 22
Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color. */
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter((user) => user.eyeColor === color);
// };
// // Change code above this line
/* task 23
Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge. */
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };
// // Change code above this line
/* task 24
Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends. */
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter((user) => user.friends.includes(friendName));
// };
// // Change code above this line
/* task 25
Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень. */
// Change code below this line
// const getFriends = (users) => {
//     const allFriends = users.flatMap((user) => user.friends);
//     const friends = allFriends.filter(
//         (friend, index) => allFriends.indexOf(friend) === index
//     );
//     return friends;
// };
// // Change code above this line
/* task 26
Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true. */
// Change code below this line
// const getActiveUsers = (users) => {
//     return users.filter((user) => user.isActive);
// };
// // Change code above this line
/* task 27
Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false. */
// Change code below this line
// const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
// Change code above this line
/* task 28
Використовуючи метод find(), доповни код таким чином, щоб:

У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);
/* task 29
Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email. */
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//     return users.find((user) => user.email === email);
// };
// // Change code above this line
/* task 30
Використовуючи метод every(), доповни код таким чином, щоб:

У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність. */
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//     (number) => number % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//     (number) => number % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 !== 0);
/* task 31
Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false. */
// // Change code below this line
// const isEveryUserActive = (users) => {
//     return users.every((user) => user.isActive);
// };
// // Change code above this line
/* task 32
Використовуючи метод some(), доповни код таким чином, щоб:

У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray. */
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 !== 0);
/* task 33
Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false. */
// // Change code below this line
// const isAnyUserActive = (users) => {
//     return users.some((user) => user.isActive);
// };
// // Change code above this line
/* task 34
Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes. */
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//     (previousValue, element) => previousValue + element
// );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
/* task 35
Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed). */
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
/* task 36
Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users. */
// // Change code below this line
// const calculateTotalBalance = (users) => {
//     return users.reduce((total, user) => {
//         return total + user.balance;
//     }, 0);
// };
// // Change code above this line
/* task 37
Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users. */
// // Change code below this line
// const getTotalFriendCount = (users) => {
//     return users.reduce(
//         (totalFriends, user) => totalFriends + user.friends.length,
//         0
//     );
// };
// // Change code above this line
/* task 38
Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом. */
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
/* task 39
Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням. */
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
/* task 40
Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку. */
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
/* task 41
Доповни код таким чином, щоб:

У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = [...books].sort(
//     (firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating
// );

// const sortedByDescentingRating = [...books].sort(
//     (firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating
// );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
/* task 42
Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance). */
// Change code below this line
// const sortByAscendingBalance = (users) => {
//     return users.sort((min, max) => min.balance - max.balance);
// };
// // Change code above this line
// console.log(
//     sortByAscendingBalance([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//         },
//     ])
// );
/* task 43
Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends). */
// // Change code below this line
// const sortByDescendingFriendCount = (users) => {
//     return [...users].sort(
//         (min, max) => max.friends.length - min.friends.length
//     );
// };
// // Change code above this line
// console.log(
//     sortByDescendingFriendCount([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//         },
//     ])
// );
/* task 44
Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку. */
// // Change code below this line
// const sortByName = (users) => {
//     return [...users].sort((first, second) =>
//         first.name.localeCompare(second.name)
//     );
// };
// // Change code above this line
// console.log(
//     sortByName([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//         },
//     ])
// );
/* task 45
Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. */
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//     .filter((element) => element.rating >= MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((first, second) => first.localeCompare(second));
// console.log(names);
/* task 46
Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends). */
// // Change code below this line
// const getNamesSortedByFriendCount = (users) => {
//     return [...users]
//         .sort((min, max) => min.friends.length - max.friends.length)
//         .map((user) => user.name);
//     // метод sort для відсортований за зростанням кількості їхніх друзів
//     // метод map для повернення масиву імен
// };
// // Change code above this line
// console.log(
//     getNamesSortedByFriendCount([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: [
//                 "Jacklyn Lucas",
//                 "Linda Chapman",
//                 "Adrian Cross",
//                 "Solomon Fokes",
//             ],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//         },
//     ])
// );
/* task 47
Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом. */
// // Change code below this line
// const getSortedFriends = (users) => {
//     return users
//         .flatMap((user) => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((first, second) => first.localeCompare(second));
// };
// // Change code above this line
// console.log(
//     getSortedFriends([
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: [
//                 "Jacklyn Lucas",
//                 "Linda Chapman",
//                 "Adrian Cross",
//                 "Solomon Fokes",
//             ],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//         },
//     ])
// );
/* task 48
Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender. */
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     return users
//         .filter((user) => user.gender === gender)
//         .map((user) => user.balance)
//         .reduce((total, number) => total + number);
//     // відсортувати фільтром по гендеру
//     // мапом виділити баланс
//     // reduce додати баланс
// };
// // Change code above this line
// console.log(
//     getTotalBalanceByGender(
//         [
//             {
//                 name: "Moore Hensley",
//                 email: "moorehensley@indexia.com",
//                 eyeColor: "blue",
//                 friends: ["Sharron Pace"],
//                 isActive: false,
//                 balance: 2811,
//                 gender: "male",
//             },
//             {
//                 name: "Sharlene Bush",
//                 email: "sharlenebush@tubesys.com",
//                 eyeColor: "blue",
//                 friends: ["Briana Decker", "Sharron Pace"],
//                 isActive: true,
//                 balance: 3821,
//                 gender: "female",
//             },
//             {
//                 name: "Ross Vazquez",
//                 email: "rossvazquez@xinware.com",
//                 eyeColor: "green",
//                 friends: [
//                     "Marilyn Mcintosh",
//                     "Padilla Garrison",
//                     "Naomi Buckner",
//                 ],
//                 isActive: false,
//                 balance: 3793,
//                 gender: "male",
//             },
//             {
//                 name: "Elma Head",
//                 email: "elmahead@omatom.com",
//                 eyeColor: "green",
//                 friends: ["Goldie Gentry", "Aisha Tran"],
//                 isActive: true,
//                 balance: 2278,
//                 gender: "female",
//             },
//             {
//                 name: "Carey Barr",
//                 email: "careybarr@nurali.com",
//                 eyeColor: "blue",
//                 friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//                 isActive: true,
//                 balance: 3951,
//                 gender: "male",
//             },
//             {
//                 name: "Blackburn Dotson",
//                 email: "blackburndotson@furnigeer.com",
//                 eyeColor: "brown",
//                 friends: [
//                     "Jacklyn Lucas",
//                     "Linda Chapman",
//                     "Adrian Cross",
//                     "Solomon Fokes",
//                 ],
//                 isActive: false,
//                 balance: 1498,
//                 gender: "male",
//             },
//             {
//                 name: "Sheree Anthony",
//                 email: "shereeanthony@kog.com",
//                 eyeColor: "brown",
//                 friends: ["Goldie Gentry", "Briana Decker"],
//                 isActive: true,
//                 balance: 2764,
//                 gender: "female",
//             },
//         ],
//         "male"
//     )
// );
