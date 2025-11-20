import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SuperCoin.css";

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coin">
      <h2 className="super-coin-title">Super Coins</h2>
      <p className="super-coin-info">
        You will earn <span className="super-coin-count">{superCoins}</span>{" "}
        super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoin;
