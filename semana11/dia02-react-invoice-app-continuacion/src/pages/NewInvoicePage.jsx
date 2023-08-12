import { useState } from "react"
import { Link } from "react-router-dom"

import { createInvoice } from "../services/invoices"

import { TbChevronLeft } from "react-icons/tb"
import BaseButton from "../components/shared/BaseButton"

const NewInvoicePage = () => {
  const [form, setForm] = useState({
    billFromStreetAddress: '',
    billFromCity: '',
    billFromPostCode: '',
    billToClientsName: '',
    billToClientsEmail: '',
    billToClientsStreetAddress: '',
    billToCity: '',
    billToPostCode: '',
    billToInvoiceDate: '',
    billToProjectDescription: '',
    billFromCountry: '',
    billToCountry: '',
    billToInvoicePaymentTerms: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log('Enviando formulario', form)

    const newForm = {
      "code": "XXXXX",
      "status": "draft",
      "bill": {
        "from": {
          "streetAddress": form.billFromStreetAddress,
          "city": form.billFromCity,
          "postCode": form.billFromPostCode,
          "country": "-"
        },
        "to": {
          "client": {
            "name": form.billToClientsName,
            "email": form.billToClientsEmail
          },
          "streetAddress": form.billToClientsStreetAddress,
          "city": form.billToCity,
          "postCode": form.billToPostCode,
          "country": "-"
        }
      },
      "invoice": {
        "date": form.billToInvoiceDate,
        "paymentTerms": form.billToInvoicePaymentTerms,
        "project": {
          "description": form.billToProjectDescription
        },
        "grandTotal": 0.00,
        "currency": {
          "symbol": "$"
        },
        "items": []
      }
    }
  
    const res = await createInvoice(newForm)

    console.log(res)
  }

  return (
    <>
      <nav className="w-[640px] mx-auto mt-20">
        <Link
          to='/'
          className="text-white font-bold flex gap-3 items-center "
        >
          <TbChevronLeft /> Go home
        </Link>
      </nav>

      {/* <pre className="text-white">{JSON.stringify(form, null, 2)}</pre> */}

      <section className="w-[640px] mx-auto bg-[#1f213a] py-3 px-8 mt-10 rounded-lg flex flex-col justify-between">
        <div className="flex items-center text-white gap-3 mb-10">
          <h3 className="text-3xl font-extrabold">New Invoice</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <h4 className="text-[#7763df] font-bold mb-5">Bill From</h4>

          <label className="text-white flex flex-col gap-2 mb-4">
            Street Adress
            <input name="billFromStreetAddress" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-white flex flex-col gap-2 mb-4">
              City
              <input name="billFromCity" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-white flex flex-col gap-2 mb-4">
              Post Code
              <input name="billFromPostCode" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-white flex flex-col gap-2 mb-4">
              Country
              <select name="billFromCountry" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange}>
                <option>Perú</option>
                <option>United Kingdom</option>
              </select>
            </label>
          </div>

          <h4 className="text-[#7763df] font-bold mb-5 mt-10">Bill To</h4>

          <label className="text-white flex flex-col gap-2 mb-4">
            Client&amp;s Name
            <input name="billToClientsName" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
          </label>

          <label className="text-white flex flex-col gap-2 mb-4">
            Client&amp;s Email
            <input name="billToClientsEmail" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
          </label>

          <label className="text-white flex flex-col gap-2 mb-4">
            Street Address
            <input name="billToClientsStreetAddress" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-white flex flex-col gap-2 mb-4">
              City
              <input name="billToCity" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-white flex flex-col gap-2 mb-4">
              Post Code
              <input name="billToPostCode" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-white flex flex-col gap-2 mb-4">
              Country
              <select name="billToCountry" className="w-full py-4 px-5 rounded-lg bg-[#141625] basis-1/3" onChange={handleChange}>
                <option>Perú</option>
                <option>United Kingdom</option>
              </select>
            </label>
          </div>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-white flex flex-col gap-2 mb-4 basis-1/2">
              Invoice Date
              <input name="billToInvoiceDate" type="date" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
            </label>
            <label className="text-white flex flex-col gap-2 mb-4 basis-1/2">
              Payment Terms
              <select name="billToInvoicePaymentTerms" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange}>
                <option>Next 15 Days</option>
                <option>Next 30 Days</option>
                <option>Next 60 Days</option>
              </select>
            </label>
          </div>

          <label className="text-white flex flex-col gap-2 mb-4">
            Project Description
            <input name="billToProjectDescription" type="text" className="w-full py-4 px-5 rounded-lg bg-[#141625]" onChange={handleChange} />
          </label>

          <h4 className="text-white text-2xl font-bold mb-5 mt-10">Item List</h4>

          {/* TODO: Crear este componente item list para guardar los datos en el api de json-server */}

          <div className="flex justify-end gap-3">
            <BaseButton
              background="bg-slate-400"
              textColor="text-white"
            >
              Cancel
            </BaseButton>
            <BaseButton
              background="bg-indigo-400"
              textColor="text-white"
            >
              Save Changes
            </BaseButton>
          </div>

        </form>
      </section>
    </>
  )
}

export default NewInvoicePage