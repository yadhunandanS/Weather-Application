const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?q='+ address +'&key=5fd311fcf7e6486aa51ae6cab769d225&limit=1'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!');
        } else if(body.results.length === 0){
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, {
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng,
                location: body.results[0].formatted
            })
        }
    })
}


module.exports = geocode