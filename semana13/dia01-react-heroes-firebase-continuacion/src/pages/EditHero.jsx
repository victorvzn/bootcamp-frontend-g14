import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useHero } from "../hooks/useHero"

const EditHero = () => {
  const { id } = useParams()
  const [hero, setHero] = useState(null)

  const { getHero } = useHero()

  useEffect(() => {
    getHero(id)
      .then(setHero)
      // .then(data => setHero(data))
  }, [])

  return (
    <>
      <div>EditHero {id}</div>
      {/* TODO: Terminar la vista para editar un hero, creando un formulario y guardando esa data nuevamente en firebase */}
      <pre>{JSON.stringify(hero, null, 2)}</pre>
    </>
  )
}

export default EditHero