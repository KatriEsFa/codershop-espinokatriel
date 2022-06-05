import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([
            ...cartList,
            item
            //agregar función las cantidades como se debe gravar la cantidades 
        ]);
    };
    return (
        <CartContext.Provider value={{ cartList, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider