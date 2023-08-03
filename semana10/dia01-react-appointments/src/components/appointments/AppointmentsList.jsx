
// TODO: Necesitamos crear un componente para listar las citas. Uno llamado ApointmentItem y mejorar los estilos.

const AppointmentsList = ({ appointments }) => {
  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Listado de Pacientes</h2>

      <ul>
        {appointments.map(appointment => {
          return <li key={appointment.petName}>{appointment.petName}</li>
        })}
      </ul>
    </section>
  )
}

export default AppointmentsList