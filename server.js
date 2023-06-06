const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter')
const landingPage = require('./controllers/moviesController')

const app = express()

app.get('/', landingPage.findMovies)
app.use('/api', AppRouter)

app.listen(PORT, () => {
    console.log(`Express servers on port: ${PORT}`)
})

// movie id => 647e6e0e2ed05b9dce0e5e52 (finding nemo)
// actor id => 647e6e0e2ed05b9dce0e5e57 (gerard butler)
// review id => 647e6e0f2ed05b9dce0e5e68 (TVFan392)

