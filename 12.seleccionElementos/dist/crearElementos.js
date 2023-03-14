'use strict';
const myElement = document.createElement('div');
myElement.id="div1";
myElement.className="div1";
myElement.innerHTML = "Esto es un div creado desde JS";
myElement.style ="color:red";
//Insertar elemento
document.body.appendChild(myElement);
//Insertar en el header
const header = document.getElementById('myHeader');
header.appendChild(myElement);

let myParrafo1 = document.createElement('p');
myParrafo1.setAttribute('class','sec3');
let myParrafo2 = document.createElement('p');
myParrafo2.innerHTML="**** Lorem ipsum dolor sit amet consectetur adipisicing elit ****";
myParrafo1 = myParrafo2;
myParrafo1.innerHTML="<strong>Hola desde JS</strong>";
const sec2 = document.getElementById('sec2');
sec2.appendChild(myParrafo2);
header.appendChild(myParrafo1);