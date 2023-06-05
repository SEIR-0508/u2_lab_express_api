const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const getOut = await Movie.find({ title: "Get Out" })
    const dontWorryDarling = await Movie.find({ title: "Don't Worry, Darling" })
    const beauIsAfraid = await Movie.find({ title: "Beau is Afraid" })
    const reviews = [
        {
           score: 9,
           comment: "High expectations were not only met but also exceeded. Apologies for the cliché, but to me that is the best way to sum up my personal experience watching 'Get Out'. Can totally see why it was as well received as it was, though can also see why it has divided audiences on here. While it will never be one of my favourite films, 'Get Out' is among the better films of 2017 and does live up to the hype.",
           movie: getOut[0].title
        },
        {
            score: 6,
            comment: "This is one of those movies where the entire film feels like it's missing something.",
            movie: dontWorryDarling[0].title
        },
        {
            score: 9,
            comment: "What do I even say? I don't know. This movie broke my brain. I'm seriously stuck. It's been two hours and my mind is still racing. Like the headline, much of what I say may sound negative, but I mean it in the best possible way. This movie is indescribably weird, outlandish, absurd and insane. So many times I thought to myself, What am I watching? This is dark comedy at it's finest. It's so messed up. And I was cracking up. Like everything else in this movie, it takes it to the extreme.",
            movie: beauIsAfraid[0].title
        },
        {
            score: 7,
            comment: "Beau is Afriad isn't afraid to go all out in every scene. The studio that made this film (A24) also funded it as one of their most expensive films to date. The budget is used to its fullest potential here and the effort leaps off the screen. It's weird, visually stunning, and Phoenix's lead performance is stellar. Other than those aspects though, I was underwhelmed by the story. Still, if you're a film buff who likes to watch all movies, I recommend it, but to any casual viewer, I would say stay far, far away, it's probably not for you. It's a fantastic film to look at and follow along with, but it's simply not great otherwise in my opinion.",
            movie: beauIsAfraid[0].title
        },
        {
            score: 5,
            comment: "Truly style over substance",
            movie: dontWorryDarling[0].title
        },
        {
            score: 8,
            comment: "Satire doesn't get much darker than this, a perspective derived from the opposite of bliss, the frictions and prejudice society draws, to control and manipulate, exploit and ignore. What would you do, if someone took control of you, could control you're every move, set the tempo to your groove, had the first and final say, how you went about your day, chose the things that you would do, when and where, with what, with who. If you tried to make a stand, put a halt or raise a hand, the mighty structures that surround, would envelop and impound, one for all and all for one, will ensure you'll soon be gone, but be under little doubt, that you're never getting out. An outstanding piece of cinema and satirical observation with added barbs.",
            movie: getOut[0].title
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created reviews with movies!')
}

const run = async () => {
    await main()
    db.close()
}

run()