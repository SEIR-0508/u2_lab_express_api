// Constants //
const selectList = document.querySelector('#movieSelector')
const search = document.querySelector('.search')
const movieName = document.querySelector('.movieName')
const poster = document.querySelector('.poster')
const description = document.querySelector('.description')
const rating = document.querySelector('.rating')
const datePublished = document.querySelector('.datePublished')
const producer = document.querySelector('.producer')
const runTime = document.querySelector('.runTime')
const reviews = document.querySelector('.review')

// Variables //
let movie = {}


// Event Listeners //

search.addEventListener('click', async () => {
    let searchMovie = selectList.value
    movie = await axios.get(`http://localhost:3001/api/movies/${searchMovie}`)
    buildPage()
})

// Functions //
const pageStart = async () => {
    movie = await axios.get(`http://localhost:3001/api/movies/647e6e0e2ed05b9dce0e5e52`)
    buildPage()
}


const buildList = async () => {
    const list = await axios.get('http://localhost:3001/api/movies')
    const listData = list.data
    for (let i = 0; i <= listData.length; i++) {
        let option = document.createElement('option')
        option.value = listData[i]._id
        option.text = listData[i].name
        selectList.appendChild(option)
    }
}

const buildPage = async () => {
    poster.innerHTML = ""
    let movieData = movie.data
    movieName.innerHTML = movieData.name
    let img = document.createElement('img')
    img.src = `${movieData.poster}`
    poster.appendChild(img)
    description.innerText = movieData.description
    rating.innerText = `Rating: ${movieData.rating}`
    datePublished.innerText = `Published: ${movieData.datePublished}`
    producer.innerText = `Producer: ${movieData.producer}`
    runTime.innerText = `Run Time: ${movieData.runTime} minutes`

}

// const getInfo = async () => {
//     let info = await axios.get(`http://localhost:3001/api/movies/647e6e0e2ed05b9dce0e5e52`)
//     let myimg = document.createElement('img')
//     myimg.src = `${info.data.poster}`
//     img.innerHTML = ""
//     img.appendChild(myimg)
//     console.log(info)
//     console.log(info.data.poster)
// }

buildList()
pageStart()