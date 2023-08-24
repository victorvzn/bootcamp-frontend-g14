import { useParams } from "react-router-dom"

const EditHero = () => {
  const { id } = useParams()

  return (
    <div>EditHero {id}</div>
  )
}

export default EditHero