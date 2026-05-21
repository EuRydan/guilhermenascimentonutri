import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="#" className={styles.logo}>Nutricionista Guilherme Nascimento</a>
        <p>&copy; {new Date().getFullYear()} Nutricionista Guilherme Nascimento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
