import React from "react";
import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../../components/CartContext/CartContext.";

function CartWidget() {
  const { cart } = useCartContext();

  console.log("cantidad items", cart.length);

  if (cart.length !== 0) {
    return (
      <>
        <div className="App">
          <Card border="dark">
            <Card.Img
              alt="logo empresa"
              src="https://firebasestorage.googleapis.com/v0/b/startcommerce-392fe.appspot.com/o/cartwidget%2Flogo.svg?alt=media&token=ec8df1ca-06ba-43ad-a354-4c19a53b81a2"
              backgroundColor="black"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <Card.Title>{cart.length}</Card.Title>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          <Card border="dark">
            <Card.Img
              alt="logo empresa"
              src="https://firebasestorage.googleapis.com/v0/b/startcommerce-392fe.appspot.com/o/cartwidget%2Flogo.svg?alt=media&token=ec8df1ca-06ba-43ad-a354-4c19a53b81a2"
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
