import React, { useState, useEffect } from 'react';
import ProductList from 'Containers/ProductList/ProductList';

const favoritesContext = React.createContext();

const getProducts = async () => {
  const [productsRes, sellersRes] = await Promise.all([
    fetch('//avito.dump.academy/products').then(res => res.json()),
    fetch('//avito.dump.academy/sellers').then(res => res.json()),
  ]);

  const sellers = {};
  sellersRes.data.forEach(seller => {
    sellers[seller.id] = seller;
  });

  return productsRes.data.map(product => {
    const sellerId = product.relationships.seller;
    return { ...product, seller: sellers[sellerId] };
  });
};

const getFavorites = () => {
  const favorites = localStorage.getItem('favorites');
  if (!favorites) return [];
  return JSON.parse(favorites);
};

const filterProducts = (products, filter, favorites, favoritesOnly) => {
  if (favoritesOnly) {
    products = products.filter(({ id }) => favorites.includes(id));
  }

  const { category, minPrice, maxPrice } = filter;
  if (category !== 'any') {
    products = products.filter(product => product.category === category);
  }

  if (minPrice !== '') {
    products = products.filter(({ price }) => price >= minPrice);
  }
  if (maxPrice !== '') {
    products = products.filter(({ price }) => price <= maxPrice);
  }

  return products;
};

const sortProducts = (products, orderBy) => {
  const order = {
    rating: (a, b) => {
      const ratingDifference = b.seller.rating - a.seller.rating;
      if (ratingDifference === 0) {
        return order.price(a, b);
      }
      return ratingDifference;
    },
    price: (a, b) => {
      if (a.price === undefined) return 1;
      if (b.price === undefined) return -1;
      return a.price - b.price;
    },
  };

  const sortFunction = order[orderBy];
  if (sortFunction === undefined) return products;
  return products.sort(sortFunction);
};

export default function ProductsDataProvider({ filter, favoritesOnly }) {
  const [productList, setProductList] = useState([]);
  const [productListFavorites, setProductListFavorites] = useState(getFavorites());

  // Загрузка избранных объявлений
  useEffect(() => {
    const updateFav = e => {
      if (e.key === 'favorites') {
        setProductListFavorites(getFavorites());
      }
    };

    window.addEventListener('storage', updateFav);
    return () => window.removeEventListener('storage', updateFav);
  }, []);

  // Загрузка списка объявлений
  useEffect(() => {
    getProducts().then(setProductList);
  }, []);

  const products = filterProducts(productList, filter, productListFavorites, favoritesOnly);

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

  const favoritesContextValue = {
    favorites: productListFavorites,
    addToFavorites,
    removeFromFavorites,
  };
  return (
    <favoritesContext.Provider value={favoritesContextValue}>
      <ProductList products={sortProducts(products, filter.order)} />
    </favoritesContext.Provider>
  );
}

export { favoritesContext };
