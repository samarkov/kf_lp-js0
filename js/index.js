

// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let mapArr = new Map([
    ['animal', 'cat'],
    ['age',1],
    ['color','red'],
    ['name','Nia'],
    ['vaccination','yes']
])
console.log('Map array consist:');
for (let item of mapArr) {
    console.log(`${item[0]}: ${mapArr.get(item[0])}`)
}


//Задание 7.

//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

//При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

/*
let result = false;
let randArray1 = [1, 2, 3, -3, 'arrrr', 'book'];
let randArray2 = [1,0,1,0,1,2,14,1,1,4,1,1,8];


function findOdd(arr) {
    let countOddNumbers = 0;
    let countEvenNumbers = 0;
    let countZeroNumbers = 0;
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {   //отбрасываем все не числа
         
            arr[i] % 2 !== 0 ? ++countOddNumbers : ++countEvenNumbers;
            
            if (arr[i] === 0) {++countZeroNumbers};
        }
    }
    console.log('четных:' + countEvenNumbers + ' нечетных:' + countOddNumbers + ' нулей: ' + countZeroNumbers);
    return true;
}

result = findOdd(randArray1);
result = findOdd(randArray2);
*/


// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
/*
let result = false;
let randArray1 = [1, 2, 3, -3, 'arrrr', 'book'];
let randArray2 = [1,1,1,1,1,1,1,1,1,1,1,1,1];


        function compareArray(arr) {
            for (i = 0; i < arr.length; i++) {
                if ((arr[i] != arr[i + 1])) {
                    console.log('Found diff elemen i:'+i+ ' '+ arr[i] +' != '+ arr[i + 1]);
                    return false;
                }
                console.log('All element are identical');
                return true;
            }
        }

result = compareArray(randArray1);
result = compareArray(randArray2);
*/


        // Задание 5.

        // Дан произвольный массив. Необходимо вывести количество элементов массива, затем 
        //перебрать его и вывести в консоль каждый элемент массива.
        
        /*
        let randArray = [1,2,3,-3,'arrrr','book'];

        console.log(randArray.length);

        randArray.forEach(element => {
            console.log(element);

        });

        const mapArray = randArray.map(x => console.log(x));

        */

        /* Задание 3. раздела 5.3
        Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

        // const inString = 'Hello';
        // let outString = '';

        // console.log(inString);

        // for (let i=inString.length-1; i >= 0 ; i--) {
        //     outString = outString + inString[i];
        // } 

        // console.log(outString);


        /* Задание 4. раздела 5.3
           Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/
        // let randomNumber = Math.trunc(Math.random()*100);
        // console.log(`Случайное число: ${randomNumber}`); 


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