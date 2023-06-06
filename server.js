const express = require('express')


const db = require('./db');

const PORT = process.env.PORT || 3002
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing server
app.listen(PORT, () => console.log(`Server running on ${PORT}`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))





