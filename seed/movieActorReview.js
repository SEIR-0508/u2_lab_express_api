const db = require("../db");
const { Movie, Actor, Review } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createMovies = async () => {
    const movies = [
        new Movie({
            title: "Shrek",
            runtime: 90,
            rating: "PG",
            releaseYear: 2001,
            description: `A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.`,
        }),
        new Movie({
            title: "Kung Fu Panda",
            runtime: 92,
            rating: "PG",
            releaseYear: 2008,
            description: `To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valley's arch-enemy is on his way.`,
        }),
        new Movie({
            title: "Shark Tale",
            runtime: 90,
            rating: "PG",
            releaseYear: 2004,
            description: `When a son of a gangster shark boss is accidentally killed while on the hunt, his would-be prey and his vegetarian brother decide to use the incident to their own advantage.`,
        }),
        new Movie({
            title: "Seven",
            runtime: 125,
            rating: "R",
            releaseYear: 1995,
            description: `Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.`,
        }),
        new Movie({
            title: "The Matrix",
            runtime: 136,
            rating: "R",
            releaseYear: 1999,
            description: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`,
        }),
    ];

    await Movie.insertMany(movies);
    console.log("Created movies!");
    return movies;
};

const createActors = async (movies) => {
    // working through a couple different ways of pulling out the object id based on title
    console.log(movies.find((mov) => mov.title === "Shrek")._id);

    // alternative way -
    // const movieMap = new Map(movies.map((movie) => [movie.title, movie]));
    // console.log(movieMap);

    const actors = [
        {
            name: "Mike Myers",
            age: 62,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "Shrek")._id],
            /// doing it this way will require that each individual object in the array is a new movie. Otherwise the internal movies variable that is returned and passed into the create actors function will not have an object id to assign.
            // alternative way to do the above code that might be a bit faster
            // movie_IDs: [movieMap.get("Shrek")]
        },
        {
            name: "Eddie Murphy",
            age: 60,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "Shrek")._id],
        },
        {
            name: "Jack Black",
            age: 53,
            alive: true,
            movie_IDs: [
                movies.find((mov) => mov.title === "Kung Fu Panda")._id,
                movies.find((mov) => mov.title === "Shark Tale")._id,
            ],
        },
        {
            name: "Jackie Chan",
            age: 69,
            alive: true,
            movie_IDs: [
                movies.find((mov) => mov.title === "Kung Fu Panda")._id,
            ],
        },
        {
            name: "Will Smith",
            age: 53,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "Shark Tale")._id],
        },
        {
            name: "Angelina Jolie",
            age: 53,
            alive: true,
            movie_IDs: [
                movies.find((mov) => mov.title === "Shark Tale")._id,
                movies.find((mov) => mov.title === "Kung Fu Panda")._id,
            ],
        },
        {
            name: "Brad Pitt",
            age: 59,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "Seven")._id],
        },
        {
            name: "Morgan Freeman",
            age: 86,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "Seven")._id],
        },
        {
            name: "Keanu Reeves",
            age: 58,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "The Matrix")._id],
        },
        {
            name: "Laurence Fishburne",
            age: 61,
            alive: true,
            movie_IDs: [movies.find((mov) => mov.title === "The Matrix")._id],
        },
    ];

    await Actor.insertMany(actors);
    console.log("Created actors!");
};

const createReviews = async (movies) => {
    const reviews = [
        {
            score: 9,
            comment:
                "Shrek is a motivational character who teaches us to push beyond what we think is possible.",
            movie_ID: movies.find((mov) => mov.title === "Shrek"),
        },
        {
            score: 8,
            comment: "Love Donkey",
            movie_ID: movies.find((mov) => mov.title === "Shrek"),
        },
        {
            score: 10,
            comment: "Kung Fu Panda is a cinmatic masterpiece",
            movie_ID: movies.find((mov) => mov.title === "Kung Fu Panda"),
        },
        {
            score: 7,
            comment: "Why can't they just talk through their issues?",
            movie_ID: movies.find((mov) => mov.title === "Kung Fu Panda"),
        },
        {
            score: 9,
            comment: "Would love to download information right into my head",
            movie_ID: movies.find((mov) => mov.title === "The Matrix"),
        },
        {
            score: 8,
            comment:
                "I's take the blue pill but it has to be Morpheus giving it to me. ",
            movie_ID: movies.find((mov) => mov.title === "The Matrix"),
        },
    ];

    await Review.insertMany(reviews);
    console.log("created actors!");
};

const run = async () => {
    await Movie.deleteMany({});
    await Actor.deleteMany({});
    await Review.deleteMany({});
    const movies = await createMovies();
    await createActors(movies);
    await createReviews(movies);
    db.close();
};

run();
