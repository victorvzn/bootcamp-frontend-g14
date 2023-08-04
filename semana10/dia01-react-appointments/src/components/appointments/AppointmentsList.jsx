
// TODO: Necesitamos crear un componente para listar las citas. Uno llamado ApointmentItem y mejorar los estilos.

const AppointmentsList = ({ appointments, onRemove, onEdit }) => {
  if (appointments.length === 0) {
    return (
      <section className="w-1/2 p-4 bg-white rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>

        <div className="flex justify-center items-center gap-3 h-96 text-2xl">
          No hay citas.
        </div>
      </section>
    )
  }

  return (
    <section className="w-1/2 p-4 bg-white rounded-lg">
      <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>

      <div className="flex flex-col gap-3">
        {appointments.map(appointment => {
          return (
            <div
              key={appointment.id}
              className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300 flex justify-between"
            >
              <div>
                <h4 className="font-semibold text-lg">Mascota</h4>
                
                <div>
                  <strong>Nombre:</strong> {appointment.petName}
                </div>

                <div>
                  <strong>Edad (años):</strong> {appointment.petAge}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Dueño</h4>

                <div>
                  <strong>Nombre:</strong> {appointment.ownerName}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Citas</h4>

                <div>
                  <strong>Fecha:</strong> {appointment.appointmentDate}
                </div>
                <div>
                  <strong>Hora:</strong> {appointment.appointmentTime}
                </div>
                <div>
                  <strong>Sintomas:</strong> {appointment.symptoms}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
                >
                  Confirmar cita
                </a>
                <button
                  className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer"
                  onClick={() => onEdit(appointment)}
                >
                  Editar
                </button>
                <button
                  className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
                  onClick={() => onRemove(appointment.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AppointmentsList