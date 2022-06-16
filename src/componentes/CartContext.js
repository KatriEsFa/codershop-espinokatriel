import { createContext, useState } from "react";
import React from "react";
import Swal from "sweetalert2";

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
        Swal.fire({
            title: 'Seguro que desea eliminar este item del carrito?',
            text: "No podrás revertir este efecto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado el item del carrito',
                    'success'
                )
                setCartList([
                    ...cartList.filter((e) => e.id !== itemId)
                ])
            }
        })
    };

    const clear = () => {
        Swal.fire({
            title: '¿Seguro que desea eliminar todos los items del carrito?',
            text: "No podrás deshacer esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Limpiar carrito'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Hecho!',
                    'Se han eliminado todos los items del carrito.',
                    'success'
                )
                setCartList([])
            }
        })
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