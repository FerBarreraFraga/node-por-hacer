const fs = require('fs')
let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/db.json`, data, (err) =>{
        if(err) {
            return(" Hubo un Error al crear el archivo")
        }else{
            return (`Agregado exitoso`);
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    }catch{
        listadoPorHacer = [];
    }
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    return new Promise( (resolve, reject) => {
        cargarDB();

        let porHacer = {
            descripcion,
            completado:false
        }

        listadoPorHacer.push(porHacer)
        guardarDB();
        resolve(porHacer);
    })
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex ( tarea => tarea.descripcion === descripcion)
    if( index >= 0){
        listadoPorHacer[index].completado = completado;
        console.log(listadoPorHacer[index])
        guardarDB();

        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex ( tarea => tarea.descripcion === descripcion)
    if( index >= 0){
        listadoPorHacer.splice(index);
        guardarDB();

        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}