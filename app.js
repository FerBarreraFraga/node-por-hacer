const {argv} = require("./config/yargs");
const colors = require('colors/safe');

const {crear, getListado, actualizar, borrar } = require("./por-hacer/por-hacer");

let comando = argv._[0];
switch(comando){
    case 'crear':
            console.log(colors.green('crear'))
            crear(argv.descripcion)
                .then(tarea => console.log(tarea))
                .catch(e => console.log(e));
        break;

    case 'listar' : 
            console.log(colors.green('listar'))
            let listado = getListado();
            console.log(colors.yellow('================ POR HACER ================='))
            for( let tarea of listado){
                console.log(tarea)
            }
            console.log(colors.yellow('============================================'))
        break;

    case 'actualizar':
            console.log('actualizar');
            let actualizado =  actualizar(argv.descripcion, argv.completado)
            console.log(actualizado)
        break;

    case 'borrar':
            console.log('borrar');
            let borrador =  borrar(argv.descripcion, argv.completado)
            console.log(borrador)
        break;

    default:    
        console.log('Comando no reconocido')
}