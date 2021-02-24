const axios = require('axios');


const getLugar = async(direccion) => {
    const encodeURl = encodeURI(direccion);

    // console.log(encodeURl);
    // crear una instancia, con axios,  
    const instanceAx = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURl}`,
        headers: { 'x-rapidapi-key': '4ed3d0ad18msh7e53981d353ebb3p10d6a0jsnfe922a429095' }
    });

    const resp = await instanceAx.get();

    if (resp.data.Results === null) {
        throw new Error(`la respuesta es null para ${direccion}`);
    } else if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para  ${direccion}`);
    }

    let data = resp.data.Results[0];

    const direcc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcc,
        lat,
        lng
    }

}

module.exports = {
    getLugar
}