import React from 'react';
import './ProductList.css';

import Product from 'Components/Product/Product';

export default function ProductList({ products }) {
  return (
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id}>
          <Product data={product} />
        </li>
      ))}
    </ul>
  );
}
