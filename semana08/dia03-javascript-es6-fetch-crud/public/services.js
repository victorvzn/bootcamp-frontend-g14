export const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies?_expand=genre'

  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

export const createMovie = async (form) => {
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

export const getMovie = async (id) => {
  try {
    const url = `http://localhost:3000/movies/${id}`

    const response = await fetch(url)

    return response.json()
  } catch(error) {
    console.log(error)
  }
}

export const updateMovie = async (id, form) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
    
    const url = `http://localhost:3000/movies/${id}`

    const response = await fetch(url, options)
    
    return response.json()
  } catch(error) {
    console.log(error)
  }
}


export const deleteMovie = async (id) => {
  const url = `http://localhost:3000/movies/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  return response.json()
}