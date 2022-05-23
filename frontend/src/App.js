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
import NotFound from "./pages/NotFound";

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
    };
  }

  componentDidMount() {
    getData("user").then((data) => {
      if (data.name) {
        this.setState({ name: data.name });
      }
    });
  }

  render() {
    if (this.state.name) {
      return (
        /* Rutas Privadas */
        <Router>
          <Nav name={this.state.name} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Dashboard name={this.state.name} />} />
              <Route
                path="ajustes/register"
                element={<Register name={this.state.name} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      );
    } else {
      return (
        /* Rutas Públicas */
        <Router>
          <Nav name={this.state.name} />
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
