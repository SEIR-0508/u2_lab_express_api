// connect to moviesDatabase using mongoose boilerplate
const mongoose = require('mongoose')
mongoose
.connect('mongodb://127.0.0.1:27017/moviesDatabase')
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.error('connection error', error.message)
})
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db