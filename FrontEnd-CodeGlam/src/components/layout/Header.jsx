import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from './Header.module.css';
import Login from '../pages/Login';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

      <header className={style.header}>
        <nav id={style.navbar}>
          <Link to="/" className={style['logo-container']}>
            <img className={style['logo']} src="./public/img/code.png" alt="logo code glam" />
            <span className={style.code}>Code</span>
            <span className={style.glam}>Glam</span>
          </Link>

          {/* MENU DESKTOP (Só aparece se o menu mobile estiver fechado) */}
          <div className={`${style['nav-container']} ${isMenuOpen ? style.hidden : ''}`}>
            <ul className={style['nav_list']}>
              <li className={style['nav_item']}><Link to="#">Planos</Link></li>
              <li className={style['nav_item']}><Link to="#">Quem Somos</Link></li>
              <li className={style['nav_item']}><Link to="#">Contato</Link></li>
            </ul>

            <Link to="/Login">
            <button className={style['bt_default']}>Já sou cliente</button>
            </Link>
          </div>

          {/* BOTÃO HAMBURGUER */}
          <button id={style.mobi_bt} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>

        {/* MENU MOBILE */}
        <div id={style.mobi_menu} className={isMenuOpen ? style.active : ''}>
          <ul>
            <li className={style.nav_item}><Link to="#">Planos</Link></li>
            <li className={style.nav_item}><Link to="#">Quem Somos</Link></li>
            <li className={style.nav_item}><Link to="#">Contato</Link></li>
          </ul>

          <Link to="/login">
            <button className={style.bt_default}>Já Sou Cliente</button>
          </Link>
        </div>
      </header>
   
  );
};

export default Header;
