const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = await Movie.find({})
    const reviews = [
        {
            title: `Great fun in the vein of "Indiana Jones"...`,
            score: 8,
            content: `"The Mummy" is an adventurous yarn in the vein of "Indiana Jones." It's a lot of fun, very charming, and never tries to be more than what it is. What is it? An entertaining summer flick which is not only worth seeing, but perhaps even owning. It's one of those fun movies you can return to over and over again and never grow tired of doing so.`,
            url: `https://www.imdb.com/review/rw0446711/`,
            date: 'October 7, 2003',
            movie_id: movies[0]._id
        },
        {
            title: `Bit Overlong, But Still The Word Is 'Fun'`,
            score: 8,
            content: `It seems like a long time ago when this came out, but I remember it being the first DVD I had ever bought sight unseen, meaning I had never seen the film in the theater. I was pleased. I got what I had hoped for: a fun, special-effects extravaganza.`,
            url: `https://www.imdb.com/review/rw1330750/`,
            date: 'April 1, 2006',
            movie_id: movies[0]._id
        },
        {
            title: `Majesty in the Desert`,
            score: 10,
            content: `The moment David Lean makes you aware you are in the hands of a master comes early on in "Lawrence of Arabia." Lawrence (Peter O'Toole) holds a lit match close to his lips and with one quick puff of air blows it out. Before the action is even completed, however, Lean has cut to a shot of a desert vista, with the sun slowly rising over the lip of the horizon. It's one of the most famous elliptical edits in cinema history, second maybe only to the bone/spaceship cut in "2001: A Space Odyssey." And it's only the first of countless memorable moments in "Lawrence of Arabia."`,
            url: `https://www.imdb.com/review/rw1070007/`,
            date: 'April 29, 2005',
            movie_id: movies[0]._id
        },
        {
            title: `A True Must See`,
            score: 10,
            content: `"Lawrence of Arabia" is either the greatest movie ever made, or the second greatest. The true power and scope has only been matched by few other films. It is a film that really does stand the test of time. In an age where special effect driven films are king(as much as i like those), it is great to watch a film where you truly see thousands of people charging a fort on horse, and camel, back. It's a long ride, but it is never boring. It is full of fantastic characters acted out by even better actors. Peter O'Toole should have won every acting award available to win. His performance is consistently ranked among the greatest in movie history.`,
            url: `https://www.imdb.com/review/rw4235683/`,
            date: 'July 12, 2018',
            movie_id: movies[0]._id
        },
        {
            title: `All Good Things come to an End!`,
            score: 10,
            content: `All the threads of Tolkien's magnum opus come together in the most elegant of fashions in the final part of Peter Jackson's adaptation. Humanity makes a last stand at Minas Tirith, the Hobbits travel through Mordor, our heroes try to by time for Frodo to complete his mission and the Evil Sauron gets tired of the whole game and lashes out with all his might and fury.`,
            url: `https://www.imdb.com/review/rw1527346/`,
            date: 'November 22, 2006',
            movie_id: movies[0]._id
        },
        {
            title: `Unprecedented.`,
            score: 10,
            content: `Peter Jackson has done it. He has created an all-encompassing epic saga of Tolkien's Lord of the Rings books, and after coming away from the final chapter, how does this rate not only as a film on its own, but as a part of the whole?

            Perfect.`,
            url: `https://www.imdb.com/review/rw0583297/`,
            date: 'December 17, 2003',
            movie_id: movies[0]._id
        }
    ]
    await Review.deleteMany()
    await Review.insertMany(reviews)
    console.log('created reviews')
}

const run = async () => {
    await main()
    db.close()
}

run()