import style from './Productos.module.css';

import { useEffect, useState } from 'react';

import Producto from '../../components/producto/Producto';
import { products } from '../../data/products';

export const Productos = ({ catalogo }) => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carritoActual = JSON.parse(localStorage.getItem('miCarrito'));
    if (carritoActual && carritoActual.length > 0) {
      setCarrito(carritoActual);
    }

    const productosActuales = JSON.parse(localStorage.getItem('misProductos'));
    if (productosActuales && productosActuales.length > 0) {
      setProductos(productosActuales);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem('misProductos', JSON.stringify(productos));
    obtenerTotal();
  }, [productos]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
    actualizarProductos(item);
  };

    const eliminarDelCarrito = (item) => {
    const carritoActual = JSON.parse(localStorage.getItem('miCarrito')) || [];

    const indice = carritoActual.findIndex(
      (producto) => producto.id === item.id
    );

    if (indice !== -1) {
      carritoActual.splice(indice, 1);

      localStorage.setItem('miCarrito', JSON.stringify(carritoActual));

      setCarrito(carritoActual);

      actualizarProductos(item);
    }
    //que pasa si no existe el producto en el carrito

    const productosActuales = JSON.parse(localStorage.getItem('misProductos'));

    const indiceProducto = productosActuales.findIndex(
      (producto) => producto.id === item.id
    );

    if (indiceProducto !== -1) {
      productosActuales.splice(indiceProducto, 1);

      localStorage.setItem('misProductos', JSON.stringify(productosActuales));

      setProductos(productosActuales);
    }

    obtenerTotal();

    
  };


  const actualizarProductos = (producto) => {
    if (productos.length === 0) {
      const primerProducto = { ...producto, cantidad: 1 };
      setProductos([...productos, primerProducto]);
    } else {
      const indice = productos.findIndex((p) => p.id === producto.id);
      if (indice === -1) {
        const nuevoProducto = { ...producto, cantidad: 1 };
        setProductos([...productos, nuevoProducto]);
      } else {
        const arr = [...productos];
        const productoActualizado = productos[indice];
        productoActualizado.cantidad += 1;
        arr.splice(indice, 1, productoActualizado);
        setProductos([...arr]);
      }
    }
  };

  const obtenerTotal = () => {
    let suma = 0;
    for (const i in productos) {
      const producto = productos[i];
      suma += producto.precio * producto.cantidad;
    }
    setTotal(suma);
  };

  const productosListar = products.map((articulo) => (
    <Producto
      key={articulo.id}
      products={articulo}
      agregarAlCarrito={agregarAlCarrito}
      eliminarDelCarrito={eliminarDelCarrito}
    />
  ));

  return (
    <>
      <div className={style.box}>
        <h2>Productos</h2>
        <div className={style.container}>{productosListar}</div>
      </div>
    </>
  );
};
