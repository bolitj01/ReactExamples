import React, { useState } from 'react';
import Header from './components/Header';
import GameGrid from './components/GameGrid';
import GameWindow from './components/GameWindow';

const games = [
  { id: 1, name: 'Tic-Tac-Toe', image: '/images/tic-tac-toe.png', url: '/games/tic-tac-toe.html' },
  { id: 2, name: 'Memory Game', image: '/images/memory-game.png', url: '/games/memory-game.html' },
  { id: 3, name: 'Snake', image: '/images/snake.png', url: '/games/snake.html' },
  // Add more games as needed
];

function GameGallery() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="App">
      <Header />
      {selectedGame ? (
        <GameWindow game={selectedGame} closeGame={() => setSelectedGame(null)} />
      ) : (
        <GameGrid games={games} selectGame={setSelectedGame} />
      )}
    </div>
  );
}

export default GameGallery;
