import { Link, useParams } from "react-router-dom"

import BaseTag from "../components/shared/BaseTag"
import BaseButton from "../components/shared/BaseButton"

const InvoiceDetailPage = () => {
  const { id } = useParams()

  return (
    <>
      {/* <div className="text-center text-white text-7xl">InvoiceDetailPage</div>
      <div className="text-center text-white text-4xl">{id}</div>
      <Link to='/'>
        <div className="text-center text-white text-4xl">Back home</div>
      </Link> */}

      <nav className="w-[940px] mx-auto mt-20">
        <Link
          to='/'
          className="text-white font-bold"
        >
          Go home
        </Link>
      </nav>

      <header className="w-[940px] mx-auto bg-[#1f213a] py-3 px-8 mt-10 rounded-lg flex justify-between">
        <div className="flex items-center text-white gap-3">
          <h3>Status</h3>
        <BaseTag
            className='text-emerald-100'
            label="Pending"
            background='bg-emerald-400/20'
            textColor='text-emeraldr-400'
          />
        </div>

        <div className="flex gap-3">
          <BaseButton
            background="bg-slate-400"
            textColor="text-white"
          >
            Edit
          </BaseButton>
          <BaseButton
            background="bg-red-400"
            textColor="text-white"
          >
            Delete
          </BaseButton>
          <BaseButton
            background="bg-indigo-400"
            textColor="text-white"
          >
            Mark as Paid
          </BaseButton>
        </div>
      </header>
    </>
  )
}

export default InvoiceDetailPage