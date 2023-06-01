import style from './Productos.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { products } from '../../data/products';

import Producto from '../producto/Producto';

export const Productos = () => {
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
      <div className={style.box}>
        <h2>Productos</h2>
        <div className={style.container}>
          <Producto products={products} />
        </div>
      </div>
    </>
  );
};
