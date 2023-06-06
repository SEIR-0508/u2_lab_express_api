const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
//const {Movies, Actors, Reviews} = require('./models')
const AppRouter = require('./routes/AppRouter')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

app.get('/', (req, res) => res.json({message: 'This is loading page'}))

app.use('/api', AppRouter)