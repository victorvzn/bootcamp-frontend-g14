import { useState, useContext, useEffect } from "react"

import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// import useAuth from "../hooks/useAuth"

import { UserContext } from "../context/UserContext"

import { getUser } from "../services/budgets"

const MySwal = withReactContent(Swal)

const NewBudget = () => {
  const { user } = useContext(UserContext)

  const [form, setForm] = useState({
    budget: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    getUser(user.id)
      .then(budget => setForm({ budget }))
  }, [])

  // const { setAuth } = useAuth()

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const budget = form.budget

    const userId = user.id
    
    const url = `https://64dd6d6a825d19d9bfb1280b.mockapi.io/api/v1/users/${userId}`

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ budget })
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    MySwal.fire({
      icon: 'success',
      title: 'Budget saved!'
    })
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-center text-3xl mb-8">Budget App - New Budget</h1>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
          Budget
          <input
            type="number"
            name="budget"
            placeholder="0"
            className="border w-full p-3"
            onChange={handleChange}
            value={form?.budget}
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

export default NewBudget