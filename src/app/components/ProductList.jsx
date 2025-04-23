'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dataFetch = await fetch('https://dummyjson.com/products');
        const data = await dataFetch.json();
        setProducts(data.products);
      } catch (error) {
        console.error('error fetching product', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-4 '>
      {products.slice(0,6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
