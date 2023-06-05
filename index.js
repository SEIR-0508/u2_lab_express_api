const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const AppRouter = require(`./routes/AppRouter`)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('server working')
})

app.use(`/api`, AppRouter)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})