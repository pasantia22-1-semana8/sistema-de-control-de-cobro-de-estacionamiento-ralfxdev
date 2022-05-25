import React from "react";

/* Context */
import { Context } from "../../context/Context";

/* Services */
import { getData, deleteData, putData } from "../../services/Api";

const TablaClientes = () => {
  const [clientes, setClientes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [id, setId] = React.useState("");
  const [nombreCompleto, setNombreCompleto] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [tarifa_id, setTarifa_id] = React.useState("");

  const [detail, setDetail] = React.useState("");
  const [showDetail, setShowDetail] = React.useState(true);
  const [error, setError] = React.useState("");
  const [showError, setShowError] = React.useState(true);

  const { onChange, setOnChange } = React.useContext(Context);

  const [tarifas, setTarifas] = React.useState([]);

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

  const getClientes = () => {
    getData("clientes/")
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    deleteData(`clientes/${id}`)
      .then(() => {
        setOnChange(!onChange);
        getClientes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    getData(`clientes/${id}/`)
      .then((data) => {
        setNombreCompleto(data.nombre_completo);
        setTelefono(data.telefono);
        setDireccion(data.direccion);
        setTarifa_id(data.tarifa_id);
        setId(data.id);
        getTarifas();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clientes.map((cliente) => {
      if (cliente.id === id) {
        putData(`clientes/${id}/`, {
          nombre_completo: nombreCompleto,
          telefono: telefono,
          direccion: direccion,
          tarifa_id: tarifa_id,
        })
          .then((data) => {
            setDetail(data.detail);
            setOnChange((prevState) => !prevState);
            setShowDetail(true);
          })
          .catch((error) => {
            console.log(error);
            setShowError(true);
            setError("Error al editar el cliente");
          });
      }
    });
  };
  const handleClose = () => {
    setShowDetail(false);
    setShowError(false);
  };

  React.useEffect(() => {
    getClientes();
  }, [onChange]);

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Listado de Clientes</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre Completo</th>
                      <th>Teléfono</th>
                      <th>Dirección</th>
                      <th>Tarifa</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="7" className="text-center">
                          <div
                            className="spinner-border text-dark"
                            role="status"
                          ></div>
                          <p className="text-center">Cargando...</p>
                        </td>
                      </tr>
                    ) : (
                      clientes.map((cliente, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{cliente.nombre_completo}</td>
                          <td>{cliente.telefono}</td>
                          <td>{cliente.direccion}</td>
                          <td>{cliente.tarifa.nombre}</td>
                          <td>{cliente.tarifa.precio}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-dark"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-editar-tarifa"
                              onClick={() => handleEdit(cliente.id)}
                            >
                              Editar
                            </button>
                            <div
                              className="modal fade hide.bs.modal"
                              id="modal-editar-tarifa"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered ">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="staticBackdropLabel"
                                    >
                                      Editar Cliente
                                    </h5>
                                  </div>
                                  <div className="modal-body">
                                    <form id="form" onSubmit={handleSubmit}>
                                      {showError && error && (
                                        <div
                                          className="alert alert-danger"
                                          role="alert"
                                        >
                                          {error}
                                        </div>
                                      )}
                                      {showDetail && detail && (
                                        <div
                                          className="alert alert-success"
                                          role="alert"
                                        >
                                          {detail}
                                        </div>
                                      )}

                                      <div className="form-group">
                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            required
                                            value={nombreCompleto}
                                            onChange={(e) =>
                                              setNombreCompleto(e.target.value)
                                            }
                                          />
                                          <label>Nombre</label>
                                        </div>

                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            required
                                            value={telefono}
                                            onChange={(e) =>
                                              setTelefono(e.target.value)
                                            }
                                          />
                                          <label>Teléfono</label>
                                        </div>

                                        <div className="form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            required
                                            value={direccion}
                                            onChange={(e) =>
                                              setDireccion(e.target.value)
                                            }
                                          />
                                          <label>Dirección</label>
                                        </div>

                                        <div className="form-group">
                                          <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                            required
                                            onChange={(e) =>
                                              setTarifa_id(e.target.value)
                                            }
                                          >
                                            <option value="">
                                              Seleccione una tarifa
                                            </option>
                                            {tarifas.map((tarifa) => (
                                              <option
                                                key={tarifa.id}
                                                value={tarifa.id}
                                              >
                                                {tarifa.nombre}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={handleClose}
                                          data-bs-dismiss="modal"
                                        >
                                          Cerrar
                                        </button>
                                        <button
                                          type="submit"
                                          className="btn btn-dark"
                                        >
                                          Guardar
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-eliminar-tarifa"
                              onClick={() => handleEdit(cliente.id)}
                            >
                              Borrar
                            </button>

                            <div
                              className="modal fade"
                              id="modal-eliminar-tarifa"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="staticBackdropLabel"
                                    >
                                      ¿Desea{" "}
                                      <strong className="text-danger">
                                        Borrar
                                      </strong>{" "}
                                      el cliente?
                                    </h5>
                                  </div>
                                  <div className="modal-body">
                                    Todos los datos serán eliminados.
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-dark"
                                      data-bs-dismiss="modal"
                                    >
                                      Cerrar
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-bs-dismiss="modal"
                                      onClick={handleDelete}
                                    >
                                      Borrar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                    {!loading && clientes.length === 0 && (
                      <tr>
                        <td colSpan="8">No hay clientes registrados</td>
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

export default TablaClientes;
