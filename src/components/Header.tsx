import styles from './Header.module.css';

export function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <strong>Bubble Tasks</strong>
      </div>
    </header>
  );
}
