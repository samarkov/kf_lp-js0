/* Задание 2 
Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости
от типа данных Х выводит в консоль сообщение вида: «X — число». 
Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».
*/
function checkType(x) {
    constxType = typeof (x);
    switch (constxType) {
        case 'number':
            console.log(x + ' - число');
            break;
        case 'string':
            console.log(x + ' - строка');
            break;
        case 'boolean':
            console.log(x + ' - логический');
            break;
        default:
            console.log('Тип x не определён');
    }
}
checkType(true);
checkType(1);
checkType('sdfs');
