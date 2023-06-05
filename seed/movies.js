const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
    {
        title: 'Lawrence of Arabia',
        director: 'David Lean',
        release_year: '1962',
        genre: ['adventure', 'drama', 'biography'],
        runtime: 218,
        rating: 8.3,
        description: `The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.`,
        poster: `https://i.imgur.com/f84hW45.jpg?1`
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        director: 'Peter Jackson',
        release_year: '2003',
        genre: ['adventure', 'fantasy'],
        runtime: 201,
        rating: 9.0,
        description: `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
        poster: `https://i.imgur.com/ieFVUOJ.jpg?1`
    },
    {
        title: `Ocean's 8`,
        director: 'Gary Ross',
        release_year: '2018',
        genre: ['action', 'comedy', 'crime'],
        runtime: 110,
        rating: 6.3,
        description: `Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's annual Met Gala.`,
        poster: `https://i.imgur.com/HSmXDkK.jpg`
    },
    {
        title: 'The Mummy',
        director: 'Stephen Sommers',
        release_year: '1999',
        genre: ['adventure', 'action', 'fantasy'],
        runtime: 124,
        rating: 7.1,
        description: `At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.`,
        poster: `https://i.imgur.com/u4ZhgAf.jpg`
    },
    {
        title: 'Mad Max: Fury Road',
        director: 'George Miller',
        release_year: '2015',
        genre: ['action', 'adventure', 'sci-fi'],
        runtime: 120,
        rating: 8.1,
        description: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.`,
        poster: `https://i.imgur.com/o4l1k5L.jpg`
    }
    ]
    await Movie.insertMany(movies)
    console.log('created movies')
}

const run = async () => {
    await main()
    db.close()
}

run()