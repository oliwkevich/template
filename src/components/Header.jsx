import React from "react";
import { useNavigate } from "react-router-dom";
import { CartBlock } from "./CartBlock";


export const Header = () => {
  const navigate = useNavigate()
  const handleHeaderClick = () => navigate('/')
  return (
    <div className="flex justify-between items-center w-full px-2 2xl:px-16 h-20 shadow-xl">
      <h1 className="font-bold text-[32px] text-white cursor-pointer" onClick={handleHeaderClick}>GamesMarket.</h1>
      <div>
          <CartBlock/>
      </div>
    </div>
  );
};
