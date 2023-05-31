import style from './NavBar.module.css';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav>
        <section className={style.search}>
          <span>ES</span>
          <div className={style.searchItems}>
            <input type="text" placeholder="Buscar" />
            <AiOutlineSearch />
          </div>
        </section>
        <section className={style.logo}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>TOYS</h1>
          </Link>
        </section>

        <section className={style.login}>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <span>Iniciar Sesion</span>
          </Link>
          <Link
            to="/registrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <span>Registrarse</span>
          </Link>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
              <AiOutlineShoppingCart />
            </Link>
        </section>
      </nav>

    </>
  );
};

export default Header;
