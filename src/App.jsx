import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navegacion  from './components/navegacion/Navegacion';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';
import { PaginaRegistro } from './components/PaginaRegistro';
import { PaginaIniciarSesion } from './components/PaginaIniciarSesion';
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
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/registro"
          element={<PaginaRegistro setLogueado={setLogueado} />}
        />
        <Route
          path="/login"
          element={<PaginaIniciarSesion setLogueado={setLogueado} />}
        />
        <Route path="/privado" element={<PaginaPrivada />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
