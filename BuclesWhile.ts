// function hasEven(MyNums: number []){
//     let i = 0;
//     while(i < MyNums.length){
//         if(MyNums[i] % 2 == 0){console.log("hay pares")} 
//         else{console.log("No hay pares en este array")}; i++
//     };
    
// }

// hasEven([2, 4, 5, 6])

function startWithM(MyNames: string []){
    let i = 0;
    while (i < MyNames.length) {
        if(MyNames[i][0] == "M"){
            return true} else {
                return false}; i++;
            }
        }


console.log(startWithM(["Marel", "Claudia", "Luis", "Silvia"]))