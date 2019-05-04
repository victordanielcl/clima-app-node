const axios = require('axios');

const getClima = async(lat, lng) => {

    const instance = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8e0be76f0e5b0527ef8009ed9477375e&units=metric`);

    return instance.data;
}

module.exports = {
    getClima
}