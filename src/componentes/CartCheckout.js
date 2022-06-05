import { Link } from 'react-router-dom';


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