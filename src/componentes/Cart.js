import { collection, doc, increment, setDoc } from "firebase/firestore";
import { serverTimestamp, updateDoc } from "firebase/firestore";

import { CartContext } from "../context/CartContext";
import KeepShopping from "./KeepShopping";
import React from "react";
import Swal from "sweetalert2";
import db from "../utils/firebaseConfig";
import { useContext } from "react";

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
    const { calcSubTotal, cartList, clearCheckout } = useContext(CartContext);

    const createOrder = () => {
        const itemsForOrders = cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            qty: item.quantity

        }))
        let order = {
            buyer: {
                email: "alex.marin@yahoo.es",
                name: "Alex Marin",
                phone: "+568 688 6983 323"
            },
            date: serverTimestamp(),
            total: calcSubTotal(cartList),
            items: itemsForOrders,

        };


        const ordersInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order)
            return newOrderRef;
        }

        ordersInFirestore()
            .then(result => Swal.fire(
                'Se ha creado su orden',
                'El ID de su orden es ' + result.id + '!',
                'success'
            ))
            .catch(err => console.log(err))
        cartList.forEach(async (e) => {
            const itemRef = doc(db, "ItemCollection", e.id);
            await updateDoc(itemRef, {
                stock: increment(-e.quantity)
            })

        });
        clearCheckout();
    }

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
                <div className="summryCheckOut" onClick={() => createOrder()}>CheckOut Now</div>
            </div>
        </div >
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