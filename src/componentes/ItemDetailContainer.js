import { useEffect, useState } from "react";
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import Items from '../data/items.json';
// const {}

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, Items[4])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer