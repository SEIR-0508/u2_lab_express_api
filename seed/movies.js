const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const margotRobbie = await Actor.find({ name: 'Margot Robbie' })
    const merylStreep = await Actor.find({ name: 'Meryl Streep' })
    const marilynMonroe = await Actor.find({ name: 'Marilyn Monroe' })
    const henryCavill = await Actor.find({ name: 'Henry Cavill' })
    const judyGarland = await Actor.find({ name: 'Judy Garland' })

    const movies = [
        {
            title: 'Suicide Squad',
            runtime: 123,
            rating: 'PG-13',
            yearReleased: 2016,
            description: 'A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.',
            actor: margotRobbie[0]._id
        },
        {
            title: 'Birds of Prey',
            runtime: 109,
            rating: 'R',
            yearReleased: 2020,
            description: 'After splitting with the Joker, Harley Quinn joins superheroines Black Canary, Huntress, and Renee Montoya to save a young girl from an evil crime lord.',
            actor: margotRobbie[0]._id
        },
        {
            title: 'The Devil Wears Prada',
            runtime: 109,
            rating: 'PG-13',
            yearReleased: 2006,
            description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
            actor: merylStreep[0]._id
        },
        {
            title: 'Mama Mia!',
            runtime: 108,
            rating: 'PG-13',
            yearReleased: 2008,
            description: 'The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.',
            actor: merylStreep[0]._id
        },
        {
            title: 'The Prince and the Showgirl',
            runtime: 115,
            rating: 'PG',
            yearReleased: 1957,
            description: 'An American showgirl becomes entangled in political intrigue when the Prince Regent of a foreign country attempts to seduce her.',
            actor: marilynMonroe[0]._id
        },
        {
            title: 'Some Like It Hot',
            runtime: 121,
            rating: 'Passed',
            yearReleased: 1959,
            description: 'After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.',
            actor: marilynMonroe[0]._id
        },
        {
            title: 'Enola Holmes',
            runtime: 123,
            rating: 'PG-13',
            yearReleased: 2020,
            description: `When Enola Holmes (Sherlock's teen sister) discovers her mother is missing, she endeavors to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy.`,
            actor: henryCavill[0]._id
        },
        {
            title: 'Enola Holmes 2',
            runtime: 129,
            rating: 'PG-13',
            yearReleased: 2022,
            description: `Now a detective-for-hire, Enola Holmes takes on her first official case to find a missing girl as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends - and Sherlock himself - to unravel.`,
            actor: henryCavill[0]._id
        },
        {
            title: 'The Wizard of Oz',
            runtime: 102,
            rating: 'G',
            yearReleased: 1939, 
            description: `Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others' wishes.`,
            actor: judyGarland[0]._id
        },
        {
            title: 'A Star is Born',
            runtime: 154,
            rating: 'Passed',
            yearReleased: 1954,
            description: `A film star helps a young singer and actress find fame, even as age and alcoholism send his own career on a downward spiral.`,
            actor: judyGarland[0]._id
        }
    ]
    await Movie.insertMany(movies)
    console.log('Created movies!')
}

const run = async () => {
      await main()
      db.close()
    }
    run()