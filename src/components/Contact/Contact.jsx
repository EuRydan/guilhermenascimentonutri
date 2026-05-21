import styles from './Contact.module.css';
import { MapLocation } from '../MapLocation/MapLocation';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h3>Localização & Contato</h3>
          
          <div className={styles.contactItemsWrapper}>
            <div className={styles.contactItem}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <p><strong>Endereço:</strong><br/>
                R. Gen. Osório, 4716 - Salto Weissbach<br/>
                Blumenau - SC, 89032-240</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <p><strong>Horário de Funcionamento:</strong><br/>
                Aberto até as 20:00</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <p><strong>Contato & WhatsApp:</strong><br/>
                <a href="https://api.whatsapp.com/send?phone=5519991934163" target="_blank" rel="noopener noreferrer">(19) 99193-4163</a></p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <div>
                <p><strong>Site Oficial:</strong><br/>
                <a href="https://nutr.in" target="_blank" rel="noopener noreferrer">nutr.in</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className={styles.mapSection} style={{ marginTop: '40px' }}>
        <MapLocation 
          latitude={-26.9022977} 
          longitude={-49.1339496} 
          popupTitle="Nutricionista Guilherme"
          popupSubtitle="R. Gen. Osório, 4716 - Salto Weissbach"
        />
      </div>
    </section>
  );
}
