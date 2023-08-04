import { useState, useEffect } from "react"

import PokemonsList from "./components/pokemons/PokemonsList"
import Header from "./components/Header"

function App() {
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')

      const data = await response.json()

      setPokemons(data)
    }
    
    console.log('Me ejecuto cuando se renderiza este componente solo la primera vez')

    fetchPokemons()
  }, [])

  return (
    <>
      <Header title="Poké Catalog" />

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      <main className="p-3 flex flex-col gap-3">
        <PokemonsList pokemons={pokemons} />
      </main>
    </>
  )
}

export default App
