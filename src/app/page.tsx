"use client"
import React, { useState } from 'react';
import styles from "./page.module.css";
import { StringCalculator } from '../app/common-functions/index';

export default function Home() {

  const [numbers, setNumbers] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const calculator = new StringCalculator();

  const handleCalculate = (): void => {
    try {
      setResult(calculator.add(numbers));
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
    </div>
  );
}