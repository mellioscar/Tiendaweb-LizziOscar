import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageServicios from './components/itemServicios/ItemServicios.jsx';
import ImageFumigaciones from './components/itemFumigaciones/ImageFumigaciones.jsx';
import ImageControlPlagas from './components/itemControlPlagas/ImageControlPlagas.jsx';
import Contacto from './components/itemContacto/Contacto.jsx';
import Cart from './components/cart/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Nosotros from './components/viewNosotros/Nosotros.jsx';
import Checkout from './components/checkout/Checkout.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/navBar/Footer.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Nosotros greeting="Bienvenidos a PETIT Servicios"/>}/>
          <Route path='/categories/:categoryId' element={<ItemListContainer greeting="Categorias:"/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/Servicios' element={<ImageServicios greeting="Nuestros Servicios"/>}/>
          <Route path='/Productos' element={<ItemListContainer greeting="Nuestros Productos"/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Fumigaciones' element={<ImageFumigaciones greeting="Fumigaciones"/>}/>
          <Route path='/Control de Plagas' element={<ImageControlPlagas/>}/>
          <Route path='/Contacto' element={<Contacto greeting="Contactaté con Nosotros:"/>}/>
          <Route path='/Carrito' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
