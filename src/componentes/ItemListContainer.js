import ItemCount from './ItemCount';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
import Items from '../data/items.json';
import ItemDetailContainer from './ItemDetailContainer';
// import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, Items)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (counter) => {
        alert('Se han agregado ' + counter + ' items al carrito!')
    }

    return (
        <>
            <h2>{greeting}</h2>
            <ItemDetailContainer />
            {/* <ItemList arrayObjetos={datos} /> */}

            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
        </>
    );
}

export default ItemListContainer