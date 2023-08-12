import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { getInvoice } from "../services/invoices"
import { formatNumber } from "../utils"

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

      {/* <div className="text-white">{JSON.stringify(invoice)}</div> */}

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
              <div className="text-xl mt-1 font-extrabold">{invoice.invoice.date}</div>
            </div>
            <div className="">
              <div className="text-lg mt-1">Payment Due</div>
              <div className="text-xl mt-1 font-extrabold">{invoice.invoice.paymentDue}</div>
            </div>
          </div>
          <div>
            <div className="text-lg mt-1">Bill To</div>
            <div className="text-xl mt-1 font-extrabold">{invoice.bill.to.client.name}</div>
            <div className="text-base mt-1">{invoice.bill.to.client.streetAddress}</div>
            <div className="text-base mt-1">{invoice.bill.to.city}</div>
            <div className="text-base mt-1">{invoice.bill.to.postCode}</div>
            <div className="text-base mt-1">{invoice.bill.to.country}</div>
          </div>
          <div>
            <div className="text-lg mt-1">Send To</div>
            <div className="text-xl mt-1 font-extrabold">{invoice.bill.to.client.email}</div>
          </div>
        </section>

        <table className="bg-[#252945] w-full rounded-lg mt-10">
          <thead>
            <tr>
              <td className="p-6 text-left w-1/2">Item Name</td>
              <td className="p-6 w-1/6">QTY.</td>
              <td className="p-6 w-1/6">Price</td>
              <td className="p-6 w-1/5">Total</td>
            </tr>
          </thead>
          <tbody>
            {invoice.invoice.items.map(item => {
              return (
                <tr key={item.id}>
                  <td className="px-6 py-3">{item.name}</td>
                  <td className="px-6 py-3">{item.qty}</td>
                  <td className="px-6 py-3">{item.price}</td>
                  <td className="px-6 py-3">
                    {invoice.invoice.currency.symbol}&nbsp;
                    {formatNumber(item.total)}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot className="bg-[#0b0e16]">
            <tr>
              <td className="px-6 py-10">Amount Due</td>
              <td className="px-6 py-10"></td>
              <td className="px-1 py-10 text-4xl font-extrabold" colSpan={2}>
                {invoice.invoice.currency.symbol}&nbsp;
                {formatNumber(invoice.invoice.grandTotal)}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
}

export default InvoiceDetailPage