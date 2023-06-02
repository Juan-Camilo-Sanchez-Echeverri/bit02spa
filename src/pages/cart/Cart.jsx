import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import style from './Cart.module.css';

export const Cart = () => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagar, setPagar] = useState(null);

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

  const obtenerTotal = () => {
    let suma = 0;
    for (const i in productos) {
      const producto = productos[i];
      suma += producto.precio * producto.cantidad;
    }
    setTotal(suma);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    setProductos([]);
    setTotal(0);
    setPagar(null);
  };

  const manejarPago = () => {
    if (productos.length === 0) {
      alert('Carrito vacio.');
    } else {
      const resumen = productos.map((p) => (
        <div key={p.id} className={style.infoCompra}>
          {p.nombre} ${p.precio} x {p.cantidad} = ${p.precio * p.cantidad}
        </div>
      ));

      const gracias = (
        <div className="detalles-pagar">
          <div className={style.mensajeCompra}>Gracias por su compra.
          <button onClick={() => setPagar(null)}>cerrar</button>
          </div>
        </div>
      );
      const detalles = (
        <div className="detalles-pagar">
          <div className={style.title}>Resumen</div>
          {resumen}
          <div className={style.infoCompra}>Total artículos: {carrito.length}</div>
          <div className={style.infoCompra}>Total productos: {productos.length}</div>
          <div className={style.infoTotal}>
            <strong>Total: ${total}</strong>
          </div>
          <button onClick={limpiarCarrito}>Cancelar y limpiar carrito</button>
          <button onClick={() => setPagar(null)}>Cancelar</button>
          <button
            onClick={() => {
              setCarrito([]);
              setProductos([]);
              setTotal(0);
              setPagar(gracias);
            }}
            x
          >
            Pagar
          </button>
        </div>
      );
      setPagar(detalles);
    }
  };
  return (
    <>
      {pagar && <div className="contenedor-pagar">{pagar}</div>}
      <div className={style.wrapper}>
        <h1 className={style.title}>Tu Carrito</h1>
        <div className={style.top}>
          <Link to="/bit02spa/productos">Seguir Comprando</Link>
          {total > 0 && (
            <>
              <button className={style.topButton} onClick={limpiarCarrito}>
                Vacear Carrito
              </button>
              <button className={style.topButton} onClick={manejarPago}>
                Realizar Compra
              </button>
            </>
          )}
        </div>
        <div className={style.bottom}>
          <div className={style.summary}>
            <h1 className={style.summaryTitle}>Resumen </h1>
            <div className={style.summaryItem}>
              <span>Cantidad Artículos: </span>
              <span>{carrito.length} </span>
            </div>
            <div className={style.summaryItem}>
              <span>Cantidad Productos: </span>
              <span>{productos.length}</span>
            </div>
            <div className={style.summaryItem}>
              <span>Total</span>
              <span>$ {total} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
