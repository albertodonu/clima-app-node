const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Direccion de la ciudad para obteneer el clima",
        demand: true
    }
}).argv;

// lugar.getLugar(argv.direccion)
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// clima.getClima(40.75000, -74.000000)
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch((err) => {
//         console.log;
//     });




// const axios = require('axios');
// console.log(argv.direccion);

// string encode url 

//////
// const encodeURl = encodeURI(argv.direccion);

// console.log(encodeURl);
// // crear una instancia, con axios,  
// const instanceAx = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURl}`,
//     // timeout: 1000,
//     headers: { 'x-rapidapi-key': '4ed3d0ad18msh7e53981d353ebb3p10d6a0jsnfe922a429095' }
// });

// instanceAx.get()
//     .then((resp) => {
//         console.log(resp.data.Results[0]);
//     })
//     .catch((err) => {
//         console.log(`Error !!!`, err);
//     });


// const getInfo = async(direcccion) => {

//     // const datos = await lugar.getLugar(direcccion);
//     const datos = {
//         direcc: 'New york',
//         lat: 40.75000,
//         lng: -74.000000
//     }

//     const temperatura = await clima.getClima(datos.lat, datos.lng);

//     return {
//         direccion: datos.direcc,
//         temperatura
//     };

// }

const getInfo = async(direcccion) => {
    const datos = {
        direcc: direcccion,
        lat: 40.75000,
        lng: -74.000000
    }

    try {
        // const datos = await lugar.getLugar(direcccion);
        const temperatura = await clima.getClima(datos.lat, datos.lng);
        return `La temperatura de ${direcccion}  es de ${temperatura} grados `;


    } catch (error) {
        return `No se pudo obtener la temperatura de  ${direcccion} `;
    }


}






getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);