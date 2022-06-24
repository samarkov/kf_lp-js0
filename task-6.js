// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

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
