import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const CalloutTypes = {
  info: {
    icon: 'ℹ️',
    bgColor: '#e3f2fd',
    borderColor: '#1976d2',
  },
  warning: {
    icon: '⚠️',
    bgColor: '#fff3e0',
    borderColor: '#f57c00',
  },
  danger: {
    icon: '🚨',
    bgColor: '#ffebee',
    borderColor: '#d32f2f',
  },
  success: {
    icon: '✅',
    bgColor: '#e8f5e9',
    borderColor: '#388e3c',
  },
};

/**
 * Callout Component for highlighting important information
 */
export default function Callout({ type = 'info', children, title }) {
  const config = CalloutTypes[type] || CalloutTypes.info;

  return (
    <div
      className={clsx(styles.callout, styles[type])}
      style={{
        backgroundColor: config.bgColor,
        borderLeftColor: config.borderColor,
      }}
    >
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>{config.icon}</span>
        {title && <span className={styles.calloutTitle}>{title}</span>}
      </div>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}
