const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
if ( process.env.NODE_ENV === 'production') {
  var connectionURL = process.env.connectionURL
} else {
  const credentials = require('../config.js')
  var connectionURL = credentials.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
