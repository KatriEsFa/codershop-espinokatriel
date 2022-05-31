
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
                    <li className='navLinksLi'><link to='/category/' className='navLink'>Ropa</link></li>
                    <li className='navLinksLi'><link to='/category/' className='navLink'>Accesorios</link></li>
                    <li className='navLinksLi'><link to='/category/' className='navLink'>Suplementos</link></li>
                    <li className='navLinksLi'><link to='/category/' className='navLink'>Bebidas</link></li>
                </ul>
            </nav>
            <a className='ctaUs' href='#'><button className='ctaUsBtn'>Contáctanos</button></a>
            <CartWidget></CartWidget>
        </div>
    );
}

export default Navbar;