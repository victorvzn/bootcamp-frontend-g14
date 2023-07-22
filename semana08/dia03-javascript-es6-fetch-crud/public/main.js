const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies'

  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

fetchMovies()

const renderMovies = (movies) => {
  const moviesList = document.querySelector('.movies__list')

  let elementos = ''

  movies.forEach(movie => {
    elementos += `
      <tr>
        <td>${movie.id}</td>
        <td>
          <img src="${movie.image}" width="100" height="250" />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div class="fs-small">
            <strong>Release:</strong> ${movie.release}
          </div>
          <div class="fs-small">
            <strong>Genre:</strong> ${movie.genreId}
          </div>
          <div class="fs-small">
            <strong>Resume:</strong> ${movie.resumen}
          </div>
        </td>
        <td>1</td>
      </tr>
    `
  })

  moviesList.innerHTML = elementos
}

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