import './App.css';
import Navbar from './componentes/Navbar.js';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => { //arrow functions yeey
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola Mundo! ItemListContainer' />
    </div>
  );
}

export default App;
