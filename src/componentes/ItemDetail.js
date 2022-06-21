import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddedToCart from "./AddedToCart";
import React from "react";
import Swal from "sweetalert2";



const ItemDetail = ({ item }) => {
    const [itemCounter, setItemCounter] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (count) => {

        alert.preventDefault(Swal.fire({
            title: '¿Desea agregar ' + item.name + ' x ' + Number(count) + ' al carrito?',
            text: "Luego puede quitarlo removerlo del carrito si lo desea",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar al carrito'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Hecho!',
                    'Se han agregado ' + item.name + ' x ' + Number(count) + ' al carrito',
                    'success'
                )
                setItemCounter(count);
                addItem(item, count)
            }
        }))

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
                                    : <AddedToCart />
                            }
                        </div>

                    </div>
                    : <p>Cargando...</p>
            }

        </>
    );
}

export default ItemDetail