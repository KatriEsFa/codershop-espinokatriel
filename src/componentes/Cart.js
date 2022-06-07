import { CartContext } from "./CartContext";
import { useContext } from "react";



const Cart = () => {
    const contextHook = useContext(CartContext)
    return (
        <>
            {
                contextHook.cartList.length === 0
                    ? <p> Your cart is empty</p>
                    : contextHook.cartList.map((item) =>
                        <div className="cartItemFather">
                            <div>

                            </div>

                            <p>{item.name}</p>

                        </div>


                    )
            }
        </>
    );
}

export default Cart