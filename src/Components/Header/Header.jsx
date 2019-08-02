import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__avito-icon">
          <svg className="header__avito-icon" xmlns="http://www.w3.org/2000/svg">
            <use href="icons.svg#icon-avito" />
          </svg>
        </a>
        <a className="header__favorites">
          <svg
            width="20"
            height="20"
            className="header__heart-icon"
            xmlns="http://www.w3.org/2000/svg">
            <use href="icons.svg#icon-heart" />
          </svg>
          Избранное
        </a>
      </div>
    </header>
  );
}
