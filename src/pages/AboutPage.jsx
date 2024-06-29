import React from "react";
import TicTacToe from "../assets/tictactoe.png";

const AboutPage = () => {
  return (
    <div className="mt-20">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold">About</h1>
      </header>
      <hr className="border-slate-700 w-3/4 mx-auto my-6" />
      <div>
        <p className="text-lg mb-5 text-center">TicTacToe</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center mx-20 md:mx-40">
          <div className="flex justify-center md:justify-end">
            <img src={TicTacToe} alt="TicTacToe" />
          </div>
          <div className="flex items-center text-justify">
            Tic-Tac-Toe is a classic two-player game that is played on a 3x3
            grid. The players take turns marking a cell in the grid with their
            respective symbols, traditionally "X" and "O". The objective of the
            game is for a player to place three of their marks in a horizontal,
            vertical, or diagonal row.
          </div>
        </div>

        <hr className="border-slate-800 w-1/2 mx-auto my-6" />
        <p className="text-lg mb-5 text-center">Developer</p>
        <div className="mx-20 text-center">
          I am Aby Calago, a fresh graduate from Misamis University in Ozamis City. Hehe
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
