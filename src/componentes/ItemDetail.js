import ItemCount from "./ItemCount";
import CartCheckOut from "./CartCheckout";
import { useState } from "react";
// import addToCart from './';


const ItemDetail = ({ item }) => {
    const [itemCounter, setItemCounter] = useState(0)

    const onAdd = (count) => {
        // addToCart(item)
        alert('Se han agregado ' + count + ' items al carrito!');
        setItemCounter(count)
    }

    return (
        <>
            {

                item.image
                    ?
                    <div className="detailFatherContainer">
                        <div className="imageDivItemDetail">
                            <img src={item.image} alt={item.description} className='imageItemDetail' />
                        </div>
                        <div className="infoDivItemDetail">
                            <div className="titleDivItemDetail">
                                <h2>{item.name}</h2>
                            </div>
                            <div className="descDivItemDetail">
                                <h3>{item.description}</h3>
                            </div>
                            <div className="priceDivItemDetail">
                                <h3>${item.price}</h3>
                            </div>
                            <div className="stockDivItemDetail">
                                <h3>Contamos con {item.stock} unidades en stock</h3>
                            </div>
                            {
                                itemCounter === 0
                                    ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                                    : <CartCheckOut />
                            }
                        </div>

                    </div>
                    : <p>Cargando...</p>
            }

        </>
    );
}

export default ItemDetail