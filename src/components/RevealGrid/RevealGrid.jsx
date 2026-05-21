import { motion } from 'framer-motion';
import { User, Calendar, Users, BookOpen, Smartphone, Star } from 'lucide-react';
import styles from './RevealGrid.module.css';

const cardsData = [
  { id: 1, text: "Saiba mais sobre mim", icon: User },
  { id: 2, text: "Marque uma consulta", icon: Calendar },
  { id: 3, text: "Participe do Grupo de Desafio para Emagrecimento Saudável", icon: Users },
  { id: 4, text: "Ebooks e Materiais para Pacientes", icon: BookOpen },
  { id: 5, text: "Aplicativo para Pacientes", icon: Smartphone },
  { id: 6, text: "Grupo VIP de acompanhamento", icon: Star },
];

export function RevealGrid() {
  return (
    <div className={styles.gridContainer}>
      {cardsData.map((card) => {
        const IconComponent = card.icon;
        
        return (
          <motion.div
            key={card.id}
            className={styles.card}
            initial="initial"
            whileHover="hover"
            animate="initial"
          >
            {/* Estado Inicial (Placeholder/Icone) */}
            <motion.div
              className={styles.placeholder}
              variants={{
                initial: { opacity: 1, scale: 1 },
                hover: { opacity: 0, scale: 0.9 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <IconComponent className={styles.icon} />
            </motion.div>

            {/* Estado Hover (Botão Revelado) */}
            <motion.button
              className={styles.revealButton}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1 }
              }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                stiffness: 200, 
                damping: 20 
              }}
            >
              {card.text}
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
}
