// Задание 5.

// Дан произвольный массив. Необходимо вывести количество элементов массива, затем 
//перебрать его и вывести в консоль каждый элемент массива.


let randArray = [1,2,3,-3,'arrrr','book'];

console.log(randArray.length);

randArray.forEach(element => {
    console.log(element);

});

const mapArray = randArray.map(x => console.log(x));

