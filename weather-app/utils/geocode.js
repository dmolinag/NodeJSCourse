const request = require('postman-request')

const geocode = (address, callback) => {
   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFuaWVsbW9saW5hOTIiLCJhIjoiY2tldWM1NXBzMXcwZDJ4cXY0dnJ3eWVkaCJ9.Q1xTqccYci3Nvx0M1zS_cA'

   request({ url, json: true }, (error, response, { features }) => {
      if (error) {
         callback('Unable to connect to mapbox service!', undefined)
      } else if (features.length === 0) {
         callback('Unable to find location. Try another search.', undefined)
      } else {
         callback(undefined, {
            latitude: features[0].center[1],
            longitude: features[0].center[0],
            location: features[0].place_name
         })
      }
   })
}

module.exports = geocode