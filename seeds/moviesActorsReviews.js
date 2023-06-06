const db = require('../db')
const { Actors, Movies, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const movie1 = await new Movies({
        name: 'Avatar',
        producer: '20th Century Studios',
        datePublished: "December 10, 2009",
        runTime: '162',
        description: `On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.`,
        poster: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg',
        rating: 2
    })
    movie1.save()

    const movie2 = await new Movies({
        name: 'Requiem for a Dream',
        producer: 'Thousand Words',
        datePublished: 'October 27, 2000',
        runTime: '102',
        description: 'tells the punishing tale of four people whose lives spiral demonically out of control as they succumb to their drug addictions.',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        rating: 5
    })
    movie2.save()

    const movie3 = await new Movies({
        name: 'Finding Nemo',
        producer: 'Walt Disner Studios',
        datePublished: 'May 30, 2003',
        runTime: '100',
        description: `Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist's fish tank.`,
        poster: `https://m.media-amazon.com/images/M/MV5BZjMxYzBiNjUtZDliNC00MDAyLTg3N2QtOWNjNmNhZGQzNDg5XkEyXkFqcGdeQXVyNjE2MjQwNjc@._V1_FMjpg_UX1000_.jpg`,
        rating: 4
    })
    movie3.save()

    const movie4 = await new Movies({
        name: '300',
        producer: 'Warner Bros',
        datePublished: 'March 09, 2007',
        runTime: '117',
        description: `In 480 B.C. a state of war exists between Persia, led by King Xerxes (Rodrigo Santoro), and Greece. At the Battle of Thermopylae, Leonidas (Gerard Butler), king of the Greek city state of Sparta, leads his badly outnumbered warriors against the massive Persian army. Though certain death awaits the Spartans, their sacrifice inspires all of Greece to unite against their common enemy.`,
        poster: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE2LpPM__U8XIBZgVJHATxO7PQU8xOcqiETN_PiWPvaj8zXuS`,
        rating: 4
    })
    movie4.save()

    const movie5 = await new Movies({
        name: 'The Incredible Hulk',
        producer: 'Marvel Studios',
        datePublished: 'June 13, 2008',
        runTime: '114',
        description: `Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).`,
        poster: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDbo9h1QIKVfLNDj0u7yZ5vMh73PS2eXUu7lN6S_l9RymQPGyS`,
        rating: 2
    })
    movie5.save()

    const actors = [
        {
            name: 'Jared Leto',
            dob: 'December 26, 1971',
            hometown: 'Bossier City, LA',
            movie: movie2._id
        },
        {
            name: 'Sigourney Weaver',
            dob: 'October 8, 1949',
            hometown: 'Manhattan, NY',
            movie: movie1._id
        },
        {
            name: 'Gerard Butler',
            dob: 'November 13, 1969',
            hometown: 'Paisley, United Kingdom',
            movie: movie4._id
        },
        {
            name: 'Willem Dafoe',
            dob: 'July 22, 1955',
            hometown: 'Appleton, WI',
            movie: movie3._id
        },
        {
            name: 'Lou Ferrigno',
            dob: 'November 9, 1951',
            hometown: `New York, NY`,
            movie: movie5._id
        }
    ]
    await Actors.insertMany(actors)
    console.log(actors)
    console.log('Actors Created')

    const reviews = [
        {
            rating: 4,
            review: `"THIS IS SPARTA", is all you need to know`,
            reviewer: `ThatFancyGuy256`,
            movie: movie4._id
        },
        {
            rating: 2,
            review: `This movie made me angry, and you won't like me when I am angry`,
            reviewer: `GreenMachine304`,
            movie: movie5._id
        },
        {
            rating: 5,
            review: `An instant cult classic!!! We've got a winner!!!`,
            reviewer: `TVFan392`,
            movie: movie2._id
        },
        {
            rating: 2,
            review: `Pretty movie, but feel this is a rip off of Dances With Wolves`,
            reviewer: `Howller994`,
            movie: movie1._id
        },
        {
            rating: 4,
            review: `Now give me some fin. This movie is amazing!!`,
            reviewer: `SurferDude9392`,
            movie: movie3._id
        }
    ]
    await Reviews.insertMany(reviews)
    console.log(reviews)
    console.log('Reviews Created')
}

const run = async () => {
    await main()
    db.close()
}

run()
