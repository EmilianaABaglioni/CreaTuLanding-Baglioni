import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const itemNew = {
      quantity,
      ...productToAdd,
    };

    setCart(itemNew);
  };

  return (
    <Context.Provider value={{ cart, setCart, addItem }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
