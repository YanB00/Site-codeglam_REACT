import styles from "./Features2.module.css"; 

const Features2 = () => (
  <div id="features2" className={styles.body3}> 
    <img
      src="/img/hairdresser team-pana.svg"
      alt="Hairdresser"
      className={styles.hairdresserImage}
    />
    <div className={styles.textContent}>
      <h1>
        Simplifique sua Gestão e Foque no{" "}
        <span className={styles.highlight}>Sucesso</span>
      </h1>
      <p>
        "Foque no atendimento aos seus clientes, e o CodeGlam cuida do resto!"
        <br />
        <br />
        Com o CodeGlam, você deixa de lado as rotinas cansativas de gestão. Tudo o
        que oferecemos é pensado para simplificar, conectar e automatizar o dia a
        dia do seu negócio, ajudando você a focar no que realmente importa: o
        sucesso dos seus clientes.
      </p>
      <p>
        Da nossa comunidade de profissionais de beleza à tecnologia de ponta, dos
        treinamentos práticos aos insights estratégicos do mercado, do suporte
        dedicado ao sistema de agendamento e gestão completo e integrado.
        <br />
        <br />
        Um mundo de soluções para descomplicar os desafios do gerenciamento e
        impulsionar o potencial da sua empresa. Afinal, quem busca crescimento sabe
        que tempo é precioso, e investir esse tempo em criar novas oportunidades é
        essencial.
      </p>
      <p id="p2">
        Relaxe, inspire-se, inove. Com o CodeGlam, seu negócio não para e seus
        sonhos se tornam realidade.
      </p>
    </div>
  </div>
);

export default Features2;