const db = require('../db')
const {Reviews, Movies} = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const moviesArray = await Movies.find() 
    const reviews = [
      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 5,
        comment: 'Snoozefest'
  
      },
      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 8,
        comment: 'Amazing movie, 5 stars'
      },

      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 10,
        comment: 'A film masterpiece!!!'
  
      },
      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 10,
        comment: 'Breaking the mold in cinema as we know it!'
      },

      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 0,
        comment: 'Who signed off on this??'
  
      },
      {
        movieID: moviesArray[Math.floor(Math.random() * moviesArray.length)]._id,
        score: 5,
        comment: 'Very mid, as the kids say'
      },



    ]
 
 
    await Reviews.insertMany(reviews)
    // using console.log to see the data we've seen
    console.log('Created reviews!')
  }
  
  
  const run = async () => {
  
    await main()
   
    db.close()
  }
  
  run() 