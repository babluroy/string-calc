import React from 'react';
import styles from './style.module.css';

interface InputField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputField> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className={styles.inputField}
      value={value}
      onChange={onChange}
      placeholder="Enter numbers"
    />
  );
};

export default InputField;
