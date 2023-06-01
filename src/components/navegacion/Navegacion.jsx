import style from './Navegacion.module.css';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Announcement from '../announcement/Announcement';

const Navegacion = ({ logueado, setLogueado }) => {
  let salida = null;
  const navigate = useNavigate();

  const manejarCerrarSesion = () => {
    localStorage.removeItem('token');
    setLogueado(false);
    navigate('/bit02spa/login');
  };

  if (logueado) {
    salida = (
      <>
        <Link to="/bit02spa/productos">Productos</Link>
        <Link to="/bit02spa/cart" style={{ textDecoration: 'none', color: 'black' }}>
          <AiOutlineShoppingCart />
        </Link>
        <button onClick={manejarCerrarSesion}>Cerrar sesión</button>
      </>
    );
  } else {
    salida = (
      <>
        <Link to="/bit02spa/login" style={{ textDecoration: 'none', color: 'black' }}>
          <span>Iniciar Sesion</span>
        </Link>
        <Link to="/bit02spa/registro" style={{ textDecoration: 'none', color: 'black' }}>
          <span>Registrarse</span>
        </Link>
        <Link to="/bit02spa/cart" style={{ textDecoration: 'none', color: 'black' }}>
          <AiOutlineShoppingCart />
        </Link>
      </>
    );
  }

  return (
    <>
    <Announcement/>
      <nav>
        <section className={style.search}>
          <span>ES</span>
          <div className={style.searchItems}>
            <input type="text" placeholder="Buscar" />
            <AiOutlineSearch />
          </div>
        </section>
        <section className={style.logo}>
          <Link to="/bit02spa" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>TOYS</h1>
          </Link>
        </section>
        <section className={style.login}>{salida}</section>
      </nav>
    </>
  );
};

export default Navegacion;
