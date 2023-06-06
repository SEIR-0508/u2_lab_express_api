const db = require('../db')
const  {Movies, Actors, Reviews} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const movies1 = await new Movies({
    title: 'Twister',
    runtime: '1h 54m',
    rating: 'PG-13',
    year_released: 1996,
    genra: 'Action',
    description: 'During the approach of the most powerful storm in decades, university professor Dr. Jo Harding (Helen Hunt) and an underfunded team of students prepare the prototype for Dorothy, a ground-breaking tornado data-gathering device conceived by her estranged husband, Bill (Bill Paxton). When Harding tells Bill that Dorothy is ready for testing -- and that their privately funded rival Dr. Jonas Miller (Cary Elwes) has stolen the idea and built his own -- Bill rejoins the team for one last mission.'
    })
    movies1.save()

    const movies2 = await new Movies({
    title: 'The Fast and The Furious',
    runtime: '1h 47m',
    rating: 'PG-13',
    year_released: 2001,
    genra: 'Action',
    description: "Dominic Toretto (Vin Diesel) enjoys the adrenaline of street car racing and his fans treat him like a rock star. After a blazing encounter with the ruthless Johnny Tran, Dom decides to take Brian (Paul Walker), a newcomer to street racing, under his wing. Dom's sister Mia sees something she likes in Brian, too. Trouble is, neither of them realize he's an undercover cop, and Dominic and his rival Johnny Tran are both the prime suspects in a case involving dirty money and big-rig hijacking."
    })
    movies2.save()

    const movies3 = await new Movies({
    title: 'Drive',
    runtime: '1h 40m',
    rating: 'R',
    year_released: 2011,
    genra: 'Action',
    description: "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery."
    })
    movies3.save()

    const movies4 = await new Movies({
    title: 'There Will Be Blood',
    runtime: '2h 38m',
    rating: 'R',
    year_released: 2007,
    genra: 'Drama',
    description: 'Silver miner Daniel Plainview (Daniel Day-Lewis) leads a hardscrabble life with his son, H.W. (Dillon Freasier). When he hears about oil oozing from the ground near the Western town of Little Boston, Daniel takes his son on a mission to find their fortune. Daniel makes his lucky strike and becomes a self-made tycoon but, as his fortune grows, he deviates into moral bankruptcy.'
    })
    movies4.save()

    const movies5 = await new Movies({
    title: 'The Martian',
    runtime: '2h 22m',
    rating: 'PG-13',
    year_released: 2015,
    genra: 'Sci-fi',
    description: 'When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission'
    })
    movies5.save()


    const actors = [    
    {
        name: 'Bill Paxton',
        age: 61,
        living: false,
        starring_in: movies1._id
    },
    {
        name: 'Vin Diesel',
        age: 55,
        living: true,
        starring_in: movies2._id
    },
    {
        name: 'Ryan Gosling',
        age: 42,
        living: true,
        starring_in: movies3._id
    },
    {
        name: 'Daniel Day-Lewis',
        age: 66,
        living: true,
        starring_in: movies4._id
    },
    {
        name: 'Matt Damon',
        age: 52,
        living: true,
        starring_in: movies5._id
    },
    ]
        const reviews = [

                {
            Reviewed_movie: movies1._id,
            comments: 'Watch Bill Paxton run toward danger then immediately away.  Destry the teams vehicles and ignore his fiance',
            review: '58%'
                },
                {
            Reviewed_movie: movies2._id,
            comments: 'Enter the high stakes world of street racing and VCR theft. The first and last in the series to be about cars.',
            review: '74%'
                },
                {
            Reviewed_movie: movies3._id,
            comments: 'love Ryan Gosling but hate hering him talk?  we have a movie for you.',
            review: '79%'
                },
                {
            Reviewed_movie: movies4._id,
            comments: 'Everyone in this movie is terrible accept H.W. Poor H.W.',
            review: '86%'
                },
                {
            Reviewed_movie: movies5._id,
            comments: 'Po-ta-tos',
            review: '91%'
                },
             
        ]

    await Actors.insertMany(actors)
    console.log('Movies created')

    await Reviews.insertMany(reviews)
    console.log('Reviews created')
}

    const run = async () => {
    await main()
    db.close()
}

run()