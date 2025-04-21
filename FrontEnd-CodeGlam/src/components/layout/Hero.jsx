import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import style from "./Hero.module.css"; // Importação correta para CSS Modules


const Hero = () => (
  <div className={style.body}>
    <div className={style.textContainer}>
      <h1>
        <span className={style.highlight}>Agende com</span> Facilidade
      </h1>
      <h1>
        <span className={style.highlight}>Atenda com</span> Eficiência
      </h1>
      <p className={style.p}>
        CodeGlam é o sistema de agendamentos que coloca a eficiência e a praticidade ao seu alcance.
      </p>
      <a href="./logon.html">
      <Link to="/register" className={style['register-link']}>
      <button className={style.bt_default} >Experimente Agora</button>
      </Link>

      </a>
    </div>
    <img className={style.img1} src="./img/imgbody1.svg" alt="Imagem ilustrativa" />
  </div>
);

export default Hero;
