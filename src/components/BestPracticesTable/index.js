import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Best Practices Table Component
 */
export default function BestPracticesTable({ category, items = [] }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Practice</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className={styles.practice}>{item.practice}</td>
              <td className={styles.reason}>{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
