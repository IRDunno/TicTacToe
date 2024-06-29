import React from "react";

const HomePage = () => {
  return (
    <div className="mt-20">
      <header className="text-center space-y-3">
        <h1 className="text-4xl">Welcome to TicTacToe</h1>
        <p className="">Choose gamemode</p>
      </header>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
        <div className="card bg-base-100 image-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Duo</h2>
            <p>Play with your friend on the same computer</p>
            <div className="card-actions justify-end">
              <button className="btn btn-muted">Play Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Online</h2>
            <p>Play online against other players</p>
            <div className="card-actions justify-end">
              <button className="btn btn-muted">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
