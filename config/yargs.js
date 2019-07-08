
const descripcion = {
    alias: 'd',
    demand : true
} 
const completado = {
    alias : 'c',
    default: true,
}



const argv = require("yargs")
                .command('listar', 'Mostrando...' )
                .command('crear', 'Creando...', {descripcion})
                .command('actualizar', 'Actualizando...', {descripcion, completado})
                .command('borrar', 'Borrando...', {descripcion})
                .help()
                .argv

module.exports = {
    argv
}
