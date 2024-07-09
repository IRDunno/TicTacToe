import React from "react";

const NewGame = ({ setGrid, setScore }) => {
  const handleClick = () => {
    setGrid(Array(9).fill(null));
    setScore({ X: 0, O: 0 });
  };

  return (
    <div className="max-w-xs mx-auto">
      <a className="link" onClick={() => handleClick()}>
        Reset Game
      </a>
    </div>
  );
};

export default NewGame;
