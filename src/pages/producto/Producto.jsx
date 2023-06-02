import style from './Producto.module.css';

const Producto = ({ products,agregarAlCarrito }) => {
  return (
        <div className={style.tarjeta} key={products.id}>
          <figure>
            <img src={products.img} alt={products.nombre} />
            <figcaption>{products.nombre}</figcaption>
          </figure>
          <div>${products.precio}</div>

          <button onClick={()=>agregarAlCarrito(products)}>Agregar</button>
        </div>
      );
};

export default Producto;
