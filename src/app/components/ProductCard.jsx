'use client';
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid gray', margin: 10, marginTop:4, padding: 10 }}  >
      <img src={product.thumbnail} alt={product.title} width={100} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}
