import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  const getCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    setCharacter(data)
  }

  useEffect(() => {
    getCharacter(id)
  }, [])

  return (
    <>
      <div>Character page {id}</div>

      <div>
        {/* {JSON.stringify(character)} */}
        <img src={character?.image} />
      </div>

      <Link to='/'>Back home</Link>
    </>
  )
}

export default Character