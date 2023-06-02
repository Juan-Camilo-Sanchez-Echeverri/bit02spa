import style from './Producto.module.css';

const Producto = ({ products,agregarAlCarrito,eliminarDelCarrito }) => {
  return (
        <div className={style.tarjeta} key={products.id}>
          <figure>
            <img src={products.img} alt={products.nombre} />
            <figcaption>{products.nombre}</figcaption>
          </figure>
          <div>${products.precio}</div>
          <div className={style.botones}>
          <button onClick={()=>agregarAlCarrito(products)}>Agregar</button>
          <button onClick={()=>eliminarDelCarrito(products)} className={style.btnEliminar}>Eliminar</button>
          </div>
        </div>
      );
};

export default Producto;
