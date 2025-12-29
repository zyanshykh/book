import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Code Block Component with syntax highlighting
 */
export default function CodeBlock({ children, language = 'python', title }) {
  return (
    <div className={styles.codeBlock}>
      {title && <div className={styles.codeTitle}>{title}</div>}
      <pre className={`language-${language}`}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
