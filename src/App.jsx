import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import  Navegacion  from './components/navegacion/Navegacion';
import  Footer from './components/footer/Footer';

import { Home } from './pages/Home';
import { Registro } from './pages/registro/Registro';
import { Login } from './pages/login/Login';
import { Cart } from './pages/cart/Cart';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';
import { Productos } from './pages/productos/Productos';

function App() {
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    const token = JSON.parse(localStorage.getItem('token'));
    if (login && token) {
      setLogueado(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navegacion logueado={logueado} setLogueado={setLogueado} />
      <Routes>
        <Route path="/bit02spa" element={<Home />} />
        <Route path = '/bit02spa/productos' element={<Productos/>}/>
        <Route
          path="/bit02spa/registro"
          element={<Registro setLogueado={setLogueado} />}
        />
        <Route
          path="/bit02spa/login"
          element={<Login setLogueado={setLogueado} />}
        />
        <Route path='/bit02spa/cart' element= {<Cart/>}/>
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
