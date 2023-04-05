// function evenNumbers(num: number){for (let i = 0; i <= num; i++) {
//     if(i % 2 != 0){console.log(i)} 
// }}
// evenNumbers(20)

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

export function add(MyWords: string []): number {
    let suma = 0;
    for (let i = 0; i < MyWords.length; i++) {

    suma += MyWords[i].length;
}
return suma;}

// let caracteres = ["ropa", "zapatos", "muebles"]
// let sumaCaracteres = add(caracteres)
// console.log(sumaCaracteres)

