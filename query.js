const db = require('./db')
const { Actors, Movies, Reviews } = require('./models')

const createActor = async (name, dob, hometown, movieName) => {
    const movie = await Movies.findOne({ name: movieName})
    let actor = await Actors.create({
        name: name,
        dob: dob,
        hometown: hometown,
        movie: movie._id
    })
}

const updateActor = async (id, whatToUpdate, update) => {
    const actor = await Actors.findByIdAndUpdate(id, {[whatToUpdate]: update})
}

const deleteActor = async (id) => {
    const actor = await Actors.findByIdAndDelete(id)
}

const createMovie = async (name, producer, datePublished, runTime, description, poster, rating) => {
    let movie = new Movies.create({
        name: name,
        producer: producer,
        datePublished: datePublished,
        runTime: runTime,
        description: description,
        poster: poster,
        rating: rating
    })
}

const updateMovie = async (id, whatToUpdate, update) => {
    const movie = await Movies.findByIdAndUpdate(id, {[whatToUpdate]: update})
}

const deleteMovie = async (id) => {
    const movie = await Movies.findByIdAndDelete(id)
}

const createReview = async (rating, review, reviewer, movieId) => {
    const movie = await Movies.findById(movieId)
    let newreview = new Reviews.create({
        rating: rating,
        review: review,
        reviewer: reviewer,
        movie: movie._id
    })
}

const updateReview = async (id, whatToUpdate, update) => {
    const review = await Reviews.findByIdAndUpdate(id, {[whatToUpdate]: update})
}


async function main() {
    try {
        // await createActor()
         await updateActor('647e6e0e2ed05b9dce0e5e56', 'name', 'Sigourney Weaver')
        // await deleteActor()
        // await createMovie()
        // await updateMovie()
        // await deleteMovie()
        // await createReview()
        // await updateReview()
        // await deleteReview
    } catch (e) {
        console.log(e)
    } finally {
        await db.close()
    }
}

main()