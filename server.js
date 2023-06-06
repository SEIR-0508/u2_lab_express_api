const db = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
const Actors = require('./controllers/actorsController')
const Movies = require('./controllers/movieController')
const Reviews = require('./controllers/reviewsController')

const AppRouter = require('./routes/appRouter')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

db.on('error', console.error.bind(console,'MongoDB not running'))

const PORT = 3001
app.use('/', AppRouter)
app.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}`))