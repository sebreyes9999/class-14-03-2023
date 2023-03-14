
const potencia = (base,potencia)  =>{
    return Math.pow(base,potencia);
};

const raizCuadrada = (num) => {
    return Math.sqrt(num);
};

export {potencia,raizCuadrada as rCuadrada};//es un alias, ahora hay que llamarla por ese nombre, solo se puede para exportar funciones
