"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales1_1 = require("./condicionales1");
var BuclesFor_1 = require("./BuclesFor");
var Array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var Array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var Array3 = ["Venezuela", "Veneno", "Voltaje"];
var SumaArray1 = (0, BuclesFor_1.add)(Array1);
(0, condicionales1_1.isEven)(SumaArray1);
var SumaArray2 = (0, BuclesFor_1.add)(Array2);
(0, condicionales1_1.isEven)(SumaArray2);
var SumaArray3 = (0, BuclesFor_1.add)(Array3);
(0, condicionales1_1.isEven)(SumaArray3);
