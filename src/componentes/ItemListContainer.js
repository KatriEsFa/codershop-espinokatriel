import ItemCount from './ItemCount';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
import Items from '../data/items.json';
import itemList from './itemList';

// setDatos(result)
const ItemListContainer = ({ greeting }) => {
    const onAdd = (counter) => {
        alert('Se han agregado' + counter + 'items al carrito!')
    }
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        customFetch(2000, Items)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <h2>{greeting}</h2>
            <itemList items={itemList} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer