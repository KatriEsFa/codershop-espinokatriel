import shopCartImg from '../assets/imgs/shoppingCart.png';
import CartWidgetNotifications from './CartWidgetNotifications';
import React from "react";

const CartWidget = () => {

    return (
        <div className='divShopCart'>
            <CartWidgetNotifications />
            <img className='shopCartImg' src={shopCartImg} alt='imagen del carrito'></img>
        </div>
    );
}

export default CartWidget