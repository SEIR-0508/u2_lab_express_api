
const db = require('./db')
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/appRouter')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const app = express()

app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })

  app.get('/', (req, res) => {
    res.send('Server is Working!!!')
})

app.use('/', AppRouter)