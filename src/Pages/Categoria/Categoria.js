import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Categoria = ({ match }) => {
  return (
    <>
      <h2>{match.params.category}:</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemListContainer elements={match.params.category} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categoria;
