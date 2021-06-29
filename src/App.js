import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <>
      <NavBar />
      <h2>Las ofertas de la semana</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemList />
          </div>
        </div>
      </div>
      ))
    </>
  );
}

export default App;
