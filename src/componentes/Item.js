// import { setState } from 'react';

const Item = ({ key, title, price, stock, itemImg, description, brand, availables }) => {

    // const productInfo = document.getElementsByClassName('productInfoDiv');

    // productInfo.addEventListener('mouseover', () => {
    //     element.classList.add('visible')
    // })

    return (
        <div className="singleItemContainer">
            <div className="itemImageDiv">
                <img className="itemImageTag" src={itemImg} alt={description} />
            </div>
            <div className="itemFooterDiv">
                <div className="itemFooterParticularitiesDiv">
                    <div>
                        <p className="itemTitlePar">{title}</p>
                        <p className="itemDescriptionPar">{description}</p>
                    </div>
                    {/* Estas de abajo sin hover llevan display: none;
                     */}
                    <div className="productInfoDiv">
                        <p className="itemAvailablesPar">Disponible en: {availables}</p>
                        <p className="itemBrandPar">Marca: {brand}</p>
                        <p className="itemStockPar">Stock disponible: {stock}</p>
                    </div>
                </div>
                <div className="itemPriceDiv">
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
}
//Stock y disponibiles por hacer, disponibles debe variar si son sabores o size
//Que hago con el Key?

export default Item