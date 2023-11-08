
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>

  );
}

export default App;
