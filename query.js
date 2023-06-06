const db = require("./db");
const { Movie, Actor, Review } = require("./models");

const createReview = async (score, comment, movie) => {
    let movietest = await Movie.find({ title: movie });

    let movieID = movietest[0]._id;

    const newReview = new Review({
        score: score,
        comment: comment,
        movie_ID: movieID,
    });

    await newReview.save();
    console.log(`created new reveiw for ${movie}`);
};

const updateActor = async (actorName, key, newValue) => {
    await Actor.updateOne({ name: actorName }, { $set: { [key]: newValue } });
    console.log(`updated ${actorName}`);
};

const deleteMovie = async (movieName) => {
    await Movie.deleteOne({ title: movieName });
    console.log(`deleted ${movieName}`);
};

const runQuery = async () => {
    try {
        // await createReview(9, "pretty good", "Shrek");
        // await updateActor("Jack Black", "age", 54);
        await deleteMovie("Shark Tale");
    } catch (error) {
        console.log(error);
    } finally {
        await db.close();
    }
};

runQuery();
