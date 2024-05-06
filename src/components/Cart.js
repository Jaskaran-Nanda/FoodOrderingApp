import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-6 p-8">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto flex">
        {cartItems.length === 0 && (
          <h1 className="m-auto">
            Your Cart is Empty, Please add items to the cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
