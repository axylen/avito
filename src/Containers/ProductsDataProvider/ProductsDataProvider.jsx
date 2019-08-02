import React, { useState, useEffect } from 'react';
import ProductList from 'Containers/ProductList/ProductList';

const favoritesContext = React.createContext();

export default function ProductsDataProvider(props) {
  const [productList, setProductList] = useState([]);
  const [productListFavorites, setProductListFavorites] = useState([]);

  const setFavorites = favorites => {
    setProductListFavorites(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const addToFavorites = id => {
    if (productListFavorites.includes(id)) return;
    setFavorites([...productListFavorites, id]);
  };
  const removeFromFavorites = id => {
    setFavorites(productListFavorites.filter(productId => productId !== id));
  };

  useEffect(() => {
    fetch('//avito.dump.academy/products')
      .then(res => res.json())
      .then(({ data }) => {
        setProductList(data.slice(0, 5));
      });
  }, []);

  useEffect(() => {
    const loadFavorites = () => {
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        setProductListFavorites(JSON.parse(favorites));
      }
    };
    loadFavorites();

    const updateFavorites = e => {
      if (e.key === 'favorites') {
        loadFavorites();
      }
    };

    window.addEventListener('storage', updateFavorites);

    return () => {
      window.removeEventListener('storage', updateFavorites);
    };
  }, []);

  let products = productList;

  if (props.filter.favoritesOnly) {
    products = products.filter(product => productListFavorites.includes(product.id));
  }

  return (
    <favoritesContext.Provider
      value={{ favorites: productListFavorites, addToFavorites, removeFromFavorites }}>
      <ProductList products={products} />
    </favoritesContext.Provider>
  );
}

export { favoritesContext };
