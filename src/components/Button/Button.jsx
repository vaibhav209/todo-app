import React from 'react';
import styles from './Button.module.css';

const Button = ({ btnName, disabled,  onClick }) => {
  return (
    <button onClick={onClick} className={styles.btnStyles} disabled={disabled}>
      {btnName}
    </button>
  );
};

export default Button;
