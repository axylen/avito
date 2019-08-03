import React from 'react';
import './ProductList.css';

import Product from 'Components/Product/Product';

export default function ProductList({ products }) {
  if (products.length === 0) return 'Список объявлений пуст';

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
