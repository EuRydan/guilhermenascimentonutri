import styles from './Reviews.module.css';

export function ReviewCard({ name, text, date, avatar, rating }) {
  // Generate stars based on rating
  const renderStars = () => {
    if (!rating) return null;
    return (
      <div className={styles.ratingStars}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? styles.starFilled : styles.starEmpty}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.customerTestimonialCard}>
      {renderStars()}
      <p>"{text}"</p>
      <div className={styles.reviewer}>
        {avatar ? (
          <img src={avatar} alt={`Foto de ${name}`} className={styles.reviewerAvatarImg} />
        ) : (
          <div className={styles.reviewerAvatar}>{name ? name.charAt(0).toUpperCase() : 'U'}</div>
        )}
        <div className={styles.reviewerInfo}>
          <h4>{name}</h4>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
