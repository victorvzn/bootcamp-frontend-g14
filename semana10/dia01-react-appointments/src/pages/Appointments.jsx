import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSaveAppointment = (form) => {
    setAppointments([...appointments, form])
  }

  const handleRemove = (id) => {
    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  return (
    <>
      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />

      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
      />
    </>
  )
}

export default Appointments