//Paquete de yargs para los comandos por consola
const argv = require('./configuración/yargs').argv;

//Invocación de función para obtener lugar
const lugar = require('./lugar/lugar');

//Invocación de función para el clima
const clima = require('./clima/clima');



// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log)



const getInfo = async(direccion) => {

    const coordenadas = await lugar.getLugarLatLong(argv.direccion);

    const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long);

    return temperatura;
}

getInfo(argv.direccion)
    .then(temp => console.log(`La temperatura en este momento en ${argv.direccion} es de ${temp} grados.`))
    .catch(err => console.log(`No se pudo acceder a la temperatura en ${argv.direccion}.`))