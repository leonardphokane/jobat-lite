import React from 'react';
import styles from './Footer.module.css'; // ✅ Scoped CSS Module import

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Jobat Lite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
