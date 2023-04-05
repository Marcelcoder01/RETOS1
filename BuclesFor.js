"use strict";
// function evenNumbers(num: number){for (let i = 0; i <= num; i++) {
//     if(i % 2 != 0){console.log(i)} 
// }}
// evenNumbers(20)
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// function MyRevert(MyArr: number []){for (let i = MyArr.length - 1; i >= 0; i--) {
//     console.log(MyArr[i])
// }}
// MyRevert([1, 2, 3, 4 , 5])
// function isRainbow(colors: string []){for (let i = 0; i < colors.length; i++) {
//     if (colors[i] == "rojo" || colors[i]== "naranja" || colors[i] == "amarillo" ||
//     colors[i] == "verde" || colors[i] == "azul"){console.log("Este color esta en el arcoiris")}
//     else {console.log("Este color NO está en el arcoiris")}
// }}
// isRainbow(["azul", "rojo", "negro", "blanco"])
function add(MyWords) {
    var suma = 0;
    for (var i = 0; i < MyWords.length; i++) {
        suma += MyWords[i].length;
    }
    return suma;
}
exports.add = add;
var caracteres = ["ropa", "zapatos", "muebles"];
var sumaCaracteres = add(caracteres);
console.log(sumaCaracteres);
