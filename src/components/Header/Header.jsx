import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>Nutricionista Guilherme Nascimento</a>
      <a 
        href="https://api.whatsapp.com/send?phone=5519991934163" 
        className={`button button-primary ${styles.cta}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Agendar Consulta
      </a>
    </header>
  );
}
