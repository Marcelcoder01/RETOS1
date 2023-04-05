"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(dia, mes) {
    if ((dia >= 21 && dia <= 31) && (mes == 3) || (dia > 0 && dia <= 19) && (mes == 4)) {
        console.log("Tu signo es Aries");
    }
    else if ((dia >= 20 && dia <= 31) && (mes == 4) || (dia > 0 && dia <= 19) && (mes == 5)) {
        console.log("Tu signo es Tauro");
    }
    else if ((dia >= 21 && dia <= 31) && (mes == 5) || (dia > 0 && dia <= 20) && (mes == 6)) {
        console.log("Tu signo es Geminis");
    }
    else if ((dia >= 21 && dia <= 31) && (mes == 6) || (dia > 0 && dia <= 20) && (mes == 7)) {
        console.log("Tu signo es Cancer");
    }
    else if ((dia >= 23 && dia <= 31) && (mes == 7) || (dia > 0 && dia <= 22) && (mes == 8)) {
        console.log("Tu signo es Leo");
    }
    else if ((dia >= 23 && dia <= 31) && (mes == 8) || (dia > 0 && dia <= 22) && (mes == 9)) {
        console.log("Tu signo es Virgo");
    }
    else if ((dia >= 23 && dia <= 31) && (mes == 9) || (dia > 0 && dia <= 22) && (mes == 10)) {
        console.log("Tu signo es Libra");
    }
    else if ((dia >= 23 && dia <= 31) && (mes == 10) || (dia > 0 && dia <= 21) && (mes == 11)) {
        console.log("Tu signo es Escorpio");
    }
    else if ((dia >= 22 && dia <= 31) && (mes == 11) || (dia > 0 && dia <= 21) && (mes == 12)) {
        console.log("Tu signo es Sagitario");
    }
    else if ((dia >= 22 && dia <= 31) && (mes == 12) || (dia > 0 && dia <= 20) && (mes == 1)) {
        console.log("Tu signo es Capricornio");
    }
    else if ((dia >= 21 && dia <= 31) && (mes == 1) || (dia > 0 && dia <= 19) && (mes == 2)) {
        console.log("Tu signo es Acuario");
    }
    else if ((dia >= 20 && dia <= 31) && (mes == 2) || (dia > 0 && dia <= 19) && (mes == 3)) {
        console.log("Tu signo es Piscis");
    }
    else {
        console.log("Eres un extraterrestre");
    }
}
zodiac(20, 8);
function continent(pais) {
    if (pais == "Venezuela" || pais == "Argentina" || pais == "Costa Rica" || pais == "Chile" ||
        pais == "Brasil") {
        console.log("Estamos hablando de América del Sur, o Latinoamérica");
    }
    else if (pais == "España" || pais == "Francia" || pais == "Italia" || pais == "Portugal" ||
        pais == "Alemania") {
        console.log("Estamos hablando de Europa");
    }
    else if (pais == "Mauritania" || pais == "Marruecos" ||
        pais == "Ghana" || pais == "Egipto" || pais == "Nigeria") {
        console.log("Estamos hablando de Africa");
    }
    else if (pais == "China" || pais == "Japon" ||
        pais == "Singapur" || pais == "Tailandia") {
        console.log("Estamos hablando de Asia");
    }
    else if (pais == "Australia" || pais == "Nueva Zelanda" || pais == "Nueva Guinea") {
        console.log("Estas en Oceania, a tpc");
    }
    else {
        console.log("O estas en Antartida, o en otro planeta");
    }
}
continent("Egipto");
function isEven(x) {
    if (x % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
exports.isEven = isEven;
// isEven(57)
