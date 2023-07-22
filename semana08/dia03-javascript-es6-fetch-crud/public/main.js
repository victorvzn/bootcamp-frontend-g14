import { fetchMovies } from "./services.js"
import { renderMovies } from "./movies.js"

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