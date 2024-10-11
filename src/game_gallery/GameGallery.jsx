import React, { useState } from "react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GameWindow from "./components/GameWindow";

const games = [
  { id: 1, name: "Tic-Tac-Toe", image: "./images/tictactoe.png" },
  { id: 2, name: "Memory Game", image: "./images/memory.png" },
  { id: 3, name: "Snake", image: "./images/snake.png" },
  { id: 4, name: "Connect Four", image: "./images/connect4.png" },
  { id: 5, name: "Guess the Word", image: "./images/guesstheword.png" },
  { id: 6, name: "Quiz", image: "./images/quiz.png" },
  { id: 7, name: "Simon Says", image: "./images/simon_says.webp" },
  { id: 8, name: "Clicker Game", image: "./images/clicker.webp" },
];

function GameGallery() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="App">
      <Header />
      {selectedGame ? (
        <GameWindow
          game={selectedGame}
          closeGame={() => setSelectedGame(null)}
        />
      ) : (
        <GameGrid games={games} selectGame={setSelectedGame} />
      )}
    </div>
  );
}

export default GameGallery;
