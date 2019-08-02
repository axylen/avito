import React, { useState, useEffect } from 'react';
import './ProductList.css';

import Product from 'Components/Product/Product';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('//avito.dump.academy/products')
      .then(res => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="product-list">
      {productList.map(product => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
}
