import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../functions.js";
import { CartMenu } from "./CartMenu.jsx";

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const [cart, setCart] = React.useState(false)

  const handleClickCart = () => {
    setCart(prev => !prev)
  }

  return (
    <div onClick={handleClickCart} className="flex justify-between items-center gap-4 text-white font-bold cursor-pointer">
      <BsCart2 size={30} />
      {totalPrice > 0 && <p>{totalPrice} ft | {items.length} шт.</p>}
        {cart && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
