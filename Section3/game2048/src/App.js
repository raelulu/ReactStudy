import React from "react";
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";
import { useState } from "react";
import useLocalStorageNumber from "./hook/useLocalStorage";
import { useEffect } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber("bestScore", 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
