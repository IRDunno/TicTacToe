import React from "react";

const ScoreDisplay = (score) => {
  return (
    <div className="max-w-xs mx-auto mt-5 grid grid-cols-2">
      <p className="text-left">Player X: {score.score.X}</p>
      <p className="text-right">Player O: {score.score.O}</p>
    </div>
  );
};

export default ScoreDisplay;
