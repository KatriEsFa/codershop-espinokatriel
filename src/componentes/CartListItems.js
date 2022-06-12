import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartListItems = (item) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div className="cartItemFather">
            <div className="cartItemInfo">
                <img src={item.image} alt={item.description} className='cartItemImg' />
                <p>{item.name}</p>
            </div>
            <div className="cartItemPrice">
                <p>{item.price} x {item.quantity}</p>
            </div>
            <div className="deleteItemCrtBtn" onClick={() => removeItem(item.id)}>
                Eliminar
            </div>
        </div>
    );
}

export default CartListItems