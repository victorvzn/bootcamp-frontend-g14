import { useState, useContext } from "react"

import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"

import { createExpense } from "../services/budgets"

const MySwal = withReactContent(Swal)

const NewExpense = () => {
  const { user } = useContext(UserContext)

  const [form, setForm] = useState({
    name: '',
    amount: '',
  })

  const navigate = useNavigate()

  // const { setAuth } = useAuth()

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = form.name
    const amount = form.amount

    createExpense(name, amount)
      .then(() => {
        MySwal.fire({
          icon: 'success',
          title: 'Expense saved!'
        })
      })
      .catch((err) => {
        MySwal.fire({
          icon: 'error',
          title: 'Error!'
        })
      })


  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-center text-3xl mb-8">Budget App - Add Expense</h1>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
          Name
          <input
            type="text"
            name="name"
            placeholder="Restaurant, Travel, etc"
            className="border w-full p-3"
            onChange={handleChange}
            value={form?.name}
          />
        </label>
        <label className="font-medium">
          Amount
          <input
            type="number"
            name="amount"
            placeholder="0"
            className="border w-full p-3"
            onChange={handleChange}
            value={form?.amount}
          />
        </label>
        <input
          type="submit"
          value="Save budget"
          className="w-full bg-amber-300 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default NewExpense