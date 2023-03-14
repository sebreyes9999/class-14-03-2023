import {potencia, rCuadrada } from "./calculo.js";
import { Persona } from "./Persona.js";

console.log(potencia(2,4));
console.log(rCuadrada(9));

//Instanciar Objeto o Crear Objeto

const myPerson = new Persona("Maria","Perez",4);

console.info(myPerson.getData());
console.error(myPerson.getValoracionAvg(), myPerson.apellidos);