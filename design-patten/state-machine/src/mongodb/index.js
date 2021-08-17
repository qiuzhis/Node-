const mongoose = require('mongoose')

require('./schema/transition')


const database = () => {
  mongoose.set('debug', true)
  mongoose.connect('mongodb://localhost/state-machine')

  mongoose.connection.on('disconnected', () => {
    mongoose.connect('mongodb://localhost/state-machine')
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })
}

database()
