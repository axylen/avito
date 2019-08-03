import React, { useState } from 'react';
import 'App.css';
import Header from 'Components/Header/Header';
import ProductsDataProvider from 'Containers/ProductsDataProvider/ProductsDataProvider';
import Filters from 'Components/Filters/Filters';

function App() {
  const [filter, setFilter] = useState({
    category: 'any',
    minPrice: '',
    maxPrice: '',
    order: 'rating',
  });

  const [favoritesOnly, setFavoritesOnly] = useState(false);

  return (
    <>
      <Header favoritesOnly={favoritesOnly} setFavoritesOnly={setFavoritesOnly} />
      <main className="main-containers">
        <h1 className="visually-hidden">Объявления Авито</h1>
        <Filters filter={filter} setFilter={setFilter} />
        <ProductsDataProvider filter={filter} favoritesOnly={favoritesOnly} />
      </main>
    </>
  );
}

export default App;
