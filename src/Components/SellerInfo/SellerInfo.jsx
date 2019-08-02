import React from 'react';
import './SellerInfo.css';

const ratingColors = {
  1: '#E74C3C',
  2: '#EC8825',
  3: '#F1C40F',
  4: '#ADC630',
  5: '#69CA53',
};

export default function SellerInfo({ data }) {
  const { rating = 0, name = '', isCompany } = data;
  const borderColor = ratingColors[Math.round(rating)] || '#ccc';

  return (
    <div className="seller">
      <p className="seller__rating" style={{ borderColor }} title={`Рейтинг продавца: ${rating}`}>
        {rating.toFixed(1)}
      </p>
      <div className="seller-info">
        <p className="seller-info__company">{isCompany ? 'Компания' : 'Частное лицо'}</p>
        <p className="seller-info__name">{name}</p>
      </div>
    </div>
  );
}
