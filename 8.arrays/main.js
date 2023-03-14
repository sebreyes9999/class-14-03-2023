'use strict';
//Array en 1 dimension
// en java si se puede modificar const
//Forma 1 de declaración
const myArray1 = [3,5,6,'Hola',3.6, false,'1'];
//Forma 2 de declaración
let myArray2 = new Array('a','b','c');

//console.log(myArray1);
//console.log(myArray1);


//Iterar arreglos

//Primera forma
for(let i=0;i<myArray1.length; i++){
    //console.log(myArray1[i]);
}

//Variaciones de for in y for of

for(let j in myArray2){
   // console.log(myArray2[j]);
}

for (let k of myArray1) {
    //console.log(k);
}

//for each
myArray2.forEach(element => {
    console.log(element);
});
    
