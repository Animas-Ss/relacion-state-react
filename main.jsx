// el punto de entrada devido al plugin tiene que ser jsx 
import { createRoot } from 'react-dom/client';// metodo para crear la entrada a mi app 
//importamos el componente para renderizar 
import { App } from './src/App';

const root = createRoot(document.getElementById('app'))//guardamos la referencia de entrada en una variable

// renderizamos 
root.render(
  <>
  <App/>
  </>
)