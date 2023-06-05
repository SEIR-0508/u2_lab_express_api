const db = require('../db')
const { Movies } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


    const movies = [
        { title: 'The Godfather', 
        runtimeMinutes: 175, 
        rating: 9, 
        yearReleased: 1972,
        description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.'},
        
        { title: 'The Godfather 2', 
        runtimeMinutes: 202, 
        rating: 9, 
        yearReleased: 1974,
        description: 'The Godfather: Part II juxtaposes two stories: that of Michael Corleone (played, as in The Godfather, by Al Pacino) in the years after he becomes head of the Corleone family business and that of his father, Vito Corleone, as a young man (portrayed by Robert De Niro)'},
        
        { title: 'Heat', 
        runtimeMinutes: 170, 
        rating: 8, 
        yearReleased: 1995, 
        description: 'Heat is based on the true story of Neil McCauley, a calculating criminal and ex-Alcatraz inmate who was tracked down by Detective Chuck Adamson in 1964. In 1961, McCauley was transferred from Alcatraz to McNeil, as mentioned in the film. He was released in 1962 and immediately began planning new crimes.'},
        
        { title: 'The Score', 
        runtimeMinutes: 124, 
        rating: 7, 
        yearReleased: 2001, 
        description: 'Robert De Niro stars as Nick Wells, an aging thief whose specialty is safe-cracking and who is on the verge of retiring to a life of ease, running his jazz club and romancing his girlfriend Diane (Angela Bassett).'},
        
        { title: 'Elf', 
        runtimeMinutes: 96, 
        rating: 7, 
        yearReleased: 2003, 
        description: "Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa's elves. Unable to shake the feeling that he doesn't fit in, the adult Buddy travels to New York, in full elf uniform, in search of his real father."},

        { title: "Something's Gotta Give", 
        runtimeMinutes: 128, 
        rating: 7, 
        yearReleased: 2003, 
        description: "Something's Gotta Give is a 2003 American romantic comedy-drama film written, produced and directed by Nancy Meyers. It stars Jack Nicholson and Diane Keaton as a successful 60-something and 50-something, who find love for each other in later life, despite being complete opposites."},

        { title: "Scarface", 
        runtimeMinutes: 170, 
        rating: 8, 
        yearReleased: 1983, 
        description: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed. After getting a green card in exchange for assassinating a Cuban government official, Tony Montana (Pacino) stakes a claim on the drug trade in Miami."},

        { title: "The Irishman", 
        runtimeMinutes: 209, 
        rating: 8, 
        yearReleased: 2019, 
        description: "The film follows Frank Sheeran (De Niro), a truck driver who becomes a hitman involved with mobster Russell Bufalino (Pesci) and his crime family, including his time working for the powerful Teamster Jimmy Hoffa (Pacino)."},

        { title: "Dog Day Afternoon", 
        runtimeMinutes: 124, 
        rating: 8, 
        yearReleased: 1975, 
        description: "On one of the hottest days of August 1972, three amateur bank robbers plan to hold up a Brooklyn bank. A nice simple robbery: Walk in, take the money, and run. Unfortunately, the supposedly uncomplicated heist suddenly becomes a bizarre nightmare as everything that could go wrong does."},

        { title: "Casino", 
        runtimeMinutes: 178, 
        rating: 8, 
        yearReleased: 1995, 
        description: `Casino follows Sam "Ace" Rothstein (De Niro), a Jewish American gambling expert handicapper who is asked by the Chicago Outfit to oversee the day-to-day casino and hotel operations at the Tangiers Casino in Las Vegas.`},
]

    await Movies.insertMany(movies)
    console.log("Check these films out!")
}
const run = async () => {
    await main()
    db.close()
}

run()