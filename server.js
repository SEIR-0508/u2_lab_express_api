
const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter.js')


const app = express()



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/api', AppRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))