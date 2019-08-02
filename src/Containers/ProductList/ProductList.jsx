import React from 'react';
import './ProductList.css';

import Product from 'Components/Product/Product';

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
}
