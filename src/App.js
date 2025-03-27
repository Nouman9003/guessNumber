import React, { useState } from "react";
import "./App.css";

const GuessTheNumber = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numGuess = Number(guess);

    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage("⚠️ Enter a number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (numGuess === randomNumber) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (numGuess > randomNumber) {
      setMessage("📉 Too high! Try a lower number.");
    } else {
      setMessage("📈 Too low! Try a higher number.");
    }
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="game-container">
      <h1>🎯 Guess The Number</h1>
      <p><strong>Enter a number between 1 and 100</strong></p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="input-box"
      />
      <button onClick={handleGuess} className="btn check-btn">Check</button>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="btn restart-btn">Restart</button>
    </div>
  );
};

export default GuessTheNumber;
