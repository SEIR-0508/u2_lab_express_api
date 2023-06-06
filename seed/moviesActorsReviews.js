const db = require('../db')
const { Movie, Actor, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movie1 = await new Movie(
        {
            title: `Harry Potter and the Sorcerer's Stone`,
            runtime: `2h 32m`,
            rating: `PG`,
            year_released: '2001',
            description: `An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.`,
            actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton', 'Alan Rickman']
        }
    )
    movie1.save()
    const movie2 = await new Movie(
        {
            title: `Harry Potter and the Chamber of Secrets`,
            runtime: `2h 41m`,
            rating: `PG`,
            year_released: '2002',
            description: `An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.`,
            actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton', 'Alan Rickman']
        }
    )
    movie2.save()

    const movie3 = await new Movie(
        {
            title: `Harry Potter and the Prisoner of Azkaban`,
            runtime: `2h 19m`,
            rating: `PG`,
            year_released: '2004',
            description: `Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.`,
            actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton', 'Alan Rickman', 'Michael Gambon', 'Gary Oldman', 'David Thewlis']
        }
    )
    movie3.save()
    const movie4 = await new Movie(
        {
            title: `Harry Potter and the Goblet of Fire`,
            runtime: `2h 37m`,
            rating: `PG-13`,
            year_released: '2005',
            description: `Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.`,
            actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton', 'Alan Rickman', 'Michael Gambon', 'Robert Pattison', 'Ralph Fiennes']
        }
    )
    movie4.save()
    const movie5 = await new Movie(
        {
            title: `Harry Potter and the Order of the Phoenix`,
            runtime: `2h 18m`,
            rating: `PG-13`,
            year_released: '2007',
            description: `With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.`,
            actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Tom Felton', 'Alan Rickman', 'Michael Gambon', 'Gary Oldman', 'David Thewlis', 'Ralph Fiennes']
        }
    )
    movie5.save()
    
    const actors = [
        {
            name: 'Daniel Radcliffe',
            age: '33',
            alive: true,
            movies: [movie1._id, movie2._id, movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Rupert Grint',
            age: '34',
            alive: true,
            movies: [movie1._id, movie2._id, movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Emma Watson',
            age: '33',
            alive: true,
            movies: [movie1._id, movie2._id, movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Tom Felton',
            age: '34',
            alive: true,
            movies: [movie1._id, movie2._id, movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Alan Rickman',
            age: '70',
            alive: false,
            movies: [movie1._id, movie2._id, movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Michael Gambon',
            age: '82',
            alive: true,
            movies: [movie3._id, movie4._id, movie5._id]
        },
        {
            name: 'Gary Oldman',
            age: '65',
            alive: true,
            movies: [movie3._id, movie5._id]
        },
        {
            name: 'David Thewlis',
            age: '60',
            alive: true,
            movies: [movie3._id, movie5._id]
        },
        {
            name: 'Robert Pattinson',
            age: '37',
            alive: true,
            movies: [movie4._id]
        },
        {
            name: 'Ralph Fiennes',
            age: '60',
            alive: true,
            movies: [movie4._id, movie5._id]
        }
    ]
    await Actor.insertMany(actors)
    console.log('Created Actors!')

    const reviews = [
        {
            movie: movie1._id,
            score: 81,
            comment: `Harry Potter and the Sorcerer's Stone adapts its source material faithfully while condensing the novel's overstuffed narrative into an involving -- and often downright exciting -- big-screen magical caper.`,
        },
        {
            movie: movie1._id,
            score: 88,
            comment: `A classic movie with a fantastic set of actors who established the world of Hogwarts flawlessly.`
        },
        {
            movie: movie2._id,
            score: 82,
            comment: `Though perhaps more enchanting for younger audiences, Chamber of Secrets is nevertheless both darker and livelier than its predecessor, expanding and improving upon the first film's universe.`,
        },
        {
            movie: movie2._id,
            score: 92,
            comment: `One of the best movies in the Harry Potter franchise. Darker in nature than the previous installment with many creepy scenes and voice acting.`
        },
        {
            movie: movie3._id,
            score: 90,
            comment: `Under the assured direction of Alfonso Cuaron, Harry Potter and the Prisoner of Azkaban triumphantly strikes a delicate balance between technical wizardry and complex storytelling.`,
        },
        {
            movie: movie3._id,
            score: 86,
            comment: 'My personal favorite of the books, and a great movie as well. The twist at the end was beautifully crafted and captured in the movie edition.'
        },
        {
            movie: movie4._id,
            score: 88,
            comment: `The main characters are maturing, and the filmmakers are likewise improving on their craft; vibrant special effects and assured performances add up to what is the most complex yet of the Harry Potter films.`,
        },
        {
            movie: movie5._id,
            score: 78,
            comment: `It's not easy to take the longest Harry Potter book and streamline it into the shortest HP movie, but director David Yates does a bang up job of it, creating an Order of the Phoenix that's entertaining and action-packed.`,
        },
    ]
    await Review.insertMany(reviews)
    console.log('Created Reviews!')
}

const run = async() => {
    await main()
    db.close()
}

run()