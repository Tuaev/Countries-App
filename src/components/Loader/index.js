import React from 'react';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loader;
