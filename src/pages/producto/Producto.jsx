import style from './Producto.module.css';

const Producto = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className={style.tarjeta} key={product.id}>
          <figure>
            <img src={product.img} alt={product.nombre} />
            <figcaption>{product.nombre}</figcaption>
          </figure>
          <div>${product.precio}</div>

          <button>Agregar</button>
        </div>
      ))}
    </>
  );
};

export default Producto;
