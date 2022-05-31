import Item from './Item';

const ItemList = ({ arrayObjetos }) => {
    return (
        <div className="itemsStyledContainer">
            {
                arrayObjetos.length > 0
                    ? arrayObjetos.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} stock={item.stock} itemImg={item.image} description={item.description} brand={item.brand} availables={item.availables} />)
                    : <p>Cargando Contenido...</p>
            }
        </div>

    );
}

export default ItemList