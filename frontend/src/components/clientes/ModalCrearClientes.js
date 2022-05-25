import React from "react";

/* Context */
import { Context } from "../../context/Context";

/* Services */
import { postData, getData } from "../../services/Api";

const ModalCrearClientes = () => {
  const [nombreCompleto, setNombreCompleto] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [tarifa_id, setTarifa_id] = React.useState("");

  const [detail, setDetail] = React.useState("");
  const [showDetail, setShowDetail] = React.useState(true);
  const [error, setError] = React.useState("");
  const [showError, setShowError] = React.useState(true);
  const { setOnChange } = React.useContext(Context);

  const [tarifas, setTarifas] = React.useState([]);

  const getTarifas = () => {
    getData("tarifas/")
      .then((data) => {
        setTarifas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTarifas = () => {
    getTarifas();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("clientes/", {
      nombre_completo: nombreCompleto,
      telefono: telefono,
      direccion: direccion,
      tarifa_id: tarifa_id,
    }).then((data) => {
        setDetail(data.detail);
        setOnChange((prevState) => !prevState);
        setShowDetail(true);
        console.log(data);
    }).catch((error) => {
      console.log(error);
      setShowError(true);
      setError("Error al crear el cliente");
    });
    document.getElementById("form").reset();
  };


  const handleClose = () => {
    setShowDetail(false);
    setShowError(false);
  };

  return (
    <React.Fragment>
      <div className="container text-center pt-4">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#modal-crear-tarifa"
          onClick={handleTarifas}
        >
          Nuevo Cliente
        </button>

        <div
          className="modal fade hide.bs.modal"
          id="modal-crear-tarifa"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Nuevo Cliente
                </h5>
              </div>
              <div className="modal-body">
                <form id="form" onSubmit={handleSubmit}>
                  {showError && error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {showDetail && detail && (
                    <div className="alert alert-success" role="alert">
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
                        onChange={(e) => setNombreCompleto(e.target.value)}
                      />
                      <label>Nombre</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        required
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                      <label>Teléfono</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        required
                        onChange={(e) => setDireccion(e.target.value)}
                      />
                      <label>Dirección</label>
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        required
                        onChange={(e) => setTarifa_id(e.target.value)}
                      >
                        <option value="">Seleccione una tarifa</option>
                        {tarifas.map((tarifa) => (
                          <option key={tarifa.id} value={tarifa.id}>
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
                    <button type="submit" className="btn btn-dark">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalCrearClientes;
