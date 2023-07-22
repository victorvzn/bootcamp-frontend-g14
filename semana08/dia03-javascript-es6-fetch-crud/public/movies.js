import { fetchMovies, deleteMovie, getMovie } from "./services.js"

export const renderMovies = (movies) => {
  const moviesList = document.querySelector('.movies__list')

  let elementos = ''

  movies.forEach(movie => {
    elementos += `
      <tr>
        <td>${movie.id}</td>
        <td>
          <img
            src="${movie.image}"
            onerror="this.src='https://placehold.co/300x450'"
            width="100"
            height="250"
          />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div class="fs-small">
            <strong>Release:</strong> ${movie.release}
          </div>
          <div class="fs-small">
            <strong>Genre:</strong> ${movie.genre.name}
          </div>
          <div class="fs-small">
            <strong>Resume:</strong> ${movie.resumen}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="movie__edit" data-id="${movie.id}">✏</button>
            <button class="movie__remove" data-id="${movie.id}">❌</button>
          </div>
        </td>
      </tr>
    `
  })

  moviesList.innerHTML = elementos

  const removeButtons = document.querySelectorAll('.movie__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.dataset.id

      const res = await deleteMovie(id)

      if (res) {
        const movies = await fetchMovies()

        renderMovies(movies)
      }
    })
  })

  const updateButtons = document.querySelectorAll('.movie__edit')

  updateButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.dataset.id

      const res = await getMovie(id)

      if (res) {
        const movieForm = document.forms['moviesForm']

          console.log(res)

          movieForm.id.value = res.id
          movieForm.name.value = res.name
          movieForm.image.value = res.image
          movieForm.release.value = res.release
          movieForm.genre.value = res.genreId
          movieForm.resumen.value = res.resumen
      }
    })
  })
}