// ===== 10 =====
// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
  
//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//       console.log(keys);
//       console.log(values);

//======= 11 ======
// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


// ===== 12 ==========
// Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//     if (object.hasOwnProperty(key)){
//         propCount = Object.keys(object).length;
//     };
//     };
//     // Change code above this line
//     return propCount;
//   }
//   console.log(countProps({}));
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// ====== 13 ========
// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
//  Запиши в переменную keys массив ключей собственных свойств объекта apartment,
//  и добавь в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//       values.push(apartment[key]);
//   }
//   console.log(keys);
//   console.log(values);

// Задача. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, 
// возможно, но необязательно, цикл for...of.

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key of keys) {
//       if (object.hasOwnProperty(key)) {
//         propCount = Object.keys(object).length;
//       }
//     }
  
//     return propCount;
    // Change code above this line
//   } 
// console.log(keys);
  // console.log(values);

//   function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     propCount = Object.keys(object).length;
//     return propCount;
//     // Change code above this line
//   }
//   console.log(countProps({})); // возвращает 0
//   console.log(countProps({ name: "Mango", age: 2 })); // возвращает 2
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // возвращает 3

// ====== 15 ========
// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
//   console.log(keys);
//   console.log(values);


// ======== 16 ========
// Задача. Расходы на зарплату
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
//  где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//  Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     
//     for (const value of values){
//         totalSalary += value;
// }

//     return totalSalary;
//   }
//   console.log(countTotalSalary({})); // возвращает 0
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400
  
// ======= 17 ========
// Задание
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors 
// значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//     for (const color of colors) {
//         hexColors.push(color.hex);
//         rgbColors.push(color.rgb);
//       }

//   console.log(hexColors);
//   console.log(rgbColors);

//======== 18 ===========
// Задача. Поиск объекта по значению свойства
// Задание
// Напиши функцию getProductPrice(productName) которая принимает 
// один параметр productName - название продукта. Функция ищет объект 
// продукта с таким именем (свойство name) в массиве products и 
// возвращает его цену (свойство price). Если продукт с таким названием не найден, 
// функция должна возвращать null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//    for (const product of products) {
//    if (productName === product.name) {
//      return product.price;
     
//   } 
// }
//       return null;
//     }
//   console.log(getProductPrice("Radar")); // возвращает 1300.
// console.log(getProductPrice("Grip")); // возвращает 1200.
// console.log(getProductPrice("Scanner")); // возвращает 2700.
// console.log(getProductPrice("Droid")); // возвращает 400.
// console.log(getProductPrice("Engine")); // возвращает null.

// ======= 19 ========
// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает 
// один параметр propName - имя (ключ) свойства. Функция должна вернуть массив
//  всех значений свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const  propNames = [];
//        for (const product of products){
//          if (product.hasOwnProperty(propName)){
//             propNames.push(product[propName]);
//          };
//         }
//         return propNames;
      
//     // Change code above this line
//   }
//   console.log(getAllPropValues("name")); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // возвращает [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // возвращает [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // возвращает []

// ========= 20 ========
// Задача. Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает 
// один параметр productName - название товара. Функция должна вернуть 
// общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//   }
// }
//   return totalPrice;
//     // Пиши код выше этой строки
//   }

//   console.log(calculateTotalPrice("Blaster")); // возвращает 0
// console.log(calculateTotalPrice("Radar")); // возвращает 5200
// console.log(calculateTotalPrice("Droid")); // возвращает 2800
// console.log(calculateTotalPrice("Grip")); // возвращает 10800
// console.log(calculateTotalPrice("Scanner")); // возвращает 8100

// ======= 21 ========
// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю
//  температуру за три дня (meanTemperature). Замени объявления переменных yesterday, 
//  today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;

//   const {yesterday, today, tomorrow} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday);// 28
// console.log(today); //26
// console.log(tomorrow); //33
// console.log(meanTemperature); //29

// ======= 22 ==========
// Задание
// В прогнозе максимальных температур также может быть необязательное 
// свойство icon - иконка погоды. Замени объявления переменных yesterday, 
// today, tomorrow и icon одной операцией деструктуризации свойств объекта 
// highTemperatures. Задай значение по умолчанию для icon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
// //   const icon = highTemperatures.icon;
//   const {
//       yesterday,
//       today,
//       tomorrow,
//       icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     } = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(yesterday);
//   console.log(today); 
//   console.log(tomorrow);
//   console.log(icon);

// ======== 23 =======
// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon 
// одной операцией деструктуризации свойств объекта highTemperatures. Задай значение
//  по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   } = highTemperatures;

// //   const highYesterday = highTemperatures.yesterday;
// //   const highToday = highTemperatures.today;
// //   const highTomorrow = highTemperatures.tomorrow;
// //   const highIcon = highTemperatures.icon;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//   console.log(highYesterday);// 28
//   console.log(highToday); //26
//   console.log(highTomorrow);  //33 
//   console.log(highIcon); //https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// ======== 24 ==========
// Задание
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb }  of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ========= 25 =========
// Задание
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
//  а также необязательными иконками. Замени объявления всех переменных одной операцией 
//  деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок,
//   переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",},
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",}
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);// 32
// console.log(lowToday); //28
// console.log(todayIcon); // link
// console.log(highTomorrow); //31
// console.log(lowTomorrow); //27
// console.log(tomorrowIcon);// link

