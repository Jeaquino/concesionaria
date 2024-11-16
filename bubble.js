// const arr = [1,5,3,7,4,8,6,2];
const fs = require('fs')
let leer = fs.readFileSync("./data/saludo.txt",'utf-8');
leer += ". Que tengas un buen finde semana" 
fs.writeFileSync("./data/saludo2.txt",leer,'utf-8');
// const arrNombres = ["adrian","Alejandrina","Melina","Victor","Sandro","Natalia"];

// const {escribirArchivo, leerArchivo} = require('./utils/files.js')
// const path = './data/autos.json';
// const arrAutos = leerArchivo(path);

// function ordenarDeMenorAMayorkm(array,prop) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - 1; j++) {
//             if (array[j][prop] > array[j+1][prop]) {
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp; 
//             }
//         }    
//     }
    
//     return array;
// }

// console.log(ordenarDeMenorAMayorkm(arrAutos,"precio"));