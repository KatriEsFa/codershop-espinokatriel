
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
                    <li className='navLinksLi'><Link to='/category/1' className='navLink'>Ropa</Link></li>
                    <li className='navLinksLi'><Link to='/category/2' className='navLink'>Accesorios</Link></li>
                    <li className='navLinksLi'><Link to='/category/4' className='navLink'>Suplementos</Link></li>
                    <li className='navLinksLi'><Link to='/category/3' className='navLink'>Bebidas</Link></li>
                </ul>
            </nav>
            <a className='ctaUs' href='#'><button className='ctaUsBtn'>Contáctanos</button></a>
            <CartWidget></CartWidget>
        </div>
    );
}

export default Navbar;