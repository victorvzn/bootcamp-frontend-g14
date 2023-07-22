export const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies?_expand=genre'

  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}