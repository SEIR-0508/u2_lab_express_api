const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Review = require('./models/Review');
const Actor = require('./models/Actor');


mongoose.connect('mongodb://localhost/moviesDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});

const populateDatabase = async () => {
  try {
    // Create movie documents
    const movie1 = new Movie({
      title: 'Baby Driver',
      runtime: 113,
      rating: 5,
      yearReleased: 2017,
      description:
        'After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.',
      posterImage:
        'https://media.newyorker.com/photos/595abd79544c0a773ae693c1/master/w_2560%2Cc_limit/Brody-Baby-Driver.jpg',
    });

    const movie2 = new Movie({
      title: 'Last Night in Soho',
      runtime: 116,
      rating: 3,
      yearReleased: 2021,
      description:
        'An aspiring fashion designer is mysteriously able to enter the 1960s, where she encounters a dazzling wannabe singer. But the glamour is not all it appears to be and the dreams of the past start to crack and splinter into something darker.',
      posterImage:
        'https://static.tvtropes.org/pmwiki/pub/images/54c216ea_d616_4da9_9ec8_bf7479518f96.jpeg',
    });

    const movie3 = new Movie({
      title: 'The Room',
      runtime: 91,
      rating: 1,
      yearReleased: 2003,
      description:
        'In San Francisco, an amiable banker\'s seemingly perfect life is turned upside down when his deceitful fiancée embarks on an affair with his best friend.',
      posterImage:
        'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2559,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1511934940/171128-schager-the-room-tease_osovfo',
    });

    const movie4 = new Movie({
      title: 'The Disaster Artist',
      runtime: 104,
      rating: 4,
      yearReleased: 2017,
      description:
        'When aspiring actor Greg Sestero meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.',
      posterImage:
        'https://m.media-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg',
    });

    const movie5 = new Movie({
      title: 'The Batman',
      runtime: 167,
      rating: 4,
      yearReleased: 2022,
      description:
        'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
      posterImage:
        'https://cdn.europosters.eu/image/750/posters/the-batman-red-i126658.jpg',
    });

    const savedMovie1 = await movie1.save();
    const savedMovie2 = await movie2.save();
    const savedMovie3 = await movie3.save();
    const savedMovie4 = await movie4.save();
    const savedMovie5 = await movie5.save();

    const review1 = new Review({
      score: 5,
      comment:
        'There is never a dull moment in this action crime film about a getaway driver who has his own unlimited getaway soundtrack but who also wants to break free from the crime boss who owns his life.',
      movie: savedMovie1._id,
    });

    const review2 = new Review({
      score: 3,
      comment:
        'From the writer-director of Three Flavours Cornetto trilogy comes a stylishly crafted, smartly photographed & skilfully acted psychological horror that\'s swirling with nostalgia & affection for the Swinging Sixties. Last Night in Soho attempts to capture the dangers of romanticizing the past while showcasing the dark side of show business only to throw it all away in the end.',
      movie: savedMovie2._id,
    });

    const review3 = new Review({
      score: 1,
      comment: 'YOU ARE TEARING ME APART, LISA',
      movie: savedMovie3._id,
    });

    const review4 = new Review({
      score: 4,
      comment:
        'Going into the theater, I was under the impression that this was a silly James Franco and Seth Rogen movie that made fun of The Room, a legendary bad movie. That is not what the Disaster Artist is at all. Instead, it celebrates The Room. It celebrates Tommy Wiseau, Greg Sestero, their passion, and their pursuit of a dream.',
      movie: savedMovie4._id,
    });

    const review5 = new Review({
      score: 5,
      comment:
        'Detective Batman at its peak! Great storyline. Just as dark a universe as we have come to expect from DC. The gloomy, gritty, dark tone of this film is exactly what I wanted. When you think the movie is over, there\'s more. Beautiful cinematography. Great score.',
      movie: savedMovie5._id,
    });

    await review1.save();
    await review2.save();
    await review3.save();
    await review4.save();
    await review5.save();

    const actor1 = new Actor({
      name: 'Jon Hamm',
      age: 42,
      alive: true,
      actorImage:
        'https://m.media-amazon.com/images/M/MV5BNzg0MzA4MTY5M15BMl5BanBnXkFtZTcwODg2MTIwOQ@@._V1_QL75_UY414_CR3,0,280,414_.jpg',
    });

    const actor2 = new Actor({
      name: 'Dame Diana Rigg',
      age: 82,
      alive: false,
      actorImage:
        'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRQZF2cxalKlGVwn7CAaJUnCjsffF6MPWYmezn8KKG-9hGhXohzpOyQzoC-7C4LQf2LtqiMcQc_i0nn6fxgnAqHlF2AEmS1coqCXdx6LFS1',
    });

    const actor3 = new Actor({
      name: 'Tommy Wiseau',
      age: 65,
      alive: true,
      actorImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tommy-Wiseau.jpg/220px-Tommy-Wiseau.jpg',
    });

    const actor4 = new Actor({
      name: 'James Franco',
      age: 44,
      alive: true,
      actorImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/James_Franco_2009.jpg/220px-James_Franco_2009.jpg',
    });

    const actor5 = new Actor({
      name: 'Robert Pattinson',
      age: 36,
      alive: true,
      actorImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Robert_Pattinson_at_Berlinale_2017_%28cropped%29.jpg/220px-Robert_Pattinson_at_Berlinale_2017_%28cropped%29.jpg',
    });

    
    await actor1.save();
    await actor2.save();
    await actor3.save();
    await actor4.save();
    await actor5.save();

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Failed to seed database:', error);
  } finally {
    
    mongoose.disconnect();
  }
};

populateDatabase();
