import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContent from "../../components/ItemDetailContent/ItemDetailContent";

const Detalle = ({ match }) => {
  return (
    <>
      <h2>DETALLE</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemDetailContent identificador={match.params.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
