import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeItemCart, setItemInCart } from "../redux/cart/reducer";
import { setCurrentGame } from "../redux/game/reducer";
import { Button } from "./Button/Button";



export const GameItem = ({ obj }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === obj.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickCartItem = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(removeItemCart(obj.id));
    } else {
      dispatch(setItemInCart(obj));
    }
  };

  const handleClickOnItem = () => {
    dispatch(setCurrentGame(obj))
    navigate(`pages/game/${obj.title}/${obj.price}`)
  };

  return (
    <div
      className="shadow-2xl text-white flex flex-col gap-2 cursor-pointer"
      onClick={handleClickOnItem}
    >
      <div>
        <img className="h-[220px]" src={obj.image} alt="/" />
      </div>
      <div className="mt-auto">
        <h1 className="text-xl font-bold">{obj.title}</h1>
      </div>
      <div className="my-2">
        {obj.genres.map((gen) => (
          <span
            key={gen}
            className="bg-gray-600 p-1 rounded-lg flex my-2 items-center justify-center text-gray-400"
          >
            {gen}
          </span>
        ))}
      </div>
      <p className="text-xl my-4">
        Цена: <span className="font-bold">{obj.price}</span> Ft.
      </p>
      <Button
        onClick={handleClickCartItem}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
};
