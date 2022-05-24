const Item = ({ title, price, stock, itemImg, description, brand, availables }) => {
    const opcionesDisponibles = [];
    availables.forEach((data, index) => {
        opcionesDisponibles.push(<span key={`${index}_${data}`}>{data}, </span>)
    });
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

                    <div className="productInfoDiv">
                        <p className="itemAvailablesPar">Disponible en: {opcionesDisponibles}</p>
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


export default Item