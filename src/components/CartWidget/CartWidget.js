import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORT CONTEXT
import { useCartContext } from "../../components/CartContext/CartContext.";

function CartWidget(props) {
  const { cart } = useCartContext();

  let cantidadCompra = "";

  if (cart.length !== 0 && props.envio === "count") {
    cantidadCompra = cart.length;
  }

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
          <Card.Title>{cantidadCompra}</Card.Title>
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
