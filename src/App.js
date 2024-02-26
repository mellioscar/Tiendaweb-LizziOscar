import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer.jsx';

function App() {
  const saludo='Hola chicos!!!'

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos' saludo={saludo}/>
    </div>
  )
}

export default App;