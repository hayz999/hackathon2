// var twilightURL = 'http://www.omdbapi.com/?t=twilight&apikey=1b2149ae'
// var roomURL = 'http://www.omdbapi.com/?t=the+room&apikey=1b2149ae'
var url = 'http://www.omdbapi.com/?t=jack+and+jill&apikey=1b2149ae'



fetch(url)
.then(response => response.json())
 
.then(response => buildMovieCard(response))



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