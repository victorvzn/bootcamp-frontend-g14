import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSaveAppointment = (form) => {
    setAppointments([...appointments, form])
  }

  return (
    <>
      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />

      <AppointmentsList appointments={appointments} />
    </>
  )
}

export default Appointments