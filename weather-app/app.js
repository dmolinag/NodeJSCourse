const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=703eb492beb28f618d3f12938e762853&query=antwerp&units=f';

// request({ url: url, json: true }, (error, response, body) => {
//    console.log('error:', error); // Print the error if one occurred
//    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//    if (error) {
//       console.log('Unable to connect to weather service!')
//    } else if(body.error) {

//    }
//    else {
//       console.log(body.current.weather_descriptions[0], ". It is currently", body.current.temperature, "degrees out. It feels like", body.current.feelslike, "degrees out")
//       // console.log('body:', body); // Print the HTML for the Google homepage.
//    }
// })

// 
// Goal: Print a small forecast to the user
// 
// 1. Print: "It is currently 9 degress out. It feels like 5 degrees out."
// 2. Test your work"

// 
// Geocoding 
// Address -> Lat/Long -> Weather

// 
// Goal: Print the lat/long for Los Angeles
// 
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal 
// 4. Test your work

// 
// Goal: Handle errors for geocoding request
// 
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiZGFuaWVsbW9saW5hOTIiLCJhIjoiY2tldWM1NXBzMXcwZDJ4cXY0dnJ3eWVkaCJ9.Q1xTqccYci3Nvx0M1zS_cA';

// request({ url: geocodeURL, json: true }, (error, response, body) => {
//    if (error) {
//       console.log('Unable to connect to weather service!')
//    } else if (body.features.length === 0) {
//       console.log("no matching results")
//    } else {
//       const latitude = body.features[0].center[1]
//       const longitude = body.features[0].center[0]
//       console.log(latitude, longitude);
//    }
//    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//    // console.log('response', body);
//    // const latitude = body.features[0].center[1]
//    // const longitude = body.features[0].center[0]
//    // console.log(latitude, longitude);

// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// 
// Goal: Use both destructuring and property shirthand in wheater app
// 
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work and ensure app still works

const address = process.argv[2]

if (address) {
   geocode(address, (error, {latitude, longitude, location}) => {
      if (error) {
         return console.log(error)
      }

      forecast(latitude, longitude, (error, forecastData) => {
         if (error) {
            return console.log(error)
         }
         console.log(location)
         console.log(forecastData)
      })
   })
} else {
   console.log('Not location provided')
}








