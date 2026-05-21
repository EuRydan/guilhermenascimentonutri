import styles from './Features.module.css';

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Diferenciais do Atendimento</h2>
      </div>
      <div className={styles.gridFeatures}>
        {/* Card 1 */}
        <div className={styles.cardFeature}>
          <div className={styles.iconWrapper}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <h3>Acesso Direto via WhatsApp</h3>
          <p>Acompanhamento de perto. Esclareça suas dúvidas rapidamente, com contato direto pelo WhatsApp durante o tratamento.</p>
        </div>
        
        {/* Card 2 */}
        <div className={styles.cardFeature}>
          <div className={styles.iconWrapper}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Adequação para toda a Família</h3>
          <p>A nutrição não precisa ser solitária. Planos alimentares desenvolvidos para engajar e adaptar toda a sua família.</p>
        </div>
        
        {/* Card 3 */}
        <div className={styles.cardFeature}>
          <div className={styles.iconWrapper}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3>Nutrição Clínica</h3>
          <p>Foco na saúde e prevenção. Ajuda especializada no tratamento de exames alterados, anemias e outras condições clínicas.</p>
        </div>
      </div>
    </section>
  );
}
