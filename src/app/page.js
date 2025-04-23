import ProductList from './components/ProductList';

export default function HomePage() {
  return (
    <div>
    <h1 className='text-center text-3xl'>Products</h1>
      <ProductList />
    </div>
  );
}