//======== 26 ========
// Задание
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - 
// объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и 
// tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
//   const {
//       today: { low: todayLow, high: todayHigh },
//       tomorrow: { low: tomorrowLow, high: tomorrowHigh }
//     } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));// 28.5
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })); // 37

// ========== 27 ========
// Задание
// В переменной scores хранится массив результатов тестирования. 
// Используя распыление и методы Math.max() и Math.min() дополни код так, 
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...(scores));
// const worstScore = Math.min(...(scores));
// console.log(bestScore); // 93
// console.log(worstScore); // 17

// ======== 28 ========
// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
// хранятся результаты тестирования отдельных групп. Используя распыление 
// дополни код так, чтобы:

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores]; 
// const bestScore = Math.max(...(allScores));
// const worstScore = Math.min(...(allScores));
// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); //14

// ======== 29 =======
// Задание
// В конструкторе можно создавать новые тесты, для которых есть настройки по 
// умолчанию которые хранятся в переменной defaultSettings. 
// Во время создания теста, все или часть настроек можно переопределить, 
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять 
// настройки по умолчанию и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// // const finalSettings = {...defaultSettings, ...overrideSettings};
// // const finalSettings = {theme: "light", ...defaultSettings, minNumberOfQuestions: 10, ...overrideSettings};
// console.log(finalSettings); // {theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30}

// ======== 30 ========== Задача. Карточки задач
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
//  В новом объекте должно быть свойство completed, значение которого хранится в одноимённой 
//  локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, 
// category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах 
// category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newData = {category, priority, ...data, completed };
// return newData;
//   // Change code above this line
// }

// console.log(makeTask({}));// возвращает { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));// возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }));// возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));// возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })); // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ======= 31 =======
// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество 
// аргументов, считала и возвращала их сумму.

// Change code below this line
// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   for (const arg of args) {
//   total += arg;
//   }
//   return total;
// };
// console.log(add(15, 27));// возвращает 42
// console.log(add(12, 4, 11, 48));// возвращает 75
// console.log(add(32, 6, 13, 19, 8));// возвращает 78
// console.log(add(74, 11, 62, 46, 12, 36));// возвращает 241

//======= 32 =======
// Задание
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело 
// функции addOverNum() так, чтобы она считала сумму только тех аргументов, 
// которые больше чем заданное число. Это число должно быть первым параметром функции.


// function addOverNum(fistNumber,...args) {
//      let total = 0;
   
//      for (const arg of args) {
//        if (arg > fistNumber) {
//        total += arg;
//      }
//      }
//         return total;
//    }

// console.log(addOverNum(50, 15, 27)); // возвращает 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218

