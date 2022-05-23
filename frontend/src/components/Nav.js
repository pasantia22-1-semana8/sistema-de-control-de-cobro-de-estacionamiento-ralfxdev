/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Componets */
import Logout from "./Logout";

/* Styles */
import "./styles/Nav.css";

const Nav = (props) => {
  let menu;

  if (props.name === "") {
    menu = (
      <React.Fragment>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Documentación
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  } else {
    menu = (
      <React.Fragment>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Vehículos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Clientes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Cobro Residentes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Caja
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Reportes
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {props.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={Logout} to="/">
              Logout
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ajustes/register">
              Ajustes
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid p-2">
        <Link className="navbar-brand" to="/">
          ESTACIONAMIENTO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
