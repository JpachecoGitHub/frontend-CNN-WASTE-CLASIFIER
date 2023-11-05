//import { useForm } from 'react-hook-form';
import './App.css';
import Boton from './componentes/boton';
import SubiendoImagenes from './componentes/SubiendoImagenes';


function App() {

  const manejarClic = () => {
    console.log('Clic');
  }


  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h4>Ingresa la imagen que deseas clasificar</h4>
        <div>
          <SubiendoImagenes/>
        </div>
        <Boton
        texto='Clasificar'
        esBotonDeClic={true}
        manejarClic={manejarClic}>
        </Boton>
      </div>
    </div>
  );
}

export default App;
