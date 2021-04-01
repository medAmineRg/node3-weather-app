const request = require('request')

const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?limit=1&access_token=pk.eyJ1IjoibWVkYW1pbmU5OSIsImEiOiJja21oeHhhbnQwYnJ0MnZxa2VuNjVwd3VkIn0.Zq_S-PH_3GhkZ1JCavLYzg'
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to connection services', undefined)
        } else if (!body.features.length) {
            callback('No matching search was found. Try Again', undefined)
        } else {
            callback(undefined, {
                longtitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;