import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const inCart = (id) => {
    return cart.some((product) => product.id === id)
  }

  const addItem = (productToAdd, quantity) => {
    const itemNew = {
      ...productToAdd,
      quantity
    };

    if (inCart(itemNew.id)) {
      const updatedCart = cart.map((product) => {
        if (product.id === itemNew.id) {
          return { ...product, quantity: product.quantity + itemNew.quantity }
        }
        return product
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, itemNew]);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id)
    setCart([...updatedCart])
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  const clearCart = () => {
    setCart([])
  };

  return (
    <Context.Provider value={{ cart, setCart, addItem, removeItem, clearCart, total, getQuantity }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
