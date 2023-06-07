
const db = require('./db')
const express = require('express')
const PORT = process.env.PORT || 3001
// const { Movie, Actor, Review } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express();
app.use(express.json())



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })