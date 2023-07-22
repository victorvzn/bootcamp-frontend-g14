export const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies?_expand=genre'

  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

export const deleteMovie = async (id) => {
  const url = `http://localhost:3000/movies/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  return response.json()
}