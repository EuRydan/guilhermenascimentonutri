import { useState } from 'react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';
import { ReviewCard } from './ReviewCard';
import styles from './Reviews.module.css';

export function Reviews() {
  const [filterTag, setFilterTag] = useState('all');
  
  // Substitua este Place ID pelo Place ID real da ficha do Google Meu Negócio
  const PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Exemplo de Place ID (Google Sydney)
  
  const { reviews, loading, error } = useGoogleReviews(PLACE_ID);

  // Preparing for future tag filtering
  const filteredReviews = filterTag === 'all' 
    ? reviews 
    : reviews.filter(review => review.tags && review.tags.includes(filterTag));

  return (
    <section id="reviews" className={`${styles.section} ${styles.bgSurface}`}>
      <div className={styles.sectionHeader}>
        <h2>O que dizem os pacientes</h2>
      </div>
      
      {/* Container for future filters (hidden or placeholder for now) */}
      <div className={styles.filtersContainer} style={{ display: 'none' }}>
        <button onClick={() => setFilterTag('all')}>Todos</button>
        <button onClick={() => setFilterTag('dieta')}>Dieta</button>
        <button onClick={() => setFilterTag('profissional')}>Profissional</button>
      </div>

      <div className={styles.gridReviews}>
        {loading && (
          // Skeleton loading placeholders
          <>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
          </>
        )}

        {error && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            Não foi possível carregar as avaliações do Google no momento.
          </p>
        )}

        {!loading && !error && filteredReviews.map(review => (
          <ReviewCard 
            key={review.id}
            name={review.name}
            text={review.text}
            date={review.date}
            avatar={review.avatar}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
}

