'use client';
import Link from 'next/link';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '1.5rem',
      color: 'white',
      padding: '0.5rem',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '1.5rem',
        color: 'white',
        marginRight: '1rem',
      }}>All Products</h1>

      <Link href="/cart">
        <button style={{
          borderRadius: '0.375rem', 
          color: 'black',
          padding: '0.5rem 1rem',
          margin: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          border: 'none',
          cursor: 'pointer',
        }}
        >
          Your Cart
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
