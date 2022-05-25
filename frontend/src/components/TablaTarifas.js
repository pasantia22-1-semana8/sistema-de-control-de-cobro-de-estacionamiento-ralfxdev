import React from "react";

/* Context */
import { Context } from "../context/Context";

/* Services */
import { getData, deleteData } from "../services/Api";

/* Componets */
import ModalBorrarTarifas from "../components/ModalBorrarTarifas";

const TablaTarifas = () => {
  const [tarifas, setTarifas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { onChange, setOnChange } = React.useContext(Context);
  const getTarifas = () => {
    getData("tarifas/")
      .then((data) => {
        setTarifas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    deleteData(`tarifas/${id}/`);
    setOnChange((prevState) => !prevState);
  };

  React.useEffect(() => {
    getTarifas();
  }, [onChange]);

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Tarifas Disponibles</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          <div
                            className="spinner-border text-dark"
                            role="status"
                          ></div>
                          <p className="text-center">Cargando...</p>
                        </td>
                      </tr>
                    ) : (
                      tarifas.map((tarifa, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{tarifa.nombre}</td>
                          <td>{tarifa.precio}</td>
                          <td>{tarifa.descripcion}</td>
                          <td>
                            <button className="btn btn-dark">Editar</button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(tarifa.id)}
                            >
                              Borrar
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                    {!loading && tarifas.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center">
                          No hay tarifas disponibles
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaTarifas;
