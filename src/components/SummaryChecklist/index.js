import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Summary Checklist Component
 */
export default function SummaryChecklist({ items = [] }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = items.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className={styles.checklistContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={styles.progressText}>
        {completedCount} of {totalCount} completed
      </div>
      <div className={styles.checklist}>
        {items.map((item, index) => (
          <label key={index} className={styles.checklistItem}>
            <input
              type="checkbox"
              checked={checkedItems[index] || false}
              onChange={() => toggleItem(index)}
              className={styles.checkbox}
            />
            <span
              className={clsx(
                styles.checkboxLabel,
                checkedItems[index] && styles.checked
              )}
            >
              {item.question}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
