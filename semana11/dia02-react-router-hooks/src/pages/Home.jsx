import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
          const id = pokemon.url.split('/').at(-2)
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          return (
            <Link to={`/pokemon/${id}`} key={pokemon.url}>
              <article
                className="capitalize text-center border rounded-lg bg-yellow-600 p-4"
              >
                <img src={image} />
                {pokemon.name}
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Home