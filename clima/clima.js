const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=64d349f6744cdb86d46d3035ca7ab566&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}