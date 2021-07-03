import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <h2>Las ofertas de la semana</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemListContainer elements={"oferta"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
