import React, { useEffect, useState } from "react";
import YouWinModal from "./YouWinModal";

const PlayDuoPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [id, setId] = useState(null);
  const [full, setFull] = useState(false);

  const handleClick = (index) => {
    if (grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    setId(index);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  useEffect(() => {
    checkGrids(id);
  }, [grid, id]);

  useEffect(() => {
    if (full) {
      document.getElementById("WinModal").showModal();
    }
  }, [full]);

  const checkGrids = (index) => {
    var win = false;
    switch (index) {
      case 0:
        if (grid[index] == grid[index + 1] && grid[index] == grid[index + 2]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 3] &&
          grid[index] == grid[index + 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 4] &&
          grid[index] == grid[index + 8]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 1:
        if (grid[index] == grid[index - 1] && grid[index] == grid[index + 1]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 3] &&
          grid[index] == grid[index + 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 2:
        if (grid[index] == grid[index - 1] && grid[index] == grid[index - 2]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 3] &&
          grid[index] == grid[index + 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 2] &&
          grid[index] == grid[index + 4]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 3:
        if (grid[index] == grid[index - 3] && grid[index] == grid[index + 3]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index + 1] &&
          grid[index] == grid[index + 2]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 4:
        if (grid[index] == grid[index - 3] && grid[index] == grid[index + 3]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 1] &&
          grid[index] == grid[index + 1]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 4] &&
          grid[index] == grid[index + 4]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 2] &&
          grid[index] == grid[index + 2]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 5:
        if (grid[index] == grid[index - 3] && grid[index] == grid[index + 3]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 1] &&
          grid[index] == grid[index - 2]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 6:
        if (grid[index] == grid[index + 1] && grid[index] == grid[index + 2]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 2] &&
          grid[index] == grid[index - 4]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 3] &&
          grid[index] == grid[index - 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 7:
        if (grid[index] == grid[index + 1] && grid[index] == grid[index - 1]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 3] &&
          grid[index] == grid[index - 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
      case 8:
        if (grid[index] == grid[index - 2] && grid[index] == grid[index - 1]) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 3] &&
          grid[index] == grid[index - 6]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        } else if (
          grid[index] == grid[index - 4] &&
          grid[index] == grid[index - 8]
        ) {
          document.getElementById("WinModal").showModal();
          win = true;
        }
        break;
    }

    if (!win) {
      var tempFullVar = true;
      grid.map((element) => {
        if (element == null) {
          tempFullVar = false;
        }
      });
      setFull(tempFullVar);
    }
  };

  return (
    <>
      <YouWinModal
        player={currentPlayer === "X" ? "O" : "X"}
        setGrid={setGrid}
        isFull={full}
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
