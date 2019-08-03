import React, { useContext } from 'react';
import './Product.css';
import SellerInfo from 'Components/SellerInfo/SellerInfo';
import { favoritesContext } from 'Containers/ProductsDataProvider/ProductsDataProvider';

export default function Product({ data }) {
  const sellerData = data.seller;
  const { favorites, addToFavorites, removeFromFavorites } = useContext(favoritesContext);

  const image = data.pictures[0];
  const imagesCount = data.pictures.length - 1;
  const { id, title } = data;
  const price = data.price
    ? data.price.toLocaleString('ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      })
    : null;

  const isInFavorites = favorites.includes(id);

  const handleClick = () => {
    if (isInFavorites) {
      return removeFromFavorites(id);
    }
    return addToFavorites(id);
  };

  return (
    <div className="product">
      <div className="product__image-group">
        <img src={image} alt={title} className="product__image" loading="lazy" />
        <button className="product__favorites-btn" onClick={handleClick}>
          <svg
            width="20"
            height="20"
            className={
              isInFavorites
                ? 'product__heart-icon product__heart-icon--active'
                : 'product__heart-icon'
            }
            xmlns="http://www.w3.org/2000/svg">
            <use href="icons.svg#icon-heart" />
          </svg>
        </button>
        <div className="product__images-count">{imagesCount === 0 ? null : `+${imagesCount}`}</div>
      </div>
      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <p className="product__price">{price || 'Цена не указана'}</p>
        <SellerInfo data={sellerData} />
      </div>
    </div>
  );
}
