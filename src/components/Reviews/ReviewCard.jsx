import styles from './Reviews.module.css';

export function ReviewCard({ name, text, date, avatar }) {
  return (
    <div className={styles.customerTestimonialCard}>
      <p>"{text}"</p>
      <div className={styles.reviewer}>
        <div className={styles.reviewerAvatar}>{avatar}</div>
        <div className={styles.reviewerInfo}>
          <h4>{name}</h4>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
