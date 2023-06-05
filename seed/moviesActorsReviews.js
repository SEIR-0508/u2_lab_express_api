const db = require('../db');
const { Movie, Actor, Review } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async() => {
      // MOVIES
      const movie1 = await new Movie({
            title: 'The Avengers',
            runtime: 143,
            rating: 8.0,
            yearReleased: 2012,
            description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
            posterImage: 'https://m.media-amazon.com/images/I/71u9+g9J1pL._AC_UF894,1000_QL80_.jpg',
      })
      movie1.save()

      const movie2 = await new Movie({
            title: 'Avengers: Age of Ultron',
            runtime: 141,
            rating: 7.3,
            yearReleased: 2015,
            description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program, things go awry and it\'s up to the Avengers to stop the villainous Ultron from enacting his terrible plans.',
            posterImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fayanawebzine.com%2Fmarvels-avengers-age-of-ultron-movie-poster-2003003.html&psig=AOvVaw2dbzfo2RY-3eNBwuPaslsS&ust=1686078566900000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCExqLqrP8CFQAAAAAdAAAAABAa',
      });
      movie2.save();
          
      const movie3 = await new Movie({
            title: 'Avengers: Infinity War',
            runtime: 149,
            rating: 8.4,
            yearReleased: 2018,
            description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
            posterImage: 'https://m.media-amazon.com/images/I/71Gv92ch19L._AC_UF894,1000_QL80_.jpg',
      });
      movie3.save();

      const movie4 = await new Movie({
            title: 'Avengers: Endgame',
            runtime: 181,
            rating: 8.4,
            yearReleased: 2019,
            description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos\' actions and restore order to the universe.',
            posterImage: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg',
      });
      movie4.save();
          
      const movie5 = await new Movie({
            title: 'Spider-Man: Far From Home',
            runtime: 129,
            rating: 7.5,
            yearReleased: 2019,
            description: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever. Peter Parker goes on a school trip to Europe and gets recruited by Nick Fury to uncover the mystery of elemental creature attacks.',
            posterImage: 'https://m.media-amazon.com/images/I/sghe9o3PdRc+_AC_UL872_FMwebp_QL65_.jpg',
      });
      movie5.save();
          
      // ACTORS 
      const actors = [
            {
                  name: 'Robert Downey Jr.',
                  age: 58,
                  alive: true,
                  additionalProperties: 'Iron Man',
                  image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQijI6Sf7U-nKAfhHFmFBhVVVIxOfzI3QBeHqEjXJ7qcqbu98eqykx0UdmHrvt9Wx5hKilfZROD0mR85gk'
            }, 
            {
                  name: 'Chris Evans',
                  age: 41,
                  alive: true,
                  additionalProperties: 'Captain America',
                  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQleVDw6gYz6yE6nzfnKgIP6fyNLfM5TzJsi_v5mHgC9Z5LMP45'
            }, 
            {
                  name: 'Chris Hemsworth',
                  age: 39,
                  alive: true,
                  additionalProperties: 'Thor',
                  image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV'
            }, 
            {
                  name: 'Scarlett Johansson',
                  age: 38,
                  alive: true,
                  additionalProperties: 'Black Widow',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3k7WTbWsb6Kn6NRCuUHUsnA3eIaL0yxcwTYN6s0NU663-gvym'
            }, 
            {
                  name: 'Tom Hiddleston',
                  age: 42,
                  alive: true,
                  additionalProperties: 'Loki',
                  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_a31fWXQOuNixOPQcq6KHO0uDYM-3NY0_BiMLFxkYblmVLxhX'
            }
      ]
      // REVIEWS
      const reviews = [
            {
                  movie: movie1._id,
                  score: 9,
                  comment: 'An epic superhero team-up movie with thrilling action sequences and great character dynamics.'
            }, 
            {
                  movie: movie1._id,
                  score: 8,
                  comment: 'The Avengers sets a new standard for superhero films, delivering a fun and entertaining experience.'
            }, 
            {
                  movie: movie2._id,
                  score: 7.5,
                  comment: 'Age of Ultron offers an engaging storyline and introduces new characters, but can feel a bit overstuffed at times.'  
            }, 
            {
                  movie: movie2._id,
                  score: 8,
                  comment: 'A solid follow-up to the first Avengers film, with exciting action and interesting character developments.'
            }, 
            {
                  movie: movie3._id,
                  score: 9.5,
                  comment: 'Infinity War is a thrilling and emotional rollercoaster, bringing together multiple storylines and characters seamlessly.'
            }, 
            {
                  movie: movie3._id,
                  score: 9,
                  comment: 'A grand-scale superhero epic that delivers on its promises, leaving audiences in awe and anticipation for the next installment.'
            }, 
            {
                  movie: movie4._id,
                  score: 10,
                  comment: 'Endgame is a remarkable conclusion to the Avengers saga, paying off years of storytelling with powerful moments and satisfying resolutions.'
            }, 
            {
                  movie: movie4._id,
                  score: 9.5,
                  comment: 'A fitting and emotionally-charged finale that celebrates the journey of these beloved characters and their impact on the cinematic landscape.'
            }, 
            {
                  movie: movie5._id,
                  score: 8.5,
                  comment: 'Far From Home brings a refreshing twist to the Spider-Man story, combining humor, action, and heartfelt moments.'
            }, 
            {
                  movie: movie5._id,
                  score: 8,
                  comment: 'A fun and enjoyable Spidey adventure with stunning visual effects and compelling performances.'
            }, 
      ]

      await Actor.insertMany(actors)
      await Review.insertMany(reviews)
      console.log('Created Actors')
      console.log('Created Reviews')
}

const run = async () => {
      await main()
      db.close()
}

run()