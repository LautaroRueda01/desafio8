import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="layout-navBar" className='navBar'>
            <h1 className="navBar__title">Canela y Miel</h1>
        <Link to="#" className='navBar__link'>Productos</Link>
        <Link to="#" className='navBar__link'>Contacto</Link>
        <Link to="#" className='navBar__link'>Nosotros</Link>
        </nav>
    );
}

export default NavBar;