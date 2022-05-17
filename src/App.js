import './App.css';
import Navbar from './componentes/Navbar.js';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

const App = () => { //arrow functions yeey
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola Mundo! ItemListContainer' />
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
    </div>
  );
}

export default App;
