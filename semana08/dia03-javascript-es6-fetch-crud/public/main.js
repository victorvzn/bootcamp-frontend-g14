import { fetchMovies } from "./services.js"
import { renderMovies } from "./movies.js"

const moviesForm = document.getElementById('moviesForm')

const createMovie = async (form) => {
  const url = 'http://localhost:3000/movies'

  const body = JSON.stringify(form) // Convierto a cadena el objeto del formulario

  const options = {
    method: 'POST', // Crear un nuevo registro
    headers: {
      'Content-type': 'application/json'
    },
    body
  }

  const response = await fetch(url, options)

  return response.json()
}

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const movieForm = document.forms['moviesForm']

  console.log(movieForm)

  const name = movieForm.name.value
  const image = movieForm.image.value
  const release = movieForm.release.value
  const genre = movieForm.genre.value
  const resumen = movieForm.resumen.value

  console.log({ name, image, release, genre, resumen })

  const newMovie = {
    name,
    image,
    release,
    genreId: Number(genre),
    resumen
  }

  const res = await createMovie(newMovie)

  if (res) {
    const movies = await fetchMovies()

    renderMovies(movies)

    moviesForm.reset()
  }
})

document.addEventListener('DOMContentLoaded', async (event) => {
  // Ejemplo usando promesas
  
  // fetchMovies()
  //   .then(response => {
  //     renderMovies(response)
  //   })

  // Ejemplo usuando async/await

  const movies = await fetchMovies()

  renderMovies(movies)
})