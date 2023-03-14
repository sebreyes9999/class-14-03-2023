'use strict';
//Selección de elementos pot id
const seccion1 = document.getElementById('sec1');
//console.log(seccion1);
seccion1.innerHTML = "Desde Ja<b>va</b>Scri<em>pt</em>";
//seccion1.textContent = "Desde Ja<b>>va</bScri<em>pt</em>";

//Seleccion por class
const seccion2 = document.getElementsByClassName('sec2');
//console.log(seccion2);

//Seleccion por name
const seccion3 = document.getElementsByName('seccion3');
//console.log(seccion3);

//Seleccion por etiquetas
const labelP = document.getElementsByTagName('p');
//console.log(labelP);

//QuerySelector por id #, class ., h1, all

const myMain = document.querySelector('#container');
const sec1 = document.querySelector('sec1');
const myH1 = document.querySelector('h1');
const todoP = document.querySelectorAll('p');
console.log(myMain,sec1,myH1,todoP);