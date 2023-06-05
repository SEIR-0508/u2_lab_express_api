const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Actor, Movie, Review } = require('./models')


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send()
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})