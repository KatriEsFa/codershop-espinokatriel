import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {


        const newCartList = [...cartList];
        const elementIndex = newCartList.findIndex((e) => e.id === item.id);

        if (elementIndex !== -1) {
            newCartList[elementIndex].quantity = newCartList[elementIndex].quantity + quantity
        } else {
            newCartList.push({ ...item, quantity })
        }

        setCartList(newCartList);
    };

    const calcTotalPerItem = (item) => {
        return item.price * item.quantity;
    }

    const calcSubTotal = (array) => {
        let itemTotalPrice = array.map(e => calcTotalPerItem(e));
        return itemTotalPrice.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    const consultQuantity = (item) => {
        return item.quantity
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
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clear,
            consultQuantity,
            calcTotalPerItem,
            calcSubTotal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider