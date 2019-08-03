import React from 'react';
import './Header.css';

export default function Header({ setFilter, favoritesOnly }) {
  const setShowFavoritesOnly = favoritesOnly => {
    setFilter(oldVal => ({ ...oldVal, favoritesOnly }));
  };

  const favoritesClasses = ['header__heart-icon'];
  if (favoritesOnly) favoritesClasses.push('header__heart-icon--active');

  return (
    <header className="header">
      <div className="header__container">
        <button className="header__avito-btn" onClick={e => setShowFavoritesOnly(false)}>
          <svg className="header__avito-icon" xmlns="http://www.w3.org/2000/svg">
            <use href="icons.svg#icon-avito" />
          </svg>
        </button>
        <button className="header__favorites" onClick={e => setShowFavoritesOnly(true)}>
          <svg
            width="20"
            height="20"
            className={favoritesClasses.join(' ')}
            xmlns="http://www.w3.org/2000/svg">
            <use href="icons.svg#icon-heart" />
          </svg>
          Избранное
        </button>
      </div>
    </header>
  );
}
