const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encode = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encode}`,
        headers: { 'X-RapidAPI-Key': '34ecdfbc8amsh990acf1690767c2p1e709cjsn158ac78dc28a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const locacion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        locacion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}