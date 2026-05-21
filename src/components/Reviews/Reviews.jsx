import { useState } from 'react';
import { reviewsData } from '../../data/reviewsData';
import { ReviewCard } from './ReviewCard';
import styles from './Reviews.module.css';

export function Reviews() {
  const [filterTag, setFilterTag] = useState('all');

  // Preparing for future tag filtering
  const filteredReviews = filterTag === 'all' 
    ? reviewsData 
    : reviewsData.filter(review => review.tags.includes(filterTag));

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
        {filteredReviews.map(review => (
          <ReviewCard 
            key={review.id}
            name={review.name}
            text={review.text}
            date={review.date}
            avatar={review.avatar}
          />
        ))}
      </div>
    </section>
  );
}
