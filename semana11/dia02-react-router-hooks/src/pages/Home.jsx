import { useEffect, useState } from "react"

const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    setPokemons(data.results)
  }

  useEffect(() => { 
    fetchPokemons()
  }, [])

  return (
    // <div>{JSON.stringify(pokemons)}</div>
    <section className="grid grid-cols-4 w-10/12 mx-auto mt-5 gap-4">
      {
        pokemons.map(pokemon => {
          return (
            <article
              key={pokemon.url}
              className="capitalize text-center border rounded-lg bg-yellow-600 p-4"
            >
              {pokemon.name}
            </article>
          )
        })
      }
    </section>
  )
}

export default Home