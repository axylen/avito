import React, { useState } from 'react';
import 'App.css';
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
      <Header favoritesOnly={filter.favoritesOnly} setFilter={setFilter} />
      <main className="main-containers">
        <h1 className="visually-hidden">Объявления Авито</h1>
        <ProductsDataProvider filter={filter} />
      </main>
    </>
  );
}

export default App;
