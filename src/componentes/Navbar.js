
import logomini from '../assets/imgs/logomini.png';
import CartWidget from '../componentes/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navFather'>
            <Link to='/'>
                <img className='logo' src={logomini} alt='logo'></img>
            </Link>
            <nav>
                <ul className='navBarLinks'>
                    <li className='navLinksLi'><a href='#' className='navLink'>Ropa</a></li>
                    <li className='navLinksLi'><a href='#' className='navLink'>Suplementos</a></li>
                    <li className='navLinksLi'><a href='#' className='navLink'>Accesorios</a></li>
                    <li className='navLinksLi'><a href='#' className='navLink'>Bebidas</a></li>
                </ul>
            </nav>
            <a className='ctaUs' href='#'><button className='ctaUsBtn'>Contáctanos</button></a>
            <CartWidget></CartWidget>
        </div>
    );
}

export default Navbar;