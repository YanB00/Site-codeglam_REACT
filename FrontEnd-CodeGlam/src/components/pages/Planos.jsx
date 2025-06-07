import styles from './Planos.module.css'; // ajuste o caminho se necessário
import { Link } from 'react-router-dom';


function Planos() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.titulo}>
          CodeGlam sob medida <span>para o seu sucesso</span>
        </h1>
        <p className={styles.subtitulo}>
          Temos soluções personalizadas para todos os tipos e tamanhos de negócios de beleza e bem-estar CodeGlam...
        </p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.planosGrid}>
          <div className={styles.planoCard}>
            <h2 className={styles.planoNome}>Plano Básico</h2>
            <p className={styles.planoPreco}>R$ 29,90</p>
            <p className={styles.planoDescricao}>
              Ideal para quem está começando e precisa de uma solução simples e eficiente para agendamentos CodeGlam.
            </p>
            <ul className={styles.planoRecursos}>
              <li>Agendamentos ilimitados</li>
              <li>Suporte via chat</li>
            </ul>
            <Link to={'/register'}>
            <button className={styles.planoCta}>Assinar Plano Básico</button>
            </Link>
          </div>

          <div className={styles.planoCard}>
            <h2 className={styles.planoNome}>Plano Premium</h2>
            <p className={styles.planoPreco}>R$ 59,90</p>
            <p className={styles.planoDescricao}>
              Perfeito para negócios em crescimento que buscam recursos avançados e suporte prioritário CodeGlam.
            </p>
            <ul className={styles.planoRecursos}>
              <li>Agendamentos ilimitados</li>
              <li>Suporte prioritário</li>
              <li>Relatórios avançados</li>
            </ul>
            <Link to={'/register'}>
            <button className={styles.planoCta}>Assinar Plano Premium</button>
            </Link>
          </div>
        </div>

  
      </div>
    </div>
  );
}

export default Planos;