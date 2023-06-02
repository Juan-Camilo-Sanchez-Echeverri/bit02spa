import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Productos } from '../productos/Productos';
import { products } from '../../data/products';

export const Pagos = () => {
  const [nombre, setNombre] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      setNombre(token.name);
    } else {
      navigate('/iniciar-sesion');
    }
  }, []);

  return (
    <>
      <div>Hola, {nombre}!</div>
      <Productos catalogo={products} />
    </>
  );
};
