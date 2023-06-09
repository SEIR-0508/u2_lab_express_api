const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const keanuReeves = await Actor.find({name: 'Keanu Reeves'})
    const patrickSwayze = await Actor.find({name: 'Patrick Swayze'})
    const bradPitt= await Actor.find({name: 'Brad Pitt'})
    const christophWaltz = await Actor.find({name: 'Christoph Waltz'})
    const mitsuoIwata = await Actor.find({name: 'Mitsuo Iwata'})
    const nozomuSasaki = await Actor.find({name: 'Nozomu Sasaki'})
    const matthewBroderick = await Actor.find({name: 'Matthew Broderick'})
    const alanRuck = await Actor.find({name: 'ALan Ruck'})
    const clintEastwood = await Actor.find({name: 'Clint Eastwood'})
    const eliWallach = await Actor.find({name: 'Eli Wallach'})

    const movies = [
        {
            title: 'Point Break',
            description: 'An F.B.I. Agent goes undercover to catch a gang of surfers who may be bank robbers.',
            actors: [keanuReeves._id, patrickSwayze._id],
            rating: 7.2,
            year_released: 1991,
            length_in_minutes: 122
        },
        {
            title: 'Inglorious Basterds',
            description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
            actors: [bradPitt._id, christophWaltz._id],
            rating: 8.3,
            year_released: 2009,
            length_in_minutes: 153
        },
        {
            title: 'Akira',
            description:  'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by a teenager, his gang of biker friends and a group of psychics.',
            actors: [mitsuoIwata._id, nozomuSasaki._id],
            rating: 8,
            year_released: 1988,
            length_in_minutes: 124
        },
        {
            title: "Ferris Bueller's Day Off",
            description: 'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.',
            actors: [matthewBroderick._id, alanRuck._id],
            rating: 7.8,
            year_released: 1986,
            length_in_minutes: 103
        },
        {
            title: 'The Good, The Bad, and The Ugly',
            descripton: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
            actors: [clintEastwood._id, eliWallach._id],
            rating: 8.8,
            year_released: 1966,
            length_in_minutes: 178

        }
    ]
    await Movie.insertMany(movies)
    console.log('created movies with actors')
}
const run = async () => {
    await main()
    db.close()
}

run()


   