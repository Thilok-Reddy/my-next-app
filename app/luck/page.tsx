'use client';

import { FormEvent, useState } from 'react';

export default function LuckPage() {
  const [guess, setGuess] = useState('');
  const [secretNumber, setSecretNumber] = useState<number | null>(null);
  const [result, setResult] = useState('Make your prediction.');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const parsedGuess = Number(guess);

    if (!Number.isInteger(parsedGuess) || parsedGuess < 1 || parsedGuess > 10) {
      setSecretNumber(null);
      setResult('Please enter a whole number from 1 to 10.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setSecretNumber(randomNumber);
    setResult(parsedGuess === randomNumber ? 'Lucky!' : 'Hard Luck!');
  };

  const handleReset = () => {
    setGuess('');
    setSecretNumber(null);
    setResult('Make your prediction.');
  };

  return (
    <main className="page-shell narrow-shell">
      <section className="card luck-page-card">
        <p className="eyebrow">Lucky draw</p>
        <h1>Predict a number from 1 to 10</h1>

        <form onSubmit={handleSubmit} className="luck-form">
          <label htmlFor="guess" className="sr-only">
            Your guess
          </label>
          <input
            id="guess"
            type="number"
            min={1}
            max={10}
            step={1}
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="Enter a number"
            required
          />
          <button type="submit">Check my luck</button>
        </form>

        <div className="result-box" aria-live="polite">
          <strong>{result}</strong>
          {secretNumber !== null && (
            <p>
              The hidden number was <strong>{secretNumber}</strong>.
            </p>
          )}
        </div>

        <div className="luck-actions">
          <button type="button" className="secondary-link button-link" onClick={handleReset}>
            Try again
          </button>
          <a href="/" className="secondary-link">
            Back to my profile
          </a>
        </div>
      </section>
    </main>
  );
}
