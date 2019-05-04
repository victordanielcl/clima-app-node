const argv = require('./Config/yargs').argv;
const lugar = require('./Lugar/lugar');
const clima = require('./Clima/clima');

/*lugar.getLugarLatLng(argv.descripcion)
    .then(res => {

    })
    .catch(err => {
        console.log(err);
    });*/

const getInfo = async(desc) => {
    try {
        let coord = await lugar.getLugarLatLng(desc);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return temp.main.temp;
    } catch (err) {
        return -1;
    }

}

getInfo(argv.descripcion)
    .then(res => {
        if (res !== -1) {
            console.log(`La temperatura de ${argv.descripcion} es de ${res} °C`);
        } else {
            console.log(`No se pudo determinar el clima de ${argv.descripcion}`);
        }
    })
    .catch(err => {
        console.log(err);
    });