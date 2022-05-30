import React from "react";
import { calcTotalPrice } from "../functions";
import { Button } from "./Button/Button";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="absolute right-8 top-24 bg-gray-600 p-4 rounded-md border-2">
      <div className="border-b-2">
        {items.length > 0
          ? items.map((game) => <p className="py-2">{game.title} | <span className="text-gray-400">{game.price} ft.</span></p>)
          : "Добавьте свою первую игру"}
      </div>
      <div>
        {items.length > 0 ? (
          <div>
            <div className="my-4 font-light">
              <p>
                Итого:{" "}
                <span className="font-bold">{calcTotalPrice(items)}</span> ft.
              </p>
            </div>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
