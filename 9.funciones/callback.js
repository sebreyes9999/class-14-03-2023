let mensaje = "Hola ";

//funcion como expresion
const saludo = function(cad){//Si no hay nada se llama funcion anonima
    console.log(cad + "estudiantes");
    console.log(`${cad}estudiantes UE`);

}

//callback
function saludar(callback,msn){
    callback(msn);
}

//invocar el callback o funcion de retrollamada
saludar(saludo,mensaje);