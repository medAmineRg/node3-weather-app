const request = require('request')


const forecast = (lon, lat, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1f1627800d954edb311d80b5327d7f2&units=metric`
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to connection services', undefined);
        } else if (body.cod === "400") {
            callback('No matching search was found. Try Again', undefined);
        } else {
            let temp = body.main.temp
            let chanceRain = body.clouds.all
            callback(undefined, `its currently ${temp} degrees out. There is a ${chanceRain}% chance of rain`);
        }
    })
}

module.exports = forecast;