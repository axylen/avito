import React, { useState, useEffect } from 'react';
import ProductList from 'Containers/ProductList/ProductList';

const favoritesContext = React.createContext();

export default function ProductsDataProvider({ filter, favoritesOnly }) {
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
    (async function() {
      const [productsRes, sellersRes] = await Promise.all([
        fetch('//avito.dump.academy/products').then(res => res.json()),
        fetch('//avito.dump.academy/sellers').then(res => res.json()),
      ]);

      const sellers = {};
      sellersRes.data.forEach(seller => {
        sellers[seller.id] = seller;
      });

      const products = productsRes.data.map(product => {
        const sellerId = product.relationships.seller;
        return { ...product, seller: sellers[sellerId] };
      });

      setProductList(products);
    })();
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

  if (favoritesOnly) {
    products = products.filter(product => productListFavorites.includes(product.id));
  }

  if (filter.category !== 'any') {
    products = products.filter(product => product.category === filter.category);
  }
  if (filter.minPrice !== '') {
    products = products.filter(product => product.price >= filter.minPrice);
  }
  if (filter.maxPrice !== '') {
    products = products.filter(product => product.price <= filter.maxPrice);
  }

  products = products.sort((a, b) => {
    if (filter.order === 'rating') return b.seller.rating - a.seller.rating;

    if (a.price === undefined) return 1;
    if (b.price === undefined) return -1;
    return a.price - b.price;
  });

  return (
    <favoritesContext.Provider
      value={{ favorites: productListFavorites, addToFavorites, removeFromFavorites }}>
      <ProductList products={products} />
    </favoritesContext.Provider>
  );
}

export { favoritesContext };
