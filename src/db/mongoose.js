const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
if ( process.env.NODE_ENV === 'production') {
  var connectionURL = process.env.API_KEY
} else {
  const credentials = require('../config.js')
  var connectionURL = credentials.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
