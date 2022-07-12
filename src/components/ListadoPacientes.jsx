import Busqueda from "./Busqueda";
import Paciente from "./Paciente"

const ListadoPacientes = ( {pacientes, setPacientes, setPaciente, eliminarPaciente, busqueda, handleChange, pacientesBuscados} ) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        { pacientes.length > 0 ? (

          <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center ">
                  Administra tus {''}
                  <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              
                <div className="flex flex-col lg:flex-row">
                    <input className="ml-5 mr-5 mb-2 bg-white shadow-md px-5 py-3 rounded-xl lg:w-full lg:mb-0" placeholder="Realizar Búsqueda por Nombre o Propietario" value={busqueda} onChange={handleChange}/>
                </div>
    

               { busqueda !== '' ? (
                    pacientesBuscados.map( (paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))
                ) : busqueda !== '' && pacientesBuscados.length === 0 ? console.log('El usuario no ha sido encontrado.')
                 : (
                    pacientes.map( (paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))
                )
              }
          </>

        ) : (
          <>
              <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center ">
                  Comienza Agregando Pacientes {''}
                  <span className="text-indigo-600 font-bold">Y Aparecerán En Este Lugar</span>
              </p>
      
              { pacientes.map( (paciente) => (
                  <Paciente
                      key={paciente.id}
                      paciente={paciente}
                  />
              ))}
          </>
        )}

    </div>
  )
}

export default ListadoPacientes;