import { React } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

//COMPONENTE
import CartWidget from "../CartWidget/CartWidget";

//TRAER CONTEXTO
import { useCartContext } from "../CartContext/CartContext.";

function NavBar(props) {
  const { cart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Link className="Link" to="/">
            <CartWidget envio="menu" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Tecnologia" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"CELULARES"}`}>
                  <NavDropdown.Item href="#celulares">
                    Celulares
                  </NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"NOTEBOOKS"}`}>
                  <NavDropdown.Item href="#notebooks">
                    {" "}
                    Notebooks/PC{" "}
                  </NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"GADGETS"}`}>
                  <NavDropdown.Item href="#gadgets">Gadgets</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Hogar" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"TVS"}`}>
                  <NavDropdown.Item href="#tvs">TV's</NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"AUDIO"}`}>
                  <NavDropdown.Item href="#sonido">Sonido</NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"MUEBLES"}`}>
                  <NavDropdown.Item href="#muebles">Muebles</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"ACCESORIOS"}`}>
                  <NavDropdown.Item href="#accesorios">
                    Accesorios
                  </NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"CUBIERTAS"}`}>
                  <NavDropdown.Item href="#cubiertas">
                    Cubiertas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Juguetes" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"JUGUETES"}`}>
                  <NavDropdown.Item href="#juguetes">Juguetes</NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"CONSOLAS"}`}>
                  <NavDropdown.Item href="#juguetesconsolas">
                    Consolas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Aire Libre" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"BICICLETAS"}`}>
                  <NavDropdown.Item href="#bicicletas">
                    Bicicletas
                  </NavDropdown.Item>
                </Link>
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
  } else {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Link className="Link" to="/Cart">
            <CartWidget />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Tecnologia" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"CELULARES"}`}>
                  <NavDropdown.Item href="#celulares">
                    Celulares
                  </NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"NOTEBOOKS"}`}>
                  <NavDropdown.Item href="#notebooks">
                    {" "}
                    Notebooks/PC{" "}
                  </NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"GADGETS"}`}>
                  <NavDropdown.Item href="#gadgets">Gadgets</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Hogar" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"TVS"}`}>
                  <NavDropdown.Item href="#tvs">TV's</NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"AUDIO"}`}>
                  <NavDropdown.Item href="#sonido">Sonido</NavDropdown.Item>
                </Link>
                <Link className="Link" to={`/categorias/${"MUEBLES"}`}>
                  <NavDropdown.Item href="#muebles">Muebles</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Vehiculos" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"ACCESORIOS"}`}>
                  <NavDropdown.Item href="#accesorios">
                    Accesorios
                  </NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"CUBIERTAS"}`}>
                  <NavDropdown.Item href="#cubiertas">
                    Cubiertas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Juguetes" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"JUGUETES"}`}>
                  <NavDropdown.Item href="#juguetes">Juguetes</NavDropdown.Item>
                </Link>

                <Link className="Link" to={`/categorias/${"CONSOLAS"}`}>
                  <NavDropdown.Item href="#juguetesconsolas">
                    Consolas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown title="Aire Libre" id="basic-nav-dropdown">
                <Link className="Link" to={`/categorias/${"BICICLETAS"}`}>
                  <NavDropdown.Item href="#bicicletas">
                    Bicicletas
                  </NavDropdown.Item>
                </Link>
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
}

//<Nav.Link href="#home">Tecnologia</Nav.Link>
//<Nav.Link href="#link">Hogar</Nav.Link>
//<div className='header'>
// <h1>{props.title}</h1>
//<h2>{props.subtitle}</h2>
//<img  src={img} alt='logo empresa' width='5%'/>
//</div>
export default NavBar;
