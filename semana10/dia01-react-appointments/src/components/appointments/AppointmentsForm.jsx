import { useState } from "react"

const AppointmentsForm = ({ onSaveAppointment }) => {
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: ''
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  const handleChange = (event) => {
    // const name = event.target.name
    // const value = event.target.value
    
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSaveAppointment = (e) => {
    e.preventDefault()

    const newAppointment = {
      ...form,
      id: crypto.randomUUID()
    }

    onSaveAppointment(newAppointment)

    setForm(INITIAL_FORM_STATE)
  }

  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSaveAppointment}
      >
        <input
          type="text"
          name="petName"
          className="border p-2 shadow-md rounded-md"
          placeholder="Nombre de mi mascota"
          value={form.petName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="petAge"
          min="0"
          max="50"
          className="border p-2 shadow-md rounded-md"
          placeholder="Edad de la mascota"
          value={form.petAge}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          className="border p-2 shadow-md rounded-md"
          placeholder="Dueño de la mascota"
          value={form.ownerName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="appointmentDate"
          className="border p-2 shadow-md rounded-md"
          placeholder="Fecha de la cita"
          value={form.appointmentDate}
          onChange={handleChange}
        />
        <input
          type="time"
          name="appointmentTime"
          className="border p-2 shadow-md rounded-md"
          placeholder="Hora de la cita"
          value={form.appointmentTime}
          onChange={handleChange}
        />
        <textarea
          name="symptoms"
          className="border p-2 shadow-md rounded-md"
          placeholder="Síntomas"
          rows={3}
          value={form.symptoms}
          onChange={handleChange}
        />
        <input
          className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
          type="submit"
          value="Guardar"
        />
      </form>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </section>
  )
}

export default AppointmentsForm