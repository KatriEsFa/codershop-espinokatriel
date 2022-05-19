import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={""}></ItemCount>
        </>
    );
}

export default ItemListContainer