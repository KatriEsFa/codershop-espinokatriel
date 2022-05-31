import { useEffect, useState } from "react";
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import Items from '../data/items.json';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, Items.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer