import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getInvoice } from "../services/invoices"

import BaseTag from "../components/shared/BaseTag"
import BaseButton from "../components/shared/BaseButton"

const InvoiceDetailPage = () => {
  const { id } = useParams()
  const [invoice, setInvoice] = useState(null)

  const INVOICE_STATUS = {
    'paid': {
      background: 'bg-emerald-400/20',
      textColor: 'text-emerald-400'
    },
    'pending': {
      background: 'bg-orange-400/20',
      textColor: 'text-orange-400'
    },
    'draft': {
      background: 'bg-slate-400/20',
      textColor: 'text-slater-400'
    },
  }

  useEffect(() => {
    // getInvoice().then(setInvoice)
    getInvoice(id).then(data => setInvoice(data))
  }, [])

  if (!invoice) return <h1>Not found invoice</h1>

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

      <div className="text-white">{JSON.stringify(invoice)}</div>

      <header className="w-[940px] mx-auto bg-[#1f213a] py-3 px-8 mt-10 rounded-lg flex justify-between">
        <div className="flex items-center text-white gap-3">
          <h3>Status</h3>
          <BaseTag
            label={invoice.status}
            background={INVOICE_STATUS[invoice.status].background}
            textColor={INVOICE_STATUS[invoice.status].textColor}
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

      <section className="w-[940px] mx-auto bg-[#1f213a] mt-5 p-12 rounded-lg text-white">
        <header className="flex justify-between">
          <div className="text-3xl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">{invoice.code}</span>
            <div className="text-xl mt-1">
              {invoice.invoice.project.description}
            </div>
          </div>

          <div className="text-base text-right">
            <div>{invoice.bill.from.streetAddress}</div>
            <div>{invoice.bill.from.city}</div>
            <div>{invoice.bill.from.postCode}</div>
            <div>{invoice.bill.from.country}</div>
          </div>
        </header>

        <section className="grid grid-cols-3">
          <div className="flex flex-col gap-10">
            <div className="">
              <div className="text-lg mt-1">Invoice Date</div>
              <div className="text-xl mt-1 font-extrabold">21 Agu 2021</div>
            </div>
            <div className="">
              <div className="text-lg mt-1">Payment Date</div>
              <div className="text-xl mt-1 font-extrabold">21 Agu 2021</div>
            </div>
          </div>
          <div>
            <div className="text-lg mt-1">Bill To</div>
            <div className="text-xl mt-1 font-extrabold">Alex Grim</div>
            <div className="text-base mt-1">Line 1</div>
            <div className="text-base mt-1">Line 2</div>
            <div className="text-base mt-1">Line 3</div>
            <div className="text-base mt-1">Line 4</div>
          </div>
          <div>
            <div className="text-lg mt-1">Send To</div>
            <div className="text-xl mt-1 font-extrabold">alexgrim@mail.com</div>
          </div>
        </section>

        <table className="bg-[#252945] w-full rounded-lg mt-10">
          <thead>
            <tr>
              <td className="p-6 text-left">Item Name</td>
              <td className="p-6">QTY.</td>
              <td className="p-6">Price</td>
              <td className="p-6">Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
            </tr>
            <tr>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
              <td className="px-6 py-3">xyz</td>
            </tr>
          </tbody>
          <tfoot className="bg-[#0b0e16]">
            <tr>
              <td className="px-6 py-10">xyz</td>
              <td className="px-6 py-10">xyz</td>
              <td className="px-6 py-10">xyz</td>
              <td className="px-1 py-10">xyz</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
}

export default InvoiceDetailPage