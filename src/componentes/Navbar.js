import 'bootstrap/dist/css/bootstrap.min.css';
import logomini from '../assets/imgs/logomini.png';
import shopCartImg from '../assets/imgs/shoppingCart.png'
const Navbar = () => {
    return (
        <div className='navFather'>
            <img className='logo' src={logomini} alt='logo'></img>
            <nav>
                <ul className='navBarLinks'>
                    <li className='navLinksLi'><a href='#' className='navLink'>Servicios</a></li>
                    <li className='navLinksLi'><a href='#' className='navLink'>Productos</a></li>
                    <li className='navLinksLi'><a href='#' className='navLink'>Nosotros</a></li>
                </ul>
            </nav>
            <a className='ctaUs' href='#'><button className='ctaUsBtn'>Contáctanos</button></a>
            <div className='divShopCart'>
                <img className='shopCartImg' src={shopCartImg}></img>
            </div>
        </div>
    );
}

export default Navbar;