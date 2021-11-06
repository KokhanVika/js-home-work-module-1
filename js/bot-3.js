// ===== 10 =====
// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

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

// Тесты
// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

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

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

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

// Тесты
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.
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

// Тесты
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of
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

// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// Для получения массива ключей объекта apartment используется Object.keys()
// Для получения массива значений объекта apartment используется Object.values()
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

// Тесты
// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

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

// Тесты
// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

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

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

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

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

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

// Тесты
// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

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

// Тесты
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная meanTemperature
// Значение переменной meanTemperature это число 29
// Используется синтаксис деструктуризации объекта highTemperatures
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

// Тесты
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Oбъявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная icon с помощью деструктуризации
// Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Используется деструктуризация объекта

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

// Тесты
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highYesterday
// Значение переменной highYesterday это число 28
// Объявлена переменная highToday
// Значение переменной highToday это число 26
// Объявлена переменная highTomorrow
// Значение переменной highTomorrow это число 33
// Объявлена переменная highIcon
// Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется деструктуризация объекта
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

