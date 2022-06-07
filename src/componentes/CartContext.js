import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newCartList = [...cartList];
        const elementIndex = newCartList.findIndex((e) => e.id === item.id);
        if (elementIndex !== -1) {
            newCartList[elementIndex].quantity = newCartList[elementIndex].quantity + 1
        } else {
            newCartList.concat({ ...item, quantity })
        }
        setCartList(newCartList);
    };

    const removeItem = (itemId) => {
        setCartList([
            ...cartList.filter((e) => e.id !== itemId)
        ])
    };

    const clear = () => {
        setCartList([])
    };
    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider