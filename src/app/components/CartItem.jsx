'use client';
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
      <img src={item.thumbnail} alt={item.title} width={80} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Removecart</button>
    </div>
  );
}
