import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 font-bold text-2xl">
      <h1>Cart</h1>
      <button
        className="bg-black text-white p-2 font-bold text-sm rounded-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
