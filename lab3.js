function checkSpam(str){
    console.log(str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra'))
}

checkSpam('viaraxxx');
checkSpam('via');
checkSpam('xx');
checkSpam('XXX');

console.log("" + 1 + 0); //10
// Преобразование в строку
console.log("" - 1 + 0); //-1
// Преобразование в целое из-за вычитания
console.log(true + false); //1
// 1+0 = 1
console.log(6 / '3'); //2
// Преобразование в целое
console.log("2" * "3"); //6
// Преобразование в целое
console.log(4 + 5 + "px"); //9px
// Преобразование в строку
console.log("$" + 4 + 5); //$45
// Преобразование в строку
console.log("4" - 2); //2
// Преобразование в целое
console.log("4px" - 2); // NaN
// Некорректно
console.log(" -9 " + 5); // -9 5
// Преобразование в строку
console.log(null + 1); //1
// 0 + 1 = 1
console.log(undefined + 1); //NaN
// Неккоректно
console.log(" \t \n" - 2); //-2
// Управляющие символы
console.log(5 > 4); // true
// выражение истинно
console.log("apple" + "pineapple"); // applepineaple
// Складывание строк
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null ===  +"\n0\n"); //false
