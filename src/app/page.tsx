"use client"
import React, { useState } from 'react';
import styles from "./page.module.css"; // Ensure this path is correct
import { StringCalculator } from '../app/common-functions/index';
import InputField from './Components/InputField';

export default function Home() {
  const [numbers, setNumbers] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculator = new StringCalculator();

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      setResult(calculator.add(numbers));
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>String Calculator</h1>
      <form onSubmit={handleCalculate}>
      <InputField 
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
      />
      <div>
        <button className={styles.calculateButton} type="submit">Calculate</button>
      </div>
      {result !== null && <h2 className={styles.resultText}>Result: {result}</h2>}
      {error && <h2 className={styles.errorText}>{error}</h2>}
      </form>
    </div>
  );
}
