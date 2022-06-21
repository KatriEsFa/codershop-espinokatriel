import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import React from "react";

const CartWidgetNotifications = () => {
    const { consultQuantity, cartList } = useContext(CartContext);
    const totalQuantity = (array) => {
        let total = 0;
        array.forEach(element => {
            total = total + consultQuantity(element)
        });
        return total
    }


    return (

        <div className={`${totalQuantity(cartList) > 0 ? 'cartNotificationsFath' : 'emptyCartDiv'}`}>
            <h2 className="cartNotificationsNumber">
                {totalQuantity(cartList)}
            </h2>
        </div>

    );
}

export default CartWidgetNotifications