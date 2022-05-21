import ItemsStyledContainer from './styledContainer';
import Item from './Item';

const itemList = ({ arrayObjetos }) => {
    return (
        <ItemsStyledContainer>
            {
                arrayObjetos.length > 0
                    ? arrayObjetos.map(item => <Item key={item.id} title={item.name} price={item.price} stock={item.stock} itemImg={item.image} description={item.description} brand={item.brand} availables={item.availables} />)
                    : <p>Cargando Contenido...</p>

            }
        </ItemsStyledContainer>

    );
}

export default itemList