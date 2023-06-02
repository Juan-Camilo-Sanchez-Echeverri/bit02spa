import { Link } from 'react-router-dom';

import style from './Cart.module.css';

export const Cart = ({
  totalArticulos,
  totalProductos,
  total,
  limpiarCarrito,
  manejarPago,
}) => {
  return (
    <>
      <div className={style.wrapper}>
        <h1 className={style.title}>TU CARRITO</h1>
        <div className={style.top}>
          <Link to="/bit02spa/productos">Seguir Comprando</Link>
          {total > 0 && (
            <>
              <button className={style.topButton} onClick={limpiarCarrito}>
                Vacear Carrito
              </button>
              <button className={style.topButton} onClick={manejarPago}>
                COMPRAR AHORA
              </button>
            </>
          )}
        </div>
        <div className={style.bottom}>
          <div className={style.summary}>
            <h1 className={style.summaryTitle}>RESUMEN DEL PEDIDO</h1>
            <div className={style.summaryItem}>
              <span>Cantidad Artículos: </span>
              <span>{totalArticulos} </span>
            </div>
            <div className={style.summaryItem}>
              <span>Cantidad Productos: </span>
              <span>{totalProductos}</span>
            </div>
            <div className={style.summaryItem}>
              <span>Total</span>
              <span>{total} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
