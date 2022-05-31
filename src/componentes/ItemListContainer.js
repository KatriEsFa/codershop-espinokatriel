import ItemCount from './ItemCount';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
import Items from '../data/items.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            customFetch(2000, Items.filter(item => item?.category?.id === parseInt(id)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
        else {
            customFetch(2000, Items)
                .then(result => { setDatos(result) })
                .catch(err => console.log(err))
        }

    }, [id]);

    const onAdd = (counter) => {
        alert('Se han agregado ' + counter + ' items al carrito!')
    }

    return (
        <>
            <ItemList arrayObjetos={datos} />

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer