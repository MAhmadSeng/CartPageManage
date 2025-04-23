'use client';
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div>
      <h1 style={{marginLeft:4}}>All cart</h1>
      {cart.length === 0 ? (
        <p className="text-base text-white text-center p-2 ">No cart items</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}
