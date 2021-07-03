import React from "react";
import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <>
      <div className="App">
        <Card border="dark">
          <Card.Img
            alt="logo empresa"
            src={logo}
            backgroundColor="black"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Card>
      </div>
    </>
  );
}

export default CartWidget;

//<Navbar.Brand>
//        <img
//        alt=""
//      src={logo}
//    width="30"
//  height="30"
//className="d-inline-block align-top"
//       />{" "}
//     Smart Commerce
// </Navbar.Brand>