// ====== 33 ======== Задача. Массив совпадений
// Задание
// Функция findMatches() принимает произвольное количество аргументов.
//  Первым аргументом всегда будет массив чисел, а остальные аргументы будут 
//  просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
//  в котором будут только те аргументы, начиная со второго, которые есть 
//  в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], 
// потому что только они есть в массиве первого аргумента.

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < args.length; i += 1) {
//   if (array.includes(args[i])) {     
//       matches.push(args[i]);
//   }
//   }
//   // Change code above this line
//   return matches;
// }
 
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));// возвращает [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));// возвращает [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));// возвращает [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));// возвращает []

// ======= 34 ======== Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто 
// строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 
// "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// console.log(bookShelf.getBooks());// возвращает строку "Возвращаем все книги"
// console.log(bookShelf.addBook("Haze"));// возвращает строку "Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset"));// возвращает строку "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));// возвращает строку "Updating book Sands of dune to Dune"

// ======= 35 ========= Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги
//  с oldName на newName в свойстве books. Используй indexOf() для того, чтобы 
//  найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookArr = this.books.indexOf(oldName);
//     this.books.splice(bookArr, 1, newName);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);// значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf);// значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// ======= 36 ======= Задача. Лавка зелий «У старой жабы»
// Задание
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала
//  программу для ведения инвентаря - добавления, удаления, поиска и
//   обновления зелий. Добавь объекту atTheOldToad свойство potions, 
//   значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };
// console.log(atTheOldToad);


// ===== 37 ======= Задача. Получаем все зелья
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает 
// значение свойства potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }

//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());//["Speed potion", "Dragon breath", "Stone skin"]

// ======= 38 ======== Задача: добавляем новое зелье
// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName
//  в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//   return this.potions.push(potionName);
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad);
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad);

// ======== 39 ======== Задача. Удаляем зелье
// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье 
// potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     return this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad);

// ====== 40 ======== Задача: обновляем зелье
// Задание
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял
//  название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const array = this.potions.indexOf(oldName);
//     this.potions.splice(array, 1, newName);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// console.log(atTheOldToad); // в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// atTheOldToad.updatePotionName("Stone skin", "Invisibility"), 
// console.log(atTheOldToad);// в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

// Задача: расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
//  а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions 
//  будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// // // updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
  },
  // addPotion(newPotion) {
  //   if (this.potions.includes(newPotion)) {
  //     return `Error! Potion ${newPotion} is already in your inventory!`;
  //   }

  //   this.potions.push(newPotion);
  // },
  // addPotion(newPotion) {

  //   const { potions } = this;
  //   const { name } = newPotion;
  //   for (let i = 0; i < potions.length; i += 1) {
  //     if (potions[i].name === name) {
  //       return `Error! Potion ${name} is already in your inventory!`;;
  //     }
  //     potions.push(newPotion);
  //   }
  // },
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {
  //     if (newPotion.name === potion.name) {
  //        return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //   }
  //   }
  //   this.potions.push(newPotion);
  // },
  // removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },
  // removePotion(potionName) {
    
  //   const { potions } = this;
  //   for (let i = 0; i < potions.length; i += 1) {
  //     if (potions[i].name === potionName) {
  //       potions.splice(i, 1);
  //       return potions;
  //     }
  //   }
  //   return `Potion ${potionName} is not in inventory!`;
  // },
//   removePotion(potionName) {
//     for(const potion of this.potions) {
//       if (potion.name === potionName) {
// this.potions.splice(this.potions.indexOf(potion),1);}
// }
//     return `Potion ${potionName} is not in inventory!`;
//   },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // updatePotionName(oldName, newName) {
  //   const { potions } = this;
  //   for (let i = 0; i < potions.length; i += 1) {
  //     if (potions[i].name === oldName) {
  //       potions[i].name = newName;
  //       return potions;
  //     }
  //   }
  //   return `Potion ${oldName} is not in inventory!`;
  // },
  // updatePotionName(oldName, newName) {
  //   for(const potion of this.potions) {
  //     if (potion.name === oldName) {
  //       potion.name = newName;
  //       return this.potions;
  //     }
  //   }
  //   return `Potion ${oldName} is not in inventory!`;
  // },


  // Change code above this line
};
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); 
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


