import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        console.log(item, quantity)

        const newCartList = [...cartList];
        const elementIndex = newCartList.findIndex((e) => e.id === item.id);
        console.log("Console elemntindex", elementIndex)
        if (elementIndex !== -1) {
            newCartList[elementIndex].quantity = newCartList[elementIndex].quantity + 1
        } else {
            newCartList.push({ ...item, quantity })
        }
        console.log(newCartList)
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