import { useState, useEffect } from 'react' 
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); /* Arreglo de pacientes */
  const [paciente, setPaciente] = useState({}); 
  const [busqueda, setBusqueda] = useState('');
  const [pacientesBuscados, setPacientesBuscados] = useState(pacientes);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);


  // Búsqueda de pacientes
  
  const handleChange = e => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = terminoBusqueda => {
    const resultadoBusqueda = pacientesBuscados.filter(paciente => {
      if(paciente.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || paciente.propietario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return paciente;
      }
    });
    setPacientesBuscados(resultadoBusqueda);
    
    // Devolver los pacientes a resultado Busqueda

    if(busqueda === '') {
      setPacientesBuscados(pacientes);
    }

  }





  // Eliminar pacientes
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados);
    setPacientesBuscados(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>


      <div className="mt-12 md:flex">
          <Formulario 
          setPacientes={setPacientes}
          paciente={paciente}  
          pacientes={pacientes}
          setPaciente={setPaciente}      
          />

          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente} 
          eliminarPaciente={eliminarPaciente}
          setPacientes={setPacientes}
          busqueda={busqueda}
          handleChange={handleChange}
          pacientesBuscados={pacientesBuscados}
          />
      </div>

    </div>
  )
}

export default App
