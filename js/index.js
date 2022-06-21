/* Задание 3. раздела 5.3
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

const inString = 'Hello';
let outString = ' ';

console.log(inString);

for (let i=inString.length-1; i >= 0 ; i--) {
    outString = outString + inString[i];
} 

console.log(outString);


/* Задание 4. раздела 5.3
   Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/




/* задание 2 раздела 5.3 

let inputValue;
inputValue = true;
// inputValue = 'dssdf';
// inputValue = 20;
// inputValue = null;


switch (typeof(inputValue)) {
    case 'string':
        console.log(inputValue + ' - string');
        break;
    case 'boolean':
        console.log(inputValue + ' - boolean');
        break;
    case 'number':
        console.log(inputValue + ' - number');
        break;
    default:
        console.log(inputValue + ' - unknown');    
}

*/




/* задание 1 раздел 5.3
const inputString = prompt('Введите число:');
const castInputValue = +inputString;

if (isNaN(castInputValue)) {
    console.log('Упс, кажется вы ошиблись, "' + inputString + '" не является числом' );
} else  {
        const resultOdd = (castInputValue % 2 === 0);
        if (castInputValue % 2 === 0) {
            console.log('Число ' + inputString + ' - четное')
        }  else {
            console.log('Число ' + inputString + ' - нечетное');
        }
    }

*/


/* Задание 5

const NDS  = 0.20;
const NDFL = 0.13;
const EXCISE = 0.1;
const RENT = 40000;
const FOOD = 15000;
const OTHER = 15000;
const MY_SALARY = 120000;
let ndflTax;
let mySalaryNet;
let otherTaxes;
let totalAvailable;


ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')
*/

/* Задание 4 
a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
*/

/* Задание 3 
let x = prompt('Введите занчение X');
let x2 = Math.pow(x,2);
let x3 = Math.pow(x,3);
let val = Math.round(((((4*x2) + 18 - (23*x))/(5/9*x + 18*x3/33*x))+x*15/12)*10000)/10000;
alert('Результат расчета формулы = ' + val);
*/

/* Задание 2 
let cTemp = ;
alert(cTemp + ' градусов по Цельсию равны ' + ((cTemp*9/5)+32) + ' градусам по Фаренгейту.');

или 

alert(prompt('Введите значение температуры в C') + ' градусов по Цельсию равны ' + ((cTemp*9/5)+32) + ' градусам по Фаренгейту.'); */
