const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            const result = base * i;
            salida += `${base} x ${i} = ${result}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${result}\n`;
        }

        if (listar) {
            console.log('===================='.green);
            console.log(`Tabla del ${base}`.magenta);
            console.log('===================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./files/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.cyan;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    crearArchivo
};
