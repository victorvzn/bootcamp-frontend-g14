import { useState } from "react"

import { useHero } from '../hooks/useHero'
import { useNavigate } from "react-router-dom"

import { toast } from 'sonner'

const NewHero = () => {
  const { createHero } = useHero()

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    image: '',
  })

  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    
      console.log('saving form..')
      
      // debugger
      if (!form.name) { // Validamos que el nombre no esté vacío
        setError(true)

        setTimeout(() => setError(false), 3000)
        return
      }

      const response = await createHero(form)

      console.log({response})

      if (response.id) {

        toast.success('Hero has been created')

        setForm({
          name: '',
          image: '',
        })

        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className="flex flex-col gap-4 w-60"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl">New Hero</h2>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
          <span className="font-medium">Name is required.</span>
        </div>
      )}

      <input
        type="text"
        name="name"
        placeholder="Name"
        className=" border px-3 py-2 bg-slate-200"
        onChange={handleChange}
        value={form.name}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        className=" border px-3 py-2 bg-slate-200"
        onChange={handleChange}
        value={form.image}
      />

      <input
        type="submit"
        value="Save"
        className=" border px-3 py-2 bg-emerald-400"
      />
    </form>
  )
}

export default NewHero