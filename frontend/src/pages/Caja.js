/* React */
import React from "react";

const Caja = (props) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-center">
          <span className="text-danger">MÓDULO</span> CAJA
        </h1>
        <h3>{"Bienvenido " + props.name}</h3>
      </div>
    </React.Fragment>
  );
};

export default Caja;
