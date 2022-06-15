import { Link } from 'react-router-dom';
import React from "react";


const CartCheckOut = () => {
    return (
        <>
            <Link to='/cart' className='addedToCartBtn'>
                <div >
                    CheckOut
                </div>
            </Link>
        </>
    )
}

export default CartCheckOut