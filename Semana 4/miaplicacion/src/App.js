import logo from './images/vegeta.jpg';
import foto from './images/gokucalvo.jpg';
import './App.css';
import Image from './components/image'; // Importa el componente Image correctamente

import Button from './components/button';

function App() {
  const lanzarAlerta = () => {
    alert("Has pulsado el botón");
  }
  return (
    <div>
      <header>
        <p>Hola Soy Goku</p>
        {/* Pasamos las imágenes al componente */}
        <Image paramlogo={logo} />
        <Image paramlogo={foto} />
        <Button 
          id={"alerta"} 
          name={"alerta"}
          events={()=> {
            lanzarAlerta();
          }}/>
      </header>
    </div>
  );
}

export default App;