import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faMoneyCheck, faCogs } from "@fortawesome/free-solid-svg-icons";
import styles from "./Features.module.css"; 

const Features = () => (
  <div className={styles.body2}>
    <div className={styles["image-container"]}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <img className={styles.img} src="./img/CODE (2).png" alt="Logo" />
    </div>
    <div className={styles["content-container"]}>
      <h1 className={styles.title}>Novo modo de realizar seus agendamentos</h1>
      <ul className={styles.cardList}>
        <li className={styles.card}>
          <FontAwesomeIcon icon={faAddressBook} size="2x" className={styles.icon} />
          <h4>Fácil de Usar</h4>
          <p>O CodeGlam é intuitivo e traz mais organização para seu dia a dia.</p>
        </li>
        <li className={styles.card}>
          <FontAwesomeIcon icon={faMoneyCheck} size="2x" className={styles.icon} />
          <h4>Cadastre seus produtos e serviços</h4>
          <p>Organize seu negócio de forma rápida e simples.</p>
        </li>
        <li className={styles.card}>
          <FontAwesomeIcon icon={faCogs} size="2x" className={styles.icon} />
          <h4>Automatize Seus Processos</h4>
          <p>Notificações automáticas para facilitar sua gestão.</p>
        </li>
      </ul>
    </div>
  </div>

  



);

export default Features;
