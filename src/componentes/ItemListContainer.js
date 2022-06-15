import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import React from "react";
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { category } = useParams(); //debe llevar el mismo nombre que la prop en firbase


    useEffect(() => {
        firestoreFetch(category)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [category]);



    return (
        <>
            <ItemList arrayObjetos={datos} />

        </>
    );
}
export default ItemListContainer