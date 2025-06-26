import React from 'react';
import { Link } from 'react-router-dom'; // <<<<< IMPORTAR Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import style from './Footer.module.css';

const Footer = () => (
  <footer id="footer" className={style.footer}>
    <div className={style.container1}>
      <div className={style.row}>
        <div className={style.collumf}>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Nossos Serviços</a></li> 
            <li><Link to="/privacy-policy">Política de privacidade</Link></li> 
            <li><Link to="/terms-of-use">Termos de serviço</Link></li> 
            <li><a href="#">Junte-se a nós</a></li> 
          </ul>
        </div>
        <div className={style.collumf}>
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li> 
            <li><a href="#">Métodos de pagamento</a></li> 
          </ul>
        </div>
        <div className={style.collumf}>
          <h4>Nossas redes</h4>
          <div className={style['social-link']}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className={style.collumf}>
          <h4>Em breve</h4>
          <div className={style['app-link']}>
            <a href="#"><FontAwesomeIcon icon={faGooglePlay} /></a>
            <a href="#"><FontAwesomeIcon icon={faApple} /></a>
          </div>
        </div>
      </div>
    </div>
    <div className={style['footer-bottom']}>
      <p>© 2025 CodeGlam. Todos os direitos reservados.</p>
      <p><img src="./img/code.png" alt="logo"/> Code<span>Glam</span> | Um sistema do grupo <span>InnoByte</span></p>
    </div>
  </footer>
);

export default Footer;