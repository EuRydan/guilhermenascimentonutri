import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.heroBandDark}>
      <div className={styles.ratingBadge}>
        <span>★</span> 5,0 de 292 avaliações
      </div>
      <h1 className={styles.title}>Atendimento humanizado e planos adaptados à sua rotina.</h1>
      <p className={styles.subtitle}>
        Transforme sua alimentação sem dietas restritivas e alcance seus resultados com saúde e bem-estar.
      </p>
      <a 
        href="https://api.whatsapp.com/send?phone=5519991934163" 
        className={`button button-on-dark ${styles.cta}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Falar no WhatsApp: (19) 99193-4163
      </a>
    </section>
  );
}
