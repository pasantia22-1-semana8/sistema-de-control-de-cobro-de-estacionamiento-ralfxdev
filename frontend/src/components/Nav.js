/* React */
import React from "react";
import { Link } from "react-router-dom";

/* Componets */
import Logout from "./Logout";

/* Styles */
import "./styles/Nav.css";

const Nav = (props) => {
  let menu;

  if (props.is_superuser === true && props.name !== "") {
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
            <Link className="nav-link" to="/clientes">
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
            <Link className="nav-link" to="/ajustes/cuenta">
              {props.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ajustes/generales">
              Ajustes
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#cerrarSesion"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </React.Fragment>
    );
  } else if (props.is_superuser === false && props.name !== "") {
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
            <Link className="nav-link" to="/clientes">
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
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/ajustes/cuenta">
              {props.name}
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#cerrarSesion"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </React.Fragment>
    );
  } else {
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
            <Link className="nav-link" onClick={Logout} to="/">
              <button type="button" className="btn btn-light">
                Iniciar Sesión
              </button>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid p-2">
          <Link className="navbar-brand" to="/">
            PARKING-APP
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
      <div
        className="modal fade"
        id="cerrarSesion"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                ¿Está seguro que deseas{" "}
                <strong className="text-danger">cerrar sesión</strong>?
              </h5>
            </div>
            <div className="modal-body">
              Tu sesión se cerrará y deberás iniciar sesión nuevamente.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <Link className="nav-link" onClick={Logout} to="/">
                <button type="button" className="btn btn-danger">
                  Cerrar Sesión
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
