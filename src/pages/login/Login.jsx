import style from './Login.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setLogueado }) => {
  const [back, setBack] = useState(null);
  const [nuevaSesion, setNuevaSesion] = useState({
    correo: null,
    contrasena: null,
  });

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    if (login) {
      setBack(login);
    }
  }, []);

  const navigate = useNavigate();

  const manejarEntrada = (evento) => {
    setNuevaSesion({
      ...nuevaSesion,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (!nuevaSesion.correo || !nuevaSesion.contrasena) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const esValido =
      nuevaSesion.correo === back.correo &&
      nuevaSesion.contrasena === back.contrasena;

    if (esValido) {
      localStorage.setItem('token', JSON.stringify({ name: back.nombre }));
      setLogueado(true);
      navigate('/bit02spa/productos');
    } else {
      alert('Correo y/o contraseña incorrecta');
    }
  };

  const salida = back ? (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>INICIAR SESION</h1>
        <form className={style.form} onSubmit={manejarEnvio}>
          <input
            type="email"
            placeholder="email"
            onInput={manejarEntrada}
            name="correo"
            className={style.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onInput={manejarEntrada}
            name="contrasena"
            className={style.input}
          />
          <button className={style.button}>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  ) : (
    <div>Para iniciar sesión primero debe registrarse.</div>
  );

  return <>{salida}</>;
};
