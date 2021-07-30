import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCartContext } from "../CartContext/CartContext.";

const Formulario = (props) => {
  const { cart, clearCart } = useCartContext();
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
    e.preventDefault();
    props.addProduct(values);
    setValues({ ...initialState });
    clearCart();
  };

  if (cart.length !== 0) {
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
            />
            <Form.Text className="text-muted">Ingrese su Direccion</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Estoy de acuerdo con Terminos y Condiciones"
            />
          </Form.Group>
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
            <Form.Check
              type="checkbox"
              label="Estoy de acuerdo con Terminos y Condiciones"
              disabled
            />
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
