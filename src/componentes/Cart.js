import { CartContext } from "./CartContext";
import { useContext } from "react";
import KeepShopping from "./KeepShopping";
import React from "react";

const ClearCartList = () => {
    const { clear } = useContext(CartContext)
    return (
        <div className="clearCartBtn" onClick={() => clear()}>
            Clear Cart

        </div>
    );
}

const CartList = () => {
    const { cartList, removeItem, calcTotalPerItem } = useContext(CartContext);
    if (!cartList.length) return <p> Your cart is empty</p>
    return cartList.map((item) =>
        <div className="cartItemFather" key={item.id}>
            <div className="cartItemInfo">
                <img src={item.image} alt={item.description} className='cartItemImg' />
                <p>{item.name}</p>
            </div>
            <div className="cartItemPrice">
                <p>{item.price} x {item.quantity}</p>
                <p>Total Price {calcTotalPerItem(item)}</p>
            </div>
            <div className="deleteItemCrtBtn" onClick={() => removeItem(item.id)}>
                Eliminar
            </div>
        </div>
    )
};

const CartDetails = () => {
    const { calcSubTotal, cartList } = useContext(CartContext);
    return (
        <div className="summaryFath">
            <div className="summaryTitleDiv">
                <h2>ORDER SUMMARY </h2>
            </div>
            <div className="summaryDetails">
                <div className="itemsTotalPrices">
                    <p>Subtotal</p>
                    {calcSubTotal(cartList)}
                </div>
                <div className="summaryTaxes">
                    <p>Taxes</p>
                    {calcSubTotal(cartList) * 0.22}
                </div>
                <div className="summaryTaxesDiscount">
                    <p>Taxes Promotion Discount</p>
                    -{calcSubTotal(cartList) * 0.22}
                </div>
                <div className="totalCartListDetail">
                    <h3>Total</h3>
                    <p>$ {calcSubTotal(cartList)}</p>
                </div>
            </div>
            <div className="checkoutBtnSummaryDiv">
                <div className="summryCheckOut">CheckOut Now</div>
            </div>
        </div>
    );
};

const Cart = () => {

    return (
        <div className="cartMainDiv">
            <div className="shoppingOptions">
                <KeepShopping />
                <ClearCartList />
            </div>
            <div className="shoppingListDiv">
                <div className="cartListDiv">
                    <CartList />
                </div>
                <CartDetails />
            </div>

        </div>
    );
}

export default Cart