import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/jobatlite.png" alt="Jobat Lite Logo" className={styles.logo} />
    </header>
  );
};

export default Header;
