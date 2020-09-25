const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=703eb492beb28f618d3f12938e762853&query=' + latitude + ',' + longitude;

   request({ url, json: true }, (error, response, {error: bodyError, current}) => {
      if (error) {
         callback('Unable to connect to weather service!', undefined)
      } else if (bodyError) {
         callback('Unable to find location. Try another search.', undefined)
      }
      else {
         callback(undefined, current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out")
      }
   })
}

module.exports = forecast

