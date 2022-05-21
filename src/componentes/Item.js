const Item = ({ key, title, price, stock, itemImg, description, brand, availables }) => {
    return (
        <>
            <div className="itemImageDiv">
                <img src={itemImg} className="itemImgTag" />
            </div>
            <div className="itemFooterDiv">
                <div className="itemFooterParticularitiesDiv">
                    <p className="itemTitlePar">{title}</p>
                    <p className="itemDescriptionPar">{description}</p>
                    {/* Estas de abajo sin hover llevan display: none;
                     */}
                    <p className="itemAvailablesPar">Disponible en: {availables}</p>
                    <p className="itemBrandPar">Marca: {brand}</p>
                    <p className="itemStockPar">Stock disponible: {stock}</p>
                </div>
                <div className="itemPriceDiv">
                    <p>{price}</p>
                </div>
            </div>
        </>
    );
}
//Stock y disponibiles por hacer, disponibles debe variar si son sabores o size
//Que hago con el Key?

export default Item