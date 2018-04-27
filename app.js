var twilightURL = 'http://www.omdbapi.com/?t=kazaam&apikey=1b2149ae'
var roomURL = 'http://www.omdbapi.com/?t=battlefield+earth&apikey=1b2149ae'
var jackJill = 'http://www.omdbapi.com/?t=jack+and+jill&apikey=1b2149ae'
var lastAir = 'http://www.omdbapi.com/?t=the+last+airbender&apikey=1b2149ae'
var jaws = 'http://www.omdbapi.com/?t=jaws:+the+revenge&apikey=1b2149ae'
var emoji = 'http://www.omdbapi.com/?t=the+emoji+movie&apikey=1b2149ae'
var rings = 'http://www.omdbapi.com/?t=rings&apikey=1b2149ae'
var disaster = 'http://www.omdbapi.com/?t=disaster+movie&apikey=1b2149ae'


function getMovie(url) {
fetch(url)
.then(response => response.json())
.then(response => buildMovieCard(response))
}

getMovie(jackJill)
getMovie(twilightURL)
getMovie(roomURL)
getMovie(lastAir)
getMovie(jaws)
getMovie(emoji)
getMovie(rings)
getMovie(disaster)


function buildMovieCard (response) {
    const movieContainer = document.getElementById('movie')
    const movieCard = document.createElement('div')
    movieCard.classList.add('card')
    movieCard.style.width = '18rem'
    movieContainer.appendChild(movieCard)

    const poster = document.createElement('img')
    poster.src = response.Poster
    poster.classList.add('card-img-top')
    movieCard.appendChild(poster)


    const redirect = document.createElement('a')
    redirect.textContent = 'Watch Now'
    redirect.href = response.Website
    movieCard.appendChild(redirect)

    const textContainer = document.createElement('div')
    textContainer.classList.add('card-body')
    movieCard.appendChild(textContainer)

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = response.Title
    textContainer.appendChild(title)

    const rating = document.createElement('p')
    rating.classList.add('card-text')
    rating.textContent = response.Ratings[1].Source + ': ' + response.Ratings[1].Value
    textContainer.appendChild(rating)
}
