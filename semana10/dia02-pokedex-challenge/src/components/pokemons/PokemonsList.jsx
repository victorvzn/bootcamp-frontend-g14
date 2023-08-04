const PokemonsList = ({ pokemons }) => {
  
  return (
    <>
      {
        pokemons.results?.map(pokemon => {
          console.log(pokemon.url.split('/'))
          const id = pokemon.url.split('/').at(-2)
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

          return (
            <article
              className="border"
              key={pokemon.url}
            >
              <h3>{pokemon.name}</h3>
              <img src={pokemonImage} className="w-40 " />
            </article>
          )
        })
      }
    </>
  )
}

export default PokemonsList