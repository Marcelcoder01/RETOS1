import { isEven } from "./condicionales1";
import { add } from "./BuclesFor";

let Array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let Array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let Array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let SumaArray1 = add(Array1)
isEven(SumaArray1)

let SumaArray2 = add(Array2)
isEven(SumaArray2)

let SumaArray3 = add(Array3)
isEven(SumaArray3)