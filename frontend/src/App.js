/* React */
import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Nav from "./components/Nav";

/* Pages */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import NotFound from "./pages/NotFound";
import AjustesGenerales from "./pages/AjustesGenerales";
import AjustesCuenta from "./pages/AjustesCuenta";
import AjustesTarifas from "./pages/AjustesTarifas";

/* Services */
import { getData } from "./services/Api";

/* Styles */
import "./App.css";

/* Si el usuario ha iniciado sesión, muestrea el dashboard; de lo contrario, muestra la página de inicio de sesión */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      is_superuser: false,
    };
  }

  componentDidMount() {
    getData("usuarios/user").then((data) => {
      if (data.name) {
        this.setState({ name: data.name });
        this.setState({ is_superuser: data.is_superuser });
      }
    });
  }

  render() {
    if (this.state.is_superuser === true && this.state.name !== "") {
      return (
        /* Rutas Admin */
        <Router>
          <Nav name={this.state.name} is_superuser={this.state.is_superuser} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard name={this.state.name} />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route
                path="/ajustes/generales"
                element={
                  <AjustesGenerales
                    name={this.state.name}
                    is_superuser={this.state.is_superuser}
                  />
                }
              />
              <Route
                path="ajustes/cuenta"
                element={
                  <AjustesCuenta
                    name={this.state.name}
                    is_superuser={this.state.is_superuser}
                  />
                }
              />
              <Route
                path="ajustes/register"
                element={
                  <Register
                    name={this.state.name}
                    is_superuser={this.state.is_superuser}
                  />
                }
              />
              <Route
                path="ajustes/tarifas"
                element={
                  <AjustesTarifas
                    name={this.state.name}
                    is_superuser={this.state.is_superuser}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      );
    } else if (this.state.is_superuser === false && this.state.name !== "") {
      return (
        /* Rutas Empleados */
        <Router>
          <Nav name={this.state.name} is_superuser={this.state.is_superuser} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard name={this.state.name} />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="ajustes/cuenta"
                element={
                  <AjustesCuenta
                    name={this.state.name}
                    is_superuser={this.state.is_superuser}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      );
    } else {
      return (
        /* Rutas Públicas */
        <Router>
          <Nav name={this.state.name} is_superuser={this.state.is_superuser} />
          <div className="main">
            <Routes>
              <Route path="*" element={<Login name={this.state.name} />} />
            </Routes>
          </div>
        </Router>
      );
    }
  }
}

export default App;
