/* React */
import React from "react";

const CobroResidentes = (props) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-center">
          <span className="text-danger">MÓDULO</span> COBRO RESIDENTES
        </h1>
        <h3>{"Bienvenido " + props.name}</h3>
      </div>
    </React.Fragment>
  );
};

export default CobroResidentes;
