'use strict';
//template String->permite interpolar variables
let option = parseFloat(prompt("Dame tu nota"));
switch (true){//true lo obligo a entrar al switch
    case option>=0 && option<3:
        msn = `Su nota ${option}es deficiente`;
        alert(msn);
        break;
    case option>=3 && option<3.9:
        console.log("Su nota es regular");
        break;
    case option>=4 && option<=4.5:
        console.log("Su nota es buena");
        break;
    case option>=4.6 && option<=5.0:
        console.log("Su nota es excelente");
        break;
    default:
        console.log("Nota Invalida");
    
}