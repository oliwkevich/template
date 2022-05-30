import React from "react";
import { useSelector } from "react-redux";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  if(!game) return null;
  return (
      <div className="grid grid-cols-2 mt-12 text-white">
        <iframe
        width='90%'
        height='400px'
        src={game.video}
        title="YouTube Video Player"
        >
        </iframe>
        <div>
          <img src={game.image} alt='/'/>
          <h1 className="text-4xl my-4">{game.title}</h1>
          <p className="font-bold">{game.description}</p>
          <ul className="flex flex-col max-w-[160px]">
            {game.genres.map(game => <li className="border m-2 p-2 rounded-md bg-gray-500">{game}</li>)}
          </ul>
        </div>
      </div>
  );
};
