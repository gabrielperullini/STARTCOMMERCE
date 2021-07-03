import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//PAGES
import About from "./Pages/Institucional/About";
import Home from "./Pages/Home/Home";
import Detalle from "./Pages/Detalle/Detalle";
import Cubiertas from "./Pages/Vehiculos/Cubiertas";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Detalle/:id" exact component={Detalle} />
          <Route path="/Cubiertas" exact component={Cubiertas} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
