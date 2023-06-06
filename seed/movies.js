const db = require('../db')
const { Movies } = require('../models')

db.on('error', console.error.bine(console, 'connect fail'))

const insertMovies = async () => {
    const movies = [
        {
            title: 'Harry Potter and the Prisoner of Azkaban',
            runtime: 142,
            yearRelease: 2004,
            briefDescription: 'a 2004 fantasy film directed by Alfonso Cuarón from a screenplay by Steve Kloves, based on the 1999 novel of the same name by J. K. Rowling'
        },
        {
            title: 'Titanic',
            runtime: 195,
            yearRelease: 1997,
            briefDescription: 'It is based on accounts of the sinking of RMS Titanic and stars Kate Winslet and Leonardo DiCaprio as members of different social classes who fall in love aboard the ship during its ill-fated maiden voyage'
        },
        {
            title: 'The Avengers',
            runtime: 143,
            yearRelease: 2012,
            briefDescription: `When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth.`
        },
        {
            title: 'Avatar',
            runtime: 162,
            yearRelease: 2009,
            briefDescription: 'In 2154, the natural resources of the Earth have been depleted. The Resources Development Administration (RDA) mines the valuable mineral unobtanium on Pandora, a moon in the Alpha Centauri star system.'
        },
        {
            title: 'Pride and Prejudice',
            runtime: 129,
            yearRelease: 2005,
            briefDescription: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?'
        }
    ]

    await Movies.insertMany(movies)
    console.log('movies inserted')
}

const run = async () => {
    await insertMovies()
    db.close()
}

run()