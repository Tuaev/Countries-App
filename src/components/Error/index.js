import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';
function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.message}>Oops, something went wrong.</h1>
      <br />
      <Link to={'/'}>Go Home</Link>
    </div>
  );
}

export default Error;
