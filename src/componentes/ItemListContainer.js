import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Item from './Item';
import { Link } from 'react-router-dom';

// import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { category } = useParams(); //debe llevar el mismo nombre que la prop en firbase
    const [loading, setLoading] = useState(true);


    const getItems = async () => {
        const productsCollection = collection(db, 'ItemCollection');
        const itemsDoc = await getDocs(productsCollection);
        const itemsList = itemsDoc.docs.map((item) => {
            let item1 = item.data();
            item1.id = item.id;
            return item1;
        })
        return itemsList
    };

    const itemsFilter = (arrayItems, category) => {
        arrayItems.map((e) => {
            if (category.id === e.category) {
                return setDatos(datos => [...datos, e])
            }
        })
    };

    useEffect(() => {
        setLoading(true)
        setDatos([]);
        return getItems()
            .then((result) => {
                setLoading(false);
                category
                    ? itemsFilter(result, category)
                    : setDatos(result)
            })
    }, [])





    // useEffect(() => {
    //     firestoreFetch(idCategory)
    //         .then(result => setDatos(result))
    //         .catch(err => console.log(err));
    // }, [idCategory]);

    // useEffect(() => {
    //     return (() => {
    //         setDatos([]);
    //     })
    // }, []);

    return (
        <>
            {
                !loading
                    ? (

                        datos.map((e) => {
                            if (category) {
                                return (
                                    <Link to={`./${e.id}`}>
                                        <Item id={e.id} title={e.title} price={e.price} stock={e.stock} itemImg={e.itemImg} description={e.description} />
                                    </Link>
                                );
                            } else {
                                return (
                                    <ItemList arrayObjetos={datos} />
                                )
                            }
                        })
                    )
                    : <div>loading</div>
            }

        </>
    );
}

export default ItemListContainer