import React, { useState } from "react";

const PlayDuoPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [grid, setGrid] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <>
      <div className="mt-10">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold">Play Duo</h1>
          <p>Defeat one another!</p>
        </header>
        <div className="mt-10 grid grid-cols-3 gap-2 mx-auto p-7 text-center border-slate-500 max-w-xs">
          {grid.map((cell, index) => (
            <div
              key={index}
              className="h-20 w-20 flex items-center justify-center border-slate-500 border-2 rounded-xl bg-primary-content text-3xl font-bold text-slate-500 cursor-pointer hover:border-slate-100"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayDuoPage;
