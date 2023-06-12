const express = require('express')
const db = require('./db')
const PORT = 3001
const app = express()
const cors = require('cors')
const AppRouter = require('./routes/AppRouter')




app.use(express.json())
app.use(cors())



app.listen(PORT, () => {
    console.log(`express server running on port ${PORT} `)

})



// app.get('/', async (req, res)=> {
//     let movie = await Movies.find() 
//     res.send(movie)
// })

// app.get('/review', async (req, res)=> {
//     let review = await Reviews.find() 
//     res.send(review)
// })


app.use('/api', AppRouter)



