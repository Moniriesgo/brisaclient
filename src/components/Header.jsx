import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <header className='header'>
   
    <h2 className='header__logo'>BRISA</h2>
   
    <nav className="header__navegacion">
        <ul className="header__lista">
            <li className="header__elementoLista"><Link to={'/'}>Inicio</Link></li>
            <li className="header__elementoLista"><Link to={'/servicios'}>Velas</Link></li>
            <li className="header__elementoLista"><Link to={'/panel'}>Panel de control</Link></li>
        </ul>
    </nav>

   </header>
  )
}

export default Header