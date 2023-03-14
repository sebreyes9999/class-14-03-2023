//Operador de propagación se utiliza mucho en arreglos ...
'use strict';
//Su funcion principal es expandir valores

let myArray = [2,4,6,8,10];

//console.log(...myArray);

let myArray2 = [1,3,5,7,9,...myArray];

//console.log(...myArray2);

//propagacion con una funcion 
let lenguajes = ["JS","PHP","PYTHON","JAVA"];

const myPrint = (lg1,lg2,...resto) =>{
    console.log(`**** Lenguajes de Programación ****
                     1.${lg1}
                     2.${lg2}
                     3.${resto}`);
}

myPrint("C++","C#");
myPrint(...lenguajes,"Cobol","Dart");