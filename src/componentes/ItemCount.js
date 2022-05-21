import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const increase = () => {
        if (counter < stock) setCounter(counter + 1);
    };

    const decrease = () => {
        if (counter > 1) setCounter(counter - 1)
    };



    return (
        <div className="itemCountDiv">
            <div className='counterDiv'>
                <h3 onClick={decrease} className="decreaseBtn">-</h3>
                <h3 className='counterH3'>{counter}</h3>
                <h3 onClick={increase} className="increaseBtn">+</h3>
            </div>
            <div className='addToCartBtn'>
                <h3 onClick={() => onAdd(counter)}>Añadir al Carrito</h3>
            </div>
        </div>
    );

}

export default ItemCount