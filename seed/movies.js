const db = require('../db')
const Movie = require('../models/movie')
const Actor = require('../models/actor')
const Review = require('../models/review')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actorsArray = [
       
                { name: 'Reese Witherspoon', age: 47 , image: 'https://www.imdb.com/name/nm0000702/mediaviewer/rm3428053761/?ref_=nm_ov_ph' },
                { name: 'Ashton Kutcher', age: 45 , image: 'https://www.imdb.com/name/nm0005110/mediaviewer/rm3929295104/?ref_=nm_ov_ph' },
                { name: 'Zoe Chao', age: 37 , image: 'https://www.imdb.com/name/nm3856316/mediaviewer/rm170437633/?ref_=nm_ov_ph' },
                { name: 'Jesse Williams', age: 41 , image: 'https://www.imdb.com/name/nm0930898/mediaviewer/rm4102718465/?ref_=nm_ov_ph' },
                { name: 'Wesley Kimmel', age: 15, image: 'https://www.imdb.com/name/nm9481314/mediaviewer/rm276441089/?ref_=nm_ov_ph' },
           
            
                { name: 'Tyler Posey', age: 31 , image: 'https://www.imdb.com/name/nm0692677/mediaviewer/rm4137860608/?ref_=nm_ov_ph' },
                { name: 'Crystal Reed', age: 38, image: 'https://www.imdb.com/name/nm3706952/mediaviewer/rm3618921984/?ref_=nm_ov_ph' },
                { name: 'Holland Roden', age: 36, image: 'https://www.imdb.com/name/nm1555699/mediaviewer/rm4039186176/?ref_=nm_ov_ph' },
                { name: 'Tyler Hoechlin', age: 35, image: 'https://www.imdb.com/name/nm0388382/mediaviewer/rm1063975169/?ref_=nm_ov_ph' },
                { name: 'Shelley Hennig', age: 36, image: 'https://www.imdb.com/name/nm2645189/mediaviewer/rm11796736/?ref_=nm_ov_ph' },
          
                { name: 'Keanu Reeves', age: 58, image: 'https://www.imdb.com/name/nm0000206/mediaviewer/rm1958676737/?ref_=nm_ov_ph' },
                { name: 'Laurence Fishburne', age: 61, image: 'https://www.imdb.com/name/nm0000401/mediaviewer/rm1925683200/?ref_=nm_ov_ph' },
                { name: 'Carrie-Anne Moss', age: 55, image: 'https://www.imdb.com/name/nm0005251/mediaviewer/rm3251024384/?ref_=nm_ov_ph' },
                { name: 'Hugo Weaving', age: 63, image: 'https://www.imdb.com/name/nm0915989/mediaviewer/rm644386560/?ref_=nm_ov_ph' },
                { name: 'Joe Pantoliano', age: 71, image: 'https://www.imdb.com/name/nm0001592/mediaviewer/rm3132878849/?ref_=nm_ov_ph' },
          
                { name: 'Russell Crowe', age: 59, image: 'https://www.imdb.com/name/nm0000128/mediaviewer/rm2298720512/?ref_=nm_ov_ph' },
                { name: 'Joaquin Phoenix', age: 48, image: 'https://www.imdb.com/name/nm0001618/mediaviewer/rm521242113/?ref_=nm_ov_ph' },
                { name: 'Connie Nielsen', age: 57, image: 'https://www.imdb.com/name/nm0001567/mediaviewer/rm848773120/?ref_=nm_ov_ph' },
                { name: 'Derek Jacobi', age: 84, image: 'https://www.imdb.com/name/nm0001394/mediaviewer/rm1999670784/?ref_=nm_ov_ph' },
                { name: 'Djimon Hounsou', age: 59, image: 'https://www.imdb.com/name/nm0005023/mediaviewer/rm263554048/?ref_=nm_ov_ph' },
           
                { name: 'Anthony Gonzalez', age: 18, image: 'https://www.imdb.com/name/nm5645519/mediaviewer/rm2791709697/?ref_=nm_ov_ph' },
                { name: 'Gael García Bernal', age: 44, image: 'https://www.imdb.com/name/nm0305558/mediaviewer/rm3265698560/?ref_=nm_ov_ph' },
                { name: 'Benjamin Bratt', age: 59, image: 'https://www.imdb.com/name/nm0000973/mediaviewer/rm1575271424/?ref_=nm_ov_ph' },
                { name: 'Alanna Ubach', age: 47, image: 'https://www.imdb.com/name/nm0005513/mediaviewer/rm1310287104/?ref_=nm_ov_ph' },
                { name: 'Renee Victor', age: 69, image: 'https://www.imdb.com/name/nm0896149/mediaviewer/rm4293303040/?ref_=nm_ov_ph' }
          
    
     ]
     await Actor.insertMany(actorsArray)
     console.log(`actors inserted!`)

 const reviewsArray = [
   
         
            { score: '3/10', comment: 'These kinds of movies have become a bit tiresome because about 45 of them come out each year.' },
            { score: '8/10', comment: 'You can say its cheesy, unoriginal, or old-fashioned, but it works for me. As a millennial, I was so excited to see Witherspoon and Kutcher, icons of rom-coms in early 2000s, come back as grown up couple, so I admit I can be biased. Plus, best friends-to-lovers trope always works on me.' },
            { score: '7/10', comment: 'The main flaw is the lack of chemistry been the two main characters, as others have said. This is undeniably true. Its hard to see why they would be friends at all, let alone prospective lovers. But even so, the film is perfectly watchable - and Ive sat through many far "better" films which Ive enjoyed less.' },
          
    
            { score: '4/10', comment: 'Im a huge Teen Wolf Nerd so its hard for me to say this but the film didnt work!' },
            { score: '6/10', comment: 'Well...not so well (done). Decent idea, but rushed and stuffed.' },
            { score: '5/10', comment: 'It would have been better as a mini series' },
         
    
            { score: '10/10', comment: 'When this came out, I was living with a roommate. He went out and saw it, came home and said, "Dude, you have to go see The Matrix." So we left and he sat through it a second time. This movie is splendidly done. The mystery about what the Matrix is, unravels and you see a dystopian future unlike any we as a race would want. I have watched this over and over and never tire of it. Everyone does a great job acting in this, the special effects are above par and the story is engaging.' },
            { score: '10/10', comment: 'This was a real change in filmmaking. Like watching it again in 2020, i.e. after 21 years and it still feels fresh. Iconic scenes are still having benchmarks setting up.'},
            { score: '10/10', comment: 'This film doesnt age, it will be contemporary even in 2030 or 2040. Wachowskis best one, by far.' },
          
    
       
           { score: '10/10', comment: 'Ridley Scotts Gladiator is not a perfect film, I would think that the hardiest of fans, of which Im firmly one, know this deep down. Yet just like Commodus in the film is keen to point out that he himself has other virtues that are worthy, so does Gladiator the film. Enough in fact to make it an everlasting favourite of genre fans and worthy of the Academy Award acknowledgements it received.' },
           { score: '10/10', comment: 'One of the best films ever' },
           { score: '10/10', comment: 'One of the best films of a generation, its a bold claim, but Gladiator truly is that good. Every single element is perfect, the story is phenomenal, one to absorb you for the full running time. The visuals are incredible, an epic masterpiece for the eyes as well as the soul. The acting first rate, surely the aim of any film is to move you, this does just that and then some.' },
      
       
            { score: '10/10', comment: 'I am very glad I saw "Coco" and understand exactly why it won the Oscar for Best Animated Feature, as its terrifically entertaining, fun to watch...and quite touching as well.' },
            { score: '10/10', comment: 'I knew absolutely nothing about this movie walking in, the only reason I was there was to take my daughter to see it is strictly because my wife said there was a short Frozen film that played along with the movie and my daughter just so happens to be the biggest Frozen fan on the face of the planet.Not only was I surprised by Coco, it might be the most in depth best story line Ive ever seen in an animated movie. It was also educational and shed an entirely new light on the background of the Mexican holiday Dia De Los Muertos.Wonderful movie, cant say enough good things about it!' },
            { score: '10/10', comment: 'There are no shortcomings in the picture, connotation and plot of animation, each of which touches the hearts of the people. The animation of "death is not the end, forgotten is", let us move, dont forget our dead relatives.' }
          
   

 ]
 await Review.insertMany(reviewsArray)
     console.log(`actors inserted!`)
    
    const actors = await Actor.find()
    const reviews = await Review.find()

    const movies = [
    {
        title: 'YOUR PLACE OR MINE',
        runTime: '1h 49m',
        rating: '5.6/10',
        yearReleased: 2023,
        description: 'Two long-distance best friends change each others lives when she decides to pursue a lifelong dream and he volunteers to keep an eye on her teenage son.',
        image: '../images/yourplaceormine.jpg',
        actor: [actorsArray[0]._id],
        Reviews: [reviews[0]._id]
    
    },
    {
        title: 'TEEN WOLF: The Movie',
        runTime: '2h 20m',
        rating: '5.5/10',
        yearReleased: 2023,
        description: 'The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.',
        image: '../images/yourplaceormine.jpg',
        actor: [actors[1]._id],
        Reviews: [reviews[1]._id]
    
    },
    {
        title: 'THE MATRIX',
        runTime: '2h 16m',
        rating: '8.7/10',
        yearReleased: 1999,
        description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        image: '../images/matrix.jpg',
        actor:  [actors[2]._id],
        Reviews: [reviews[2]._id]
    
    },
    {
        title: 'GLADIATOR',
        runTime: '2h 35m',
        rating: '8.5/10',
        yearReleased: 2000,
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        image: '../images/gladiator.jpg',
        actor: [actors[3]._id],
        Reviews: [reviews[3]._id]
    
    },
    {  title: 'COCO',
       runTime: '1h 45m',
       rating: '8.4/10',
       yearReleased: 2017,
       description: 'Aspiring musician Miguel, confronted with his families ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
       image: '../images/coco.jpg',
       actor: [actors[4]._id],
       Reviews: [reviews[5]._id]

    },
        
    ]

 


 await Movie.insertMany(movies)
 console.log('Movies inserted')

 
}

const run = async () => {
    await main()
}

run()