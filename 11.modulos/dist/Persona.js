class Persona{
    
    constructor(name, lastName, avg){
        this.nombres = name;
        this.apellidos = lastName;
        this.promedio = avg;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(name){
        this.nombre = name

    }

    //metodos
    getData(){
        const data = `Nombres:${this.nombres} Apellidos:${this.
        apellidos} Promedio:${this.promedio}`;
        return data;
    }

    getValoracionAvg(){
        let reponse = (this.promedio>=3 ? "Promedio Aprobado"
        : "Promedio reprobado");
        return reponse;
    }

}

export {Persona};