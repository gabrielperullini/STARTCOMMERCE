import { React } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

//COMPONENTE
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <CartWidget />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Tecnologia" id="basic-nav-dropdown">
              <NavDropdown.Item href="#celulares">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#notebooks">
                Notebooks/PC
              </NavDropdown.Item>
              <NavDropdown.Item href="#gadgets">Gadgets</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hogar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#tvs">TV's</NavDropdown.Item>
              <NavDropdown.Item href="#sonido">Sonido</NavDropdown.Item>
              <NavDropdown.Item href="#muebles">Muebles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hogarinteligente">
                Hogar Inteligente
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
              <Link className="Link" to="/Cubiertas">
                <NavDropdown.Item href="#cubiertas">Cubiertas</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#repuestos">Repuestos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ofertasvehiculos">
                Ofertas Especiales
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Juguetes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#juguetesninios">Niños</NavDropdown.Item>
              <NavDropdown.Item href="#juguetesninias">Niñas</NavDropdown.Item>
              <NavDropdown.Item href="#juguetesconsolas">
                Consolas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ofertasjuegos">
                Juegos en ofertas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Aire Libre" id="basic-nav-dropdown">
              <NavDropdown.Item href="#bicicletas">Bicicletas</NavDropdown.Item>
              <NavDropdown.Item href="Camping">Camping</NavDropdown.Item>
            </NavDropdown>
            <Link className="Link" to="/About">
              <Nav.Link activeClassName="active_class" href="/About">
                Quienes Somos?
              </Nav.Link>
            </Link>
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
