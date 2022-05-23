/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Styles */
import "./styles/Ajustes.css";

const Ajustes = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <Link className="nav-link" to="/ajustes/general">
          General
        </Link>
        <Link className="nav-link" to="/ajustes/general">
          Cuenta
        </Link>
        <Link className="nav-link" to="/ajustes/general">
          Usuarios
        </Link>
        <Link className="nav-link" to="/ajustes/register">
          Crear Usuario
        </Link>
        <Link className="nav-link" to="/ajustes/general">
          Tarifas
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Ajustes;
