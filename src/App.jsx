import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navegacion  from './components/navegacion/Navegacion';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';
import { Registro } from './pages/registro/Registro';
import { Login } from './pages/login/Login';
import { PaginaPrivada } from './components/PaginaPrivada';

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
        <Route path="/bit02spa/productos" element={<Productos />} />
        <Route
          path="/bit02spa/registro"
          element={<Registro setLogueado={setLogueado} />}
        />
        <Route
          path="/bit02spa/login"
          element={<Login setLogueado={setLogueado} />}
        />
        <Route path="/bit02spa/privado" element={<PaginaPrivada />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
