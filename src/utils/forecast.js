const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.weatherapi.com/v1/forecast.json?key=064c6941803947ad93f31000240305&q=' + latitude + ',' + longitude

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined);
        } else if (body.error) {
            callback('unable to find location',undefined);
        } else {
            callback(undefined,body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degrees Celsius out.')
        }
    })
 
}


module.exports = forecast