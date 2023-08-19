import { useState } from "react"

const Home = () => {
  const [form, setForm] = useState({
    name: '',
    image: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <div className="container mx-auto">

      { JSON.stringify(form) }

      <form
        className="flex flex-col gap-4 w-60"
      >
        <h2 className="text-3xl">New Hero</h2>

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

    </div>
  )
}

export default Home