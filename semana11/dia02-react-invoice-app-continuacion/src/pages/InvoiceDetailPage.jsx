import { Link, useParams } from "react-router-dom"

const InvoiceDetailPage = () => {
  const { id } = useParams()

  return (
    <>
      <div className="text-center text-white text-7xl">InvoiceDetailPage</div>
      <div className="text-center text-white text-4xl">{id}</div>
      <Link to='/'>
        <div className="text-center text-white text-4xl">Back home</div>
      </Link>
    </>
  )
}

export default InvoiceDetailPage