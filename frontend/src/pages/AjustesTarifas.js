import React from "react";

/* Componets */
import Ajustes from "../components/Ajustes";
import TablaTarifas from "../components/TablaTarifas";
import ModalCrearTarifas from "../components/ModalCrearTarifas";

const AjustesTarifas = (props) => {
  return (
    <React.Fragment>
      <Ajustes is_superuser={props.is_superuser}/>
      <div className="content">
        <h1 className="text-center">Ajustes de Tarifas</h1>
        <ModalCrearTarifas />
        <TablaTarifas />
      </div>
    </React.Fragment>
  );
};

export default AjustesTarifas;
