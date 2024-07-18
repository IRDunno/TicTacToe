import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link, linkText }) => {
  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-muted">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="mt-20">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Welcome to TicTacToe</h1>
        <p>Choose gamemode</p>
      </header>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 px-20">
        <Card
          title="Duo"
          description="Play with your friend on the same computer"
          link="/play-duo"
          linkText="Play Now"
        />
        <Card
          title="Online"
          description="Play online against other players"
          link="/play-multiplayer"
          linkText="Play Now"
        />
      </div>
    </div>
  );
};

export default HomePage;
