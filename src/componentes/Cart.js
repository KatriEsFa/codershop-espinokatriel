import { CartContext } from "./CartContext";
import { useContext } from "react";



const Cart = () => {
    const contextHook = useContext(CartContext)
    console.log(contextHook)
    return (
        <>
            {
                contextHook.cartList.length === 0
                    ? <p> Your cart is empty</p>
                    : contextHook.cartList.map((item) =>
                        <div className="cartItemFather">
                            <div className="cartItemInfo">
                                <img src={item.image} alt={item.description} className='cartItemImg' />
                                <p>{item.name}</p>
                            </div>
                            <div className="cartItemPrice">
                                <p>{item.price} x {item.quantity}</p>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default Cart