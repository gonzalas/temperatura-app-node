//Importo el paquete axios para solicitar la API de geolocalización
const axios = require('axios');



const getLugarLatLong = async(direccion) => {

    //Función que genera una url segura del nombre que ingrese por consola
    const encodedUrl = encodeURI(direccion);


    //Genero una instancia a partir de la API de geolocalización
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '0789071065msha03c37f13eeeb49p12f48ajsn5d4d8f628d21' }
    });


    //El paquete axios trabaja la API como Promise como en este caso *** El paquete request trabaja la API como callback

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('¡ERROR!', err);
    //     })


    const resp = await instance.get();


    if (resp.data.Results === 0) {
        throw new Error(`No se pudo encontrar la dirección ${direccion}.`);
    }


    const info = resp.data.Results[0];

    const nombre = info.name;
    const lat = info.lat;
    const long = info.lon;

    return {
        nombre,
        lat,
        long
    }

}



module.exports = {
    getLugarLatLong
}