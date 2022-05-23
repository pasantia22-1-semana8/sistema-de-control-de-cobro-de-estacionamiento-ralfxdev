/* React */
import React from "react";

/* Components */
import Ajustes from "../components/Ajustes";

/* Services */
import { postData } from "../services/Api";

/* Styles */
import "./styles/FormUser.css";

const Register = (props) => {
  /* Hooks que permiten usar el estado en componentes funcionales. */
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mesage, setMesage] = React.useState("");

  /**
   * Cuando el usuario envíe el formulario, subir los datos a la ruta register,
   * y responde con el mensaje 'Usuario creado correctamente'.
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    postData("register", {
      name,
      email,
      password,
    });

    setMesage("Usuario creado correctamente");
  };

  return (
    <React.Fragment>
      <Ajustes is_superuser={props.is_superuser}/>
      <div className="content">
        <div className="form-signin m-auto text-center">
          <form onSubmit={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="57"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            <h1 className="h3 mb-3 fw-normal">Crear Usuario</h1>

            {mesage && (
              <div className="alert alert-success" role="alert">
                {mesage}
              </div>
            )}

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Nombre</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Correo Elecntrónico</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Contraseña</label>
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">
              Crear
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
