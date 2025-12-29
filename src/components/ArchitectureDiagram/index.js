import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Architecture Diagram Component
 * Displays architecture diagrams with Mermaid or custom visuals
 */
export default function ArchitectureDiagram({ type = 'flowchart', nodes = [] }) {
  return (
    <div className={styles.architectureDiagram}>
      <div className={styles.diagramContainer}>
        {type === 'flowchart' && (
          <div className={styles.flowchart}>
            {nodes.map((node, index) => (
              <div key={index} className={styles.node}>
                <div
                  className={styles.nodeContent}
                  style={{ backgroundColor: node.color || '#e3f2fd' }}
                >
                  <span className={styles.nodeLabel}>{node.label}</span>
                </div>
                {index < nodes.length - 1 && (
                  <div className={styles.connector}>↓</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
