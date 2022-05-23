/* React */
import React from "react";

/* Componets */
import Ajustes from "../components/Ajustes";

const AjustesCuenta = (props) => {
  
  return (
    <React.Fragment>
    <Ajustes is_superuser={props.is_superuser}/>
      <div className="text-center">
        <h1>Ajustes Cuenta</h1>
        <h3>{"Welcome " + props.name}</h3>
      </div>
    </React.Fragment>
  );
};

export default AjustesCuenta;
