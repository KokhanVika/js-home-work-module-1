// ======= 1 ========= Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции
//  makePizza, а в переменной pointer была ссылка на функцию makePizza.
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);
//   console.log(pointer);

// ======= 2 ========= Задание
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром
//  (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza 
//  или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }

// console.log(makeMessage("Royal Grand", makePizza));// возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza));// возвращает строку "Delivering Ultracheese pizza."

// ======= 3 ======= Задание
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым 
// аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку
//  "Eating pizza <имя пиццы>".
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//        console.log(`Eating pizza ${pizzaName}`);
//   })

// ======= 4 ========= Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order 
// так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order
//  должен возвращать результат вызова колбэка onError, передавая ему аргументом строку
//   "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order 
// должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя 
// заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.
//  Пожалуйста ничего там не меняй.
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         for (const pizza of this.pizzas){
//     if (this.pizzas.includes(pizzaName)) {
//          return makePizza(pizzaName);
//        }
//      };
//      return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//      },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); // возвращает "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); //возвращает "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));// возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); //возвращает "Error! There is no pizza with a name Vienna in the assortment."

// ====== 5 ======== Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems -
//  массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в 
//  переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// //   orderedItems.forEach(function(iteam) {
// //     totalPrice += iteam});
// // как стрелочная функция
//   orderedItems.forEach(iteam => {
//     totalPrice += iteam
// });

// // for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138 
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116

// ======= 6 ======= Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый
//  массив, в котором будут только те элементы оригинального массива, которые больше чем 
//  значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
    
    // numbers.forEach((number, i) => {
    //     if (numbers[i] > value) {
    //         filteredNumbers.push(numbers[i]);
    //   }
    // });

    // numbers.forEach((number) => {
    //     if (number > value) {
    //         filteredNumbers.push(number);
    //   }
    // });

    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
  
    // Change code above this line
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));// возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));// возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));// возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38));// возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));// возвращает [24, 41, 76]

// ====== 7 ======== Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной 
// длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, 
// то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
//     firstArray.forEach((value, i) => {
//         if (secondArray.includes(firstArray[i])) {
//             commonElements.push(firstArray[i]);
//           }
//         });
  
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
  
//     return commonElements;
//     // Change code above this line
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4]));// возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));// возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));// возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));// возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// возвращает []

// ==== 8 ====== Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// function calculateTotalPrice(quantity, pricePerItem) {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }
//   const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   };


// console.log(calculateTotalPrice(5, 100)); // возвращает 500
// console.log(calculateTotalPrice(8, 60)); // возвращает 480
// console.log(calculateTotalPrice(3, 400)); // возвращает 1200

// ======= 9 ======= Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   };
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


// console.log(calculateTotalPrice(5, 100)); // возвращает 500
// console.log(calculateTotalPrice(8, 60)); // возвращает 480
// console.log(calculateTotalPrice(3, 400)); // возвращает 1200

// ====== 10 ======= Задание
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление
//  на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на 
//  стрелочную функцию.
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
//   const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116

// ====== 11 ======== Задача. Фильтрация массива чисел 2.0
// Задание
// Замени объявление функции filterArray() и коллбек для метода forEach()
//  на стрелочные функции.
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

// ======== 12 ======= Задача. Общие элементы 2.0
// Задание
// Замени объявление функции getCommonElements() и коллбек для метода 
// forEach() на стрелочные функции.
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
  
//     firstArray.forEach(function (element) {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
      
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//         }
//     });

  
//     // Change code above this line
//     return commonElements;
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []

// ======== 13 ======== Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//  а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
// //     // Change code below this line
// //     for (let i = 0; i < numbers.length; i += 1) {
// //       if (numbers[i] % 2 === 0) {
// //         numbers[i] = numbers[i] + value;
// //       }
// //     }

//   let newNumbers = [];
//   numbers.forEach((number) => {
//     number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number);
//   });
//   return newNumbers;

//     // Change code above this line
//   }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154]


// ======= 14 ====== Задание
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
// Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);// [5, 4, 5, 7]

// ======== 15 ======== Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив 
// названий книг (свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// console.log(titles);// ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// ======= 16 ======= Задание
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив 
// всех жанров книг (свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap(book => book.genres);
// console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]

// ======= 17 ====== Задача. Имена пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]; 
// Задание
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// const getUserNames = users => {
//   return users.map(user => user.name) // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// };

// ======== 18 ======== Задание
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// const getUserEmails = users => {
    
//   return users.map(user => user.email)
//     };

// ====== 19 ======= Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из 
// массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 != 0);

// console.log(evenNumbers); //[24, 82, 36, 18, 52]
// console.log(oddNumbers); //[17, 61, 47, 73]

// ====== 20 ======== Задание
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) 
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
// console.log(allGenres); //["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres); //["adventure", "history", "fiction", "mysticism", "horror"]

// ======= 21 ========== Задание
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) 
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем 
// (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR );
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ======= 22 ====== Задание
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала
//  массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
//   };

//======= 23 ======= Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, 
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({age}) => age >= minAge && age <= maxAge)
//  };

// ======= 24 ======== Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив 
// пользователей у которых есть друг с именем в параметре friendName. Массив друзей 
// пользователя хранится в свойстве friends.
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({friends}) => friends.includes(friendName))
// };

// ====== 25 ======== Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей
//  (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы 
//  возвращаемый массив не содержал повторений.

// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//    return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };//["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]

// ======= 26 ======== Задание
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// const getActiveUsers = (users, isActive) => {
//   return users.filter(user => user.isActive === true)
// };

//======== 27 ========= Задание
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive === false)
// };

// ====== 28 ====== Задание
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book. author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ======== 29 ====== Задание
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект
//  пользователя, почта которого (свойство email) совпадает со значением параметра email.
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };

// ======== 30 =========
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 != 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 != 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 != 0);

// ======= 31 ====== Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи
//  сейчас активны (свойство isActive) и возвращала true или false.
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true)
// };

// ======== 32 ========= Задание
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 != 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 != 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 != 0);

// ======== 33 ===== Задание
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive === true) 
// };

// ======== 34 ======= Задание
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number});

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime); //2692
// console.log(averagePlayTime); //673

// ======= 35 ======== Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
// и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его 
// время (свойство playtime) на количество игр (свойство gamesPlayed).
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.flatMap(player => player.playtime / player.gamesPlayed).reduce((total, player) => {
// return total + player});

// console.log(totalAveragePlaytimePerGame); //1023
// 
// ====== 36 ===== Задание
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// const calculateTotalBalance = users => {
//   return users.flatMap(user => user.balance).reduce((total, user) => {return (total + user)})
// };

// const calculateTotalBalance = (users) => {
//   return users.flatMap(user => user.balance).reduce((total, user) => {
//     return (total + user);
//   }, 0);
// }

// ======= 37 ====== Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// const getTotalFriendCount = users => {
//   return users.flatMap(user => user.friends.length).reduce((total, user) => {return (total + user)})
// };// 14

// ====== 38 ====== Задание
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
//  по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия 
//  массива имён авторов authors отсортированная в по алфавиту.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); //['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']
