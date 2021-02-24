const axios = require('axios');


const getClima = async(lat, lng) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b1f0856ea6e37ce10aac119a65fe8a94&units=metric`
        // console.log(url);
    const resp = await axios.get(url);
    return resp.data.main.temp;
}

module.exports = {
    getClima

}