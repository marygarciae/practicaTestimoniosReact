import './App.css';
import Testimonio from './componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros Alumnos </h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='ana'
          cargo='Ingeniera de software' 
          empresa='Spotify'
          testimonio='Estoy feliz de trabajar por mis sueños, ha sido lo mejor de mi vida y quiero seguir aprendiendo y trabajando' />
        <Testimonio
          nombre='Ana'
          pais='Colombia'
          imagen='emma'
          cargo='Desarrolladora de software' 
          empresa='Amazone'
          testimonio='Cambiar de profesion me ha devuelto la felicidad, ahora solo quiero desarrollar' />
        <Testimonio
          nombre='Sara'
          pais='España'
          imagen='sara'
          cargo='Tester' 
          empresa='Globant'
          testimonio='Vivo en España pero me siento muy cerca de mis compañeros porque el ambiente laboral es divino' />
      
      </div>
    </div>
  );
}

export default App;
