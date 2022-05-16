import shopCartImg from '../assets/imgs/shoppingCart.png';
import CartWidgetNotifications from './CartWidgetNotifications';

const CartWidget = () => {
    return (
        <div className='divShopCart'>
            <CartWidgetNotifications></CartWidgetNotifications>
            <img className='shopCartImg' src={shopCartImg}></img>
        </div>
    );
}

export default CartWidget