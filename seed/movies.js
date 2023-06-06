const db = require('./db')
const Movie = require('..models/movie')
const Review = require('..models/review')
const Actor = require('../models/actor')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        { 
            title: 'Planet of the Apes',
            runtime: 112,
            rating: 87,
            year: 1968,
            description: 'Complex sociological themes run through this science-fiction classic about three astronauts marooned on a futuristic planet where apes rule and humans are slaves. The stunned trio discovers that these highly intellectual simians can both walk upright and talk. They have even established a class system and a political structure. The astronauts suddenly find themselves part of a devalued species, trapped and imprisoned by the apes.'
        },
        { 
            title: 'Beneath the Planet of the Apes',
            runtime: 95,
            rating: 37,
            year: 1970,
            description: 'The second installment in "The Planet of the Apes" series. Here, an earthling sent to find the astronauts of the original film discovers not only a world of intelligent, talking apes, but an underground cult of grotesque "humans" who are the survivors of a nuclear blast years ago.'
        },
        { 
            title: 'Escape From  the Planet of the Apes',
            runtime: 98,
            rating: 77,
            year: 1971,
            description: `In this second sequel to "Planet of the Apes," three apes flee their world before it's destroyed, and travel back in time to present-day America. When the humans discover that the trio are intelligent and capable of speech, they treat them as experimental research animals until they attempt to escape.`,
        },
        { 
            title: 'Conquest of the Planet of the Apes',
            runtime: 86,
            rating: 52,
            year: 1972,
            description: `In this third sequel to "Planet of the Apes," the apes turn the tables on the human Earth population when they lead a revolt against their cruel masters in the distant year of 1990. By doing this it creates the time loop that leads to the first film. "Conquest of the Planet of the Apes" is cinematically etched in broad, brash strokes slashing social satire and science fiction suspense with large-scale spectacle.`,
        },
        { 
            title: 'Battle For the Planet of the Apes',
            runtime: 93,
            rating: 36,
            year: 1973,
            description: `"Battle for the Planet of the Apes" is the final chapter in the sci-fi movie series. In this chapter, a tribute of human atomic bomb mutations are out to make life miserable for the peaceful ape tribe. The story is told primarily in flashback with the opening and closing taking place in the year 2670.`,
        },
    ]

    const actors = [
        {
            name: `Charlton Heston`,
            age: 84,
            alive: false
        },
        {
            name: `Roddy McDowall`,
            age: 70,
            alive: false
        },
        {
            name: `Kim Hunter`,
            age: 79,
            alive: false
        },
        {
            name: `Maurice Evans`,
            age: 87,
            alive: false
        },
        {
            name: `Linda Harrison`,
            age: 77,
            alive: true
        },
        {
            name: `James Franciscus`,
            age: 57,
            alive: false
        },
        {
            name: `Bradford Dillman`,
            age: 87,
            alive: false
        },
        {
            name: `Ricardo Montalban`,
            age: 88,
            alive: false
        },
        {
            name: `Claude Akins`,
            age: 67,
            alive: false
        },
        {
            name: `Natalie Trundy`,
            age: 79,
            alive: false
        }
    ]

    const reviews = [
        {
            blurb: `Planet of the Apes (1968) is a classic, thought-provoking and engrossing science fiction film that was the loosely-adapted film version of Pierre Boule's 1963 science-fiction novel La Planète Des Singes (Monkey Planet).`,
            critic: `Tim Dirks` 
        },
        {
            blurb: `The picture is an enormous many-layered black joke on the hero and the audience, and part of the joke is the use of Charlton Heston as the hero. I don't think the movie could have been so forceful or so funny with anyone else.`,
            critic: `Pauline Kael`
        },
        {
            blurb: `There's no question that with its mishmash of half-baked ideas, lack of strong characterization and clear budgetary issues, Beneath represents a steep drop in overall quality from the magnificent Planet of the Apes.`,
            critic: `Don Kaye`
        },
        {
            blurb: `The first sequel to the enormously successful Planet of the Apes is also the best. Less subtle and profound than its predecessor, it's still an exciting and colourful action adventure.`,
            critic: `Alan Jones`
        },
        {
            blurb: `The film is likeable as well as amusing; it even has a note of pathos, something alien from its predecessors.`,
            critic: `Dilys Powell`
        },
        {
            blurb: `Passable entertainment, but it's no fun watching the likable, witty Cornelius and Zira become hairy martyrs.`,
            critic: `Rob Gonsalves`
        },
        {
            blurb: `The darkest and most violent chapter in a series that had fairly distinguished itself already with its dark subject matter and disturbing imagery.`,
            critic: `Zaki Hasan`
        },
        {
            blurb: `This bleak chapter of the Apes saga strived to echo the sentiments of many of its fellow films released that year. Not easy to do in a cheap monkey mask.`,
            critic: `Max Messier`
        },
        {
            blurb: `Some solid ideas at its center expounding on the series' omnipresent themes of race relations and destiny vs. free will, but is hobbled by its too-apparent dime-store budget and a singular lack of ambition.`,
            critic: `Zaki Hasan`
        },
        {
            blurb: `The problem here is basically one of script, though the lowering of production values has taken its toll.`,
            critic: `Dick Lochte`
        }
    
        ]




    await Movie.insertMany(movies)
    console.log("movies populated")
    await Actor.insertMany(actors)
    console.log("actors populated")
    await Reviews.insertMany(reviews)
    console.log("ratings populated")
}
const run = async () => {
    await main()
    db.close()
}

run()