import { motion } from 'framer-motion';
import { Info, Calendar, Users, BookOpen, Smartphone, Star } from 'lucide-react';
import styles from './RevealGrid.module.css';

const gridData = [
  { id: 1, text: "Saiba mais sobre mim", icon: Info },
  { id: 2, text: "Marque uma consulta", icon: Calendar },
  { id: 3, text: "Participe do Grupo de Desafio para Emagrecimento Saudável", icon: Users },
  { id: 4, text: "Ebooks e Materiais para Pacientes", icon: BookOpen },
  { id: 5, text: "Aplicativo para Pacientes", icon: Smartphone },
  { id: 6, text: "Grupo VIP de acompanhamento", icon: Star },
];

export function RevealGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {gridData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Initial Placeholder State */}
                <motion.div
                  className={styles.placeholder}
                  variants={{
                    rest: { opacity: 1, scale: 1 },
                    hover: { opacity: 0, scale: 0.8 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Icon size={32} className={styles.icon} />
                  <span className={styles.iconLabel}>Ver mais</span>
                </motion.div>

                {/* Hover Reveal State (Button) */}
                <motion.div
                  className={styles.revealWrapper}
                  variants={{
                    rest: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <a href="#" className={styles.revealButton}>
                    {item.text}
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
