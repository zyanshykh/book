import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Card Component for displaying card-based content
 */
export default function Card({ children, title, icon, href }) {
  const content = (
    <div className={styles.card}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      {title && <div className={styles.cardTitle}>{title}</div>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={styles.cardLink}>
        {content}
      </a>
    );
  }

  return content;
}

/**
 * Card Group Component for displaying multiple cards
 */
export function CardGroup({ children }) {
  return <div className={styles.cardGroup}>{children}</div>;
}
