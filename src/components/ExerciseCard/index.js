import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Exercise Card Component
 */
export default function ExerciseCard({ title, difficulty = 'beginner', children }) {
  const difficultyColors = {
    beginner: '#4caf50',
    intermediate: '#ff9800',
    advanced: '#f44336',
  };

  return (
    <div className={styles.exerciseCard}>
      <div className={styles.exerciseHeader}>
        <span className={styles.exerciseTitle}>{title}</span>
        <span
          className={styles.exerciseDifficulty}
          style={{ backgroundColor: difficultyColors[difficulty] }}
        >
          {difficulty}
        </span>
      </div>
      <div className={styles.exerciseContent}>{children}</div>
    </div>
  );
}
