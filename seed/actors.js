const db = require('../db')
const { Actors } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const actors = [
    {
      name: 'Robert Deniro',
      age: 79,
      active: 'Yes'

    },
    {
      name: 'Marlon Brando',
      age: 80,
      active: 'No'
    },
    {
      name: 'Al Pachino',
      age: 83,
      active: 'Yes'
    },
    {
      name: 'James Caan',
      age: 82,
      active: 'No'
    },
    {
      name: 'Diane Keaton',
      age: 77,
      active: 'Yes'
      }

]
 
 
  await Actors.insertMany(actors)
  // using console.log to see the data we've seen
  console.log('Created actors!')
}


const run = async () => {

  await main()
 
  db.close()
}

run()