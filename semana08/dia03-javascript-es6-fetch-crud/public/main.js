import { fetchMovies, createMovie, updateMovie } from "./services.js"
import { renderMovies } from "./movies.js"

const moviesForm = document.getElementById('moviesForm')

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const movieForm = document.forms['moviesForm']

  console.log(movieForm)

  const id = movieForm.id.value
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

  const isNew = !Boolean(id)

  if (isNew) {
    const res = await createMovie(newMovie)

    if (res) {
      const movies = await fetchMovies()

      renderMovies(movies)

      moviesForm.reset()
    }
  } else {
    const res = await updateMovie(id, newMovie)

    if (res) {
      const movies = await fetchMovies()

      renderMovies(movies)

      moviesForm.reset()
    }
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