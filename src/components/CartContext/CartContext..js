import React, { createContext, useState, useContext } from "react";

//COMPONENTES

//creando el contexto
export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

// PROVIDER
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);
  let objeto;

  const addToCart = (cant, obj) => {
    objeto = cart.find((item) => item.id === obj.id);
    console.log("objeto", objeto);
    console.log("obj", obj.id);

    if (objeto == null) {
      console.log("paso el null");
      setCart((prev) => [...prev, { ...obj, cant }]);
    } else {
      console.log("no paso el null");
      objeto.cant = cant;
    }
  };
  // RETORNO DE CONTEXT
  return (
    <>
      <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
