import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

//TRAER CONTEXTO
import { useCartContext } from "../CartContext/CartContext.";

const Formulario = (props) => {
  const { cart, clearCart } = useCartContext();
  const [validated, setValidated] = useState(false);

  const initialState = {
    NYA: "",
    EMAIL: "",
    DIRECCION: "",
  };
  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    if (values.NYA !== "" && values.EMAIL !== "" && values.DIRECCION !== "") {
      props.addProduct(values);
      setValues({ ...initialState });
      clearCart();
    }
  };

  if (cart.length !== 0) {
    return (
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNyA">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleOnChange}
              name="NYA"
              value={values.NYA}
            />
            <Form.Text className="text-muted">
              Ingrese su nombre y apellido
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingrese correo electronico"
              onChange={handleOnChange}
              name="EMAIL"
              value={values.EMAIL}
            />
            <Form.Text className="text-muted">
              Ingrese su Mail ejemplo@ejemplo.com
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDireccion">
            <Form.Label>Direccion:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Direccion"
              onChange={handleOnChange}
              name="DIRECCION"
              value={values.DIRECCION}
            />
            <Form.Text className="text-muted">Ingrese su Direccion</Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Terminar Compra
          </Button>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNyA">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleOnChange}
              name="NYA"
              value={values.NYA}
              disabled
            />
            <Form.Text className="text-muted">
              Ingrese su nombre y apellido
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese correo electronico"
              onChange={handleOnChange}
              name="EMAIL"
              value={values.EMAIL}
              disabled
            />
            <Form.Text className="text-muted">
              Ingrese su Mail ejemplo@ejemplo.com
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDireccion">
            <Form.Label>Direccion:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Direccion"
              onChange={handleOnChange}
              name="DIRECCION"
              value={values.DIRECCION}
              disabled
            />
            <Form.Text className="text-muted">Ingrese su Direccion</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Group className="mb-3"></Form.Group>
          </Form.Group>
          <Button variant="primary" type="submit" disabled>
            Terminar Compra
          </Button>
        </Form>
        <div>
          <h1>Su Orden de compra es: {props.codigo} </h1>
        </div>
      </div>
    );
  }
};

export default Formulario;
