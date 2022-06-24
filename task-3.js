/* Задание 3. раздела 5.3
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

const inString = 'Hello';
let outString = '';

console.log(inString);

for (let i = inString.length - 1; i >= 0; i--) {
    outString = outString + inString[i];
}

console.log(outString);