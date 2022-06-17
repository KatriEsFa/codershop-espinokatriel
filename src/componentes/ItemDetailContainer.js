import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";
import React from "react";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [id]);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer