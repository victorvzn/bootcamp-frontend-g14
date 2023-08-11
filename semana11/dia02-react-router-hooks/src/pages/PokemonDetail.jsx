import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    setPokemon(data)
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  if (!pokemon) return

  return (
    <section className='w-10/12 mx-auto mt-5'>
      <Link to='/'>Regresar al home</Link>
      <div>PokemonDetail {id}</div>
      <div className='text-center'>
        {/* {JSON.stringify(pokemon)} */}
        <h1 className='text-4xl capitalize'>{pokemon?.name}</h1>
        <img src={pokemon.sprites.other['official-artwork'].front_default} />
      </div>
    </section>
  )
}

export default PokemonDetail