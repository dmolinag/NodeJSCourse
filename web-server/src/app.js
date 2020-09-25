const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
   res.render('index', {
      title: 'Weather',
      name: 'Daniel'
   })
})

app.get('/about', (req, res) => {
   res.render('about', {
      title: 'About me',
      name: 'Daniel'
   })
})

app.get('/help', (req, res) => {
   res.render('help', {
      title: 'Help page',
      name: 'Daniel',
      helpText: 'This is some helpful text'
   })
})

app.get('/weather', (req, res) => {
   res.send({
      forecast: "15 degrees",
      location: "manizales"
   })
})

app.get('/products', (req, res) => {
   if (!req.query.address) {
      return res.send({
         erros: 'You must provide an address'
      })
   }

   geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
      if (error) {
         return res.send({
            error: "error", error
         })
      }

      forecast(latitude, longitude, (error, forecastData) => {
         if (error) {
            return res.send({
               error: "error", error
            })
         }

         res.send({
            location,
            forecastData
         })
      })
   })

})

app.get('/help/*', (req, res) => {
   res.render('errorMessage', {
      error: 'Help article not found'
   })
})

app.get('*', (req, res) => {
   res.render('errorMessage', {
      error: 'Page not found'
   })
})

app.listen(3000, () => {
   console.log('Server is up on port 3000')
})