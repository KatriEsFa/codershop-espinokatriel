import { GiAbdominalArmor, GiTwoCoins } from 'react-icons/gi';
import { DiDatabase } from 'react-icons/di';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, stock, itemImg, description }) => {

    return (
        <div className="singleItemContainer">

            <div className="itemImageDiv">
                <img className="itemImageTag" src={itemImg} alt={description} />
            </div>
            <div className="itemFooterDiv">
                <div className="itemFooterParticularitiesDiv">
                    <div>
                        <p className="itemTitlePar">{title}</p>
                    </div>
                </div>

            </div>
            <div className="itemHoverInfo">
                <div className="itemPriceDiv">
                    <p> <GiTwoCoins />${price}</p>
                </div>
                <div className='itemStockContainer'>
                    <p><DiDatabase />Stock {stock}</p>
                </div>
                <Link className='itemDetailContainer' to={`/item/${id}`}> <GiAbdominalArmor />Detalles</Link>

            </div>

        </div>
    );
}


export default Item