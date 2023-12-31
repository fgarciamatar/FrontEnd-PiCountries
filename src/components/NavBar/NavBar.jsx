import style from "./NavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation(); //ruta actual 
  let navigate = useNavigate(); //hook de react para navegar entre las rutas

  const handleBack = () => {
    navigate(-1);//vuelve a la ruta anterior 
  };

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <a href="https://github.com/fgarciamatar/PI-Countries">
          <img
            src="./../../../imagenes/tierra.png"
            alt="Logo Planeta"
            className={style.imagen}
          />
        </a>

        <h1> CountriesWeb</h1>
      </div>
      <div className={style.container2}>
        {pathname !== "/home" ? (
          <img
            className={style.botonAtras}
            src={"./../../../imagenes/atras.png"}
            alt="boton atras"
            onClick={handleBack}
          />
        ) : (
          <Link to={"/home"}>
            <img
              className={style.botonAtrasOff}
              src={"./../../../imagenes/atras.png"}
              alt="boton atras"
            />
          </Link>
        )}

        {pathname !== "/home" ? (
          <Link to={"/home"}>
            <button className={style.botonNav}>HOME</button>
          </Link>
        ) : (
          <Link to={"/home"}>
            <button className={style.botonNavActive}>HOME</button>
          </Link>
        )}
        {pathname !== "/home/create" ? (
          <Link to={"/home/create"}>
            <button className={style.botonNav}>CREAR ACTIVIDAD</button>
          </Link>
        ) : (
          <Link to={"/home/create"}>
            <button className={style.botonNavActive}>CREATE ACTIVITY</button>
          </Link>
        )}

        {pathname !== "/home/about" ? (
          <Link to={"/home/about"}>
            <button className={style.botonNav}>ABOUT</button>
          </Link>
        ) : (
          <Link to={"/home/about"}>
            <button className={style.botonNavActive}>ABOUT</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
