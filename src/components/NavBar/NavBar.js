import React from "react";
import logo from "./logo.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(props) {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Smart Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Tecnologia" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Notebooks/PC
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gadgets</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hogar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TV's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sonido</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Muebles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Hogar Inteligente
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cubiertas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Repuestos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas Especiales
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Juguetes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Niños</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Niñas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Consolas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Juegos en ofertas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Aire Libre" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vicicletas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camping</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Quienes Somos?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

//<Nav.Link href="#home">Tecnologia</Nav.Link>
//<Nav.Link href="#link">Hogar</Nav.Link>
//<div className='header'>
// <h1>{props.title}</h1>
//<h2>{props.subtitle}</h2>
//<img  src={img} alt='logo empresa' width='5%'/>
//</div>
export default NavBar;
