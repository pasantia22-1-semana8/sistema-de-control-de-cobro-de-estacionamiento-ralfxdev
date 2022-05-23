/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Styles */
import "./styles/Ajustes.css";

const Ajustes = (props) => {
  if (props.is_superuser === true) {
    return (
      <React.Fragment>
        <div className="sidebar">
          <Link className="nav-link" to="/ajustes/generales">
            General
          </Link>
          <Link className="nav-link" to="/ajustes/cuenta">
            Cuenta
          </Link>
          <Link className="nav-link" to="/ajustes/usuarios">
            Usuarios
          </Link>
          <Link className="nav-link" to="/ajustes/register">
            Crear Usuario
          </Link>
          <Link className="nav-link" to="/ajustes/tarifas">
            Tarifas
          </Link>
          <Link className="nav-link" to="/">
            Documentación
          </Link>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="sidebar">
          <Link className="nav-link" to="/ajustes/cuenta">
            Cuenta
          </Link>
          <Link className="nav-link" to="/">
            Documentación
          </Link>
        </div>
      </React.Fragment>
    );
  }
};

export default Ajustes;
