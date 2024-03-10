import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageServicios from './components/itemServicios/ItemServicios.jsx';
import ImageFumigaciones from './components/itemFumigaciones/ImageFumigaciones.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a PETIT Servicios"/>}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categorias:'/>}/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
        <Route path='/Servicios' element={<ImageServicios greeting="Nuestros Servicios"/>}/>
        <Route path='/Productos' element={<ItemListContainer greeting="Nuestros Productos"/>} />
        <Route path='/Nosotros' element={<h3>En construcción...</h3>}/>
        <Route path='/Fumigaciones' element={<ImageFumigaciones greeting="Fumigaciones"/>}/>
        <Route path='/Control de Plagas' element={<h3>En construcción...</h3>}/>
        <Route path='/Contacto' element={<h3>En construcción...</h3>}/>
        <Route path='/Carrito' element={<h3>En construcción...</h3>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
