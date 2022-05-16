import shopCartImg from '../assets/imgs/shoppingCart.png';

const CartWidget = () => {
    return (
        <div className='divShopCart'>
            <img className='shopCartImg' src={shopCartImg}></img>
        </div>
    );
}

export default CartWidget