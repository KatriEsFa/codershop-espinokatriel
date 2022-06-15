import KeepShopping from "./KeepShopping";
import CartCheckOut from "./CartCheckout";
import React from "react";

const AddedToCart = () => {
    return (
        <div className="addedDiv">
            <CartCheckOut /><KeepShopping />
        </div>
    );
}

export default AddedToCart