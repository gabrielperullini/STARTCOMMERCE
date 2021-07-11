import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {CartProvider} from "./components/CartContext/CartContext."

//PAGES
import About from "./Pages/Institucional/About";
import Home from "./Pages/Home/Home";
import Detalle from "./Pages/Detalle/Detalle";
import Categoria from "./Pages/Categoria/Categoria";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>

      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Detalle/:id" exact component={Detalle} />
          <Route path="/categorias/:category" exact component={Categoria} />
        </Switch>
        </CartProvider>
      </BrowserRouter>

    
    </>
  );
}

export default App;
