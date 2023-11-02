import React from 'react'
import './Sidebar.css';
import Logo from '../../Assets/J_logo.png';

const sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt='' />
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <i className="icon-home"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>
                <i className="icon-user"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#TechStack" className='nav__link'>
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'>
                <i className="icon-book-open"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#resume" className='nav__link'>
                <i className="icon-doc"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href="#blog" className='nav__link'>
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='nav__footer'>
        <span className='copyright'>My Portfolio</span>
      </div>
    </aside>
  )
}

export default sidebar