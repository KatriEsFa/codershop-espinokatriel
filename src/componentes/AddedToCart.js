import KeepShopping from "./KeepShopping";
import CartCheckOut from "./CartCheckout";

const AddedToCart = () => {
    return (
        <div className="addedDiv">
            <CartCheckOut /><KeepShopping />
        </div>
    );
}

export default AddedToCart