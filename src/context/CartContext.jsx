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

    if(inCart(itemNew.id)){
      const updateCart = cart.map((product) => {
        if(product.id === itemNew.id){
          return { ...product, quantity: product.quantity + itemNew.quantity}
        }
        return product
      })
      setCart(updateCart)
    }else{
      setCart([...cart, itemNew]);
    }
  };
   
  return (
    <Context.Provider value={{ cart, setCart, addItem }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
