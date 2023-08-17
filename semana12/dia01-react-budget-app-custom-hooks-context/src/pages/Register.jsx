import { useState } from "react"

import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    budget: 0
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = 'https://64dd6d6a825d19d9bfb1280b.mockapi.io/api/v1/users'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    setForm({ email: '', password: '' })

    navigate('/login')
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleSubmit}>
      <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>

      {JSON.stringify(form)}

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
          Full Name
          <input
            type="text"
            name="fullname"
            placeholder="Jhon Doe"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form?.fullname}
          />
        </label>
        <label className="font-medium">
          Email
          <input
            type="email"
            name="email"
            placeholder="jhon@mail.com"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form?.email}
          />
        </label>
        <label className="font-medium">
          Password
          <input
            type="password"
            name="password"
            placeholder="Sup3rs3cr3tp@$$"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form?.password}
          />
        </label>
        <input
          type="submit"
          value="Register"
          className="w-full bg-amber-300 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default Register