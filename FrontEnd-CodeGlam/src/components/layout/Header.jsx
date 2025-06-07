import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={style.header}>
      <nav id={style.navbar}>
        <Link to="/" className={style['logo-container']}>
          <img className={style.logo} src="./public/img/code.png" alt="logo code glam" />
          <span className={style.code}>Code</span>
          <span className={style.glam}>Glam</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className={`${style['nav-container']} ${isMenuOpen ? style.hidden : ''}`}>
         <ul className={style.nav_list}>
  <li className={style.nav_item}>
    <Link to="/planos">Planos</Link>
  </li>
  <li className={style.nav_item}>
    <button onClick={() => handleScrollToSection('features2')} className={style.nav_link_button}>
      Quem Somos
    </button>
  </li>
  <li className={style.nav_item}>
    <button onClick={() => handleScrollToSection('footer')} className={style.nav_link_button}>
      Contato
    </button>
  </li>
</ul>
          <Link to="/login">
            <button className={style.bt_default}>Já sou cliente</button>
          </Link>
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button id={style.mobi_bt} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* MENU MOBILE */}
      <div id={style.mobi_menu} className={isMenuOpen ? style.active : ''}>
        <ul className={style['nav_list']}>
      <li class="nav_item"><a href="#planos">Planos</a></li>
      <li class="nav_item"><a href="#sobre">Quem Somos</a></li>
      <li class="nav_item"><a href="#contato">Contato</a></li>
        </ul>

        <Link to="/login">
          <button className={style.bt_default}>Já Sou Cliente</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;