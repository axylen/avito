import React, { useContext } from 'react';
import './Product.css';
import SellerInfo from 'Components/SellerInfo/SellerInfo';
import { favoritesContext } from 'Containers/ProductsDataProvider/ProductsDataProvider';

const formatPrice = price => {
  const options = {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  };

  return price.toLocaleString('ru', options);
};

export default function Product({ data }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(favoritesContext);
  const { id, title, seller, pictures } = data;

  const picturesCount = pictures.length - 1;
  const price = data.price ? formatPrice(data.price) : 'Цена не указана';
  const isInFavorites = favorites.includes(id);

  const handleClick = () => {
    if (isInFavorites) {
      return removeFromFavorites(id);
    }
    addToFavorites(id);
  };

  const heartClassNames = ['product__heart-icon'];
  if (isInFavorites) heartClassNames.push('product__heart-icon--active');

  return (
    <div className="product">
      <div className="product__image-group">
        <img src={pictures[0]} alt={title} className="product__image" loading="lazy" />
        <button className="product__favorites-btn" onClick={handleClick}>
          <svg width="20" height="20" className={heartClassNames.join(' ')}>
            <use href="icons.svg#icon-heart" />
          </svg>
          <span className="visually-hidden">
            {isInFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
          </span>
        </button>
        <div className="product__images-count" title={`Дополнительных фото: ${picturesCount}`}>
          {picturesCount === 0 ? null : `+${picturesCount}`}
        </div>
      </div>

      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <p className="product__price">{price}</p>
        <SellerInfo data={seller} />
      </div>
    </div>
  );
}
