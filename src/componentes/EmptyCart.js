import bag from 'src/assets/imgs/emptybag.png'

const EmptyCart = () => {
    return (
        <div className='emptyCartDiv'>
            <h2>
                Tu carrito está vacío!
            </h2>
            <img src={bag} alt="carrito vacío" />
        </div>
    );
}
export default EmptyCart