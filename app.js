const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log(argv);
const { base= 6, listar= false, hasta= 10 } = argv;

console.log(base, listar, hasta);

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
