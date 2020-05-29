const argv = require('./config/yargs').argv;
const tareas = require('./buscar/buscar');
const colors = require('colors');
let comando = argv._[0];




switch (comando) {
    case 'publicar':
        let consulta = tareas.consulta(argv.file, argv.country, argv.year);
        break;
    case 'guardar':
        let guardar = tareas.guardarDB(argv.file, argv.country, argv.year);
        break;
    default:
        console.log('Comando no reconocido');
}