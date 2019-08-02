import React, { useState } from 'react';
import Header from 'Components/Header/Header';
import ProductsDataProvider from 'Containers/ProductsDataProvider/ProductsDataProvider';

function App() {
  const [filter, setFilter] = useState({
    category: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    favoritesOnly: false,
  });

  return (
    <>
      <Header />

      <ProductsDataProvider filter={filter} />
    </>
  );
}

export default App;
