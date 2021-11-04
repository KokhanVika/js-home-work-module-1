//======== Example 1 - Базовые операции с массивом========
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');

// // console.log(genres[0]);
// // console.log(genres[genres.length - 1]);
// // console.log(genres.shift());
// // genres.unshift('Country', 'Reggy')
// console.log(genres);

// =======Example 2 - Массивы и строки========
// Напиши скрипт для вычисления площади прямоугольника со сторонами, 
// значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const strArr = values.split(' ');
// const a = parseFloat(strArr[0]);//parsFloat можно заменить на Number: для преобразования в числа
// const b = parseFloat(strArr[1]);
// const s = a * b;
// console.log(s);

// ======Example 3 - Перебор массива======
// Напиши скрипт для перебора массива fruits циклом for. 
// Для каждого элемента массива выведи в консоль строку в формате
//  номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// // for (let i = 0; i < fruits.length; i += 1) {
// // console.log(`${i + 1}: ${fruits[i]}`);
// // }
// или
// fruits.forEach((value, idx, arr) => { // нет возможности задать шаг
//     console.log(`${idx + 1}: ${value}`);
// })

// ======Example 4 - Массивы и циклы========
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
//  В переменных names и phones хранятся строки имен и телефонных номеров, 
//  разделенные запятыми. Порядковый номер имен и телефонов в строках указывают
//   на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

// =======Example 5 - Массивы и строки===========
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
//  Результирующая строка не должна начинаться или заканчиваться пробельным символом. 
//  Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const strArr = string.split(' '); // превращаем в массив
// // strArr.shift(); //убираем первое слово
// // strArr.pop(); // убираем последнее слово
// const result = strArr.join(' ');
// console.log(result);

// ======Example 6 - Массивы и строки=========
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) 
// и выводит ее в консоль.

// const string = 'Welcome to the future';
// const strArr = string.split('');
// strArr.reverse();//реверс посимвольно
// const result = strArr.join('');//собирает символы в слова
// console.log(result);

//или через for
// const string = 'Welcome to the future';
// const strArr = string.split('');
// let result = '';
// for (let i = strArr.length - 1; i >= 0; i -= 1) {
//     result += strArr[i]; //перебираем от последнего елемента к первому
// }
// console.log(result);

// еще вариант
// const string = 'Welcome to the future';
// console.log(string.split('').reverse().join(''));//чейнинг цепочка команд


// ======Example 7 - Сортировка массива с циклом========
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1) {
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]) { //сравниваем первые буквы слов
//             const tmp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = tmp;
//         }
//     }
// }
// console.log(langs);//['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. 
// Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// console.log(min); // 1

// ======extra - сделать реверс каждого слова не меняя порядок слов========
// 1. разбить на массив слов
// 2.1 разбить каждое слово на массив символов
// 2.2 реверснуть
// 2.3 собрать слово в одну строку
// 3. собрать текст с массива слов

// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// console.log(strArr);
// let result = '';
// for (let i = 0; i < strArr.length; i += 1) {
//     result += strArr[i].split('').reverse('').join('') + ' ';
// }
// console.log(result);// emocleW ot eht erutuf 


