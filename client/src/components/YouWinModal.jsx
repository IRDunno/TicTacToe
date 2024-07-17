import React from "react";

const YouWinModal = ({ player, setGrid, isFull, setWinner }) => {
  return (
    <dialog id="WinModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{isFull ? "Draw!" : "You Won!"}</h3>
        <p className="py-4">
          {isFull ? "Restart the game" : `${player} has won the game`}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn"
              onClick={() => {
                setGrid(Array(9).fill(null));
                setWinner(null);
              }}
            >
              New Round
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default YouWinModal;
