import React, { useEffect, useState } from "react";
import YouWinModal from "./YouWinModal";

const PlayDuoPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (grid[index] || winner) return; // Prevent overwriting a cell or playing after game is won

    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  useEffect(() => {
    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
          return grid[a];
        }
      }

      return null;
    };

    const checkFull = () => {
      return grid.every(cell => cell !== null);
    };

    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
      document.getElementById("WinModal").showModal();
    } else if (checkFull()) {
      setWinner("Draw");
      document.getElementById("WinModal").showModal();
    }
  }, [grid]);

  return (
    <>
      <YouWinModal
        player={currentPlayer === "X" ? "O" : "X"}
        setGrid={setGrid}
        isFull={winner === "Draw"}
        setWinner={setWinner}
      />
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
    </>
  );
};

export default PlayDuoPage;
