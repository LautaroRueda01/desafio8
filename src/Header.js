import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './miContexto'
import NavBar from './components/NavBar';

const Header = () => {

  const {cantidad} = useContext(contexto)

  return (
      <header id="layout-header" className='header'>
          <Link to="/">
              <h1 className='header__title'>Canela y Miel</h1>
          </Link>
          <Link to="/carrito">
              <span className="material-icons">
                  shopping_cart
              </span>
              {cantidad}
          </Link>
          <NavBar/>
      </header>
  )
}

export default Header;