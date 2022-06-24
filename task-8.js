// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль 
// все значения в виде «Ключ — Х, значение — Y».
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

