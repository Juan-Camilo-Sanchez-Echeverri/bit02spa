import style from './Registro.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registro = ({ setLogueado }) => {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: null,
    correo: null,
    contrasena: null,
  });

  const navigate = useNavigate();

  const manejarEntrada = (evento) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (
      !nuevoUsuario.nombre ||
      !nuevoUsuario.correo ||
      !nuevoUsuario.contrasena
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    localStorage.setItem('login', JSON.stringify(nuevoUsuario));
    localStorage.setItem(
      'token',
      JSON.stringify({ name: nuevoUsuario.nombre })
    );
    setLogueado(true);
    navigate('/bit02spa/productos');
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>CREAR UNA CUENTA</h1>
        <form onSubmit={manejarEnvio} className={style.form}>
          <input
            type="text"
            placeholder="Nombre"
            onInput={manejarEntrada}
            name="nombre"
            className={style.input}
          />
            <input
              type="password"
              placeholder="Contraseña"
              onInput={manejarEntrada}
              name="contrasena"
              className={style.input}
            />
          <input
            type="email"
            placeholder="Correo"
            onInput={manejarEntrada}
            name="correo"
            className={style.input}
          />
          <span className={style.agreement}>
            Al crear una cuenta, doy mi consentimiento para el tratamiento de
            mis datos personales de acuerdo con la <b>POLITICA DE PRIVACIDAD</b>
          </span>
          <button type="submit"className={style.button}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};
