import React, { useState } from 'react';
import './Filters.css';

export default function Filters({ filter, setFilter }) {
  const [localFilter, setLocalFilter] = useState(filter);

  const fixPriceValues = filter => {
    if (filter.minPrice === '' || filter.maxPrice === '') {
      return filter;
    }

    if (filter.minPrice > filter.maxPrice) {
      filter = { ...filter, minPrice: filter.maxPrice, maxPrice: filter.minPrice };
      setLocalFilter(filter);
      return filter;
    }

    return filter;
  };

  const handleChange = e => {
    let { name, value, type } = e.target;

    if (type === 'number') {
      value = +value || '';
      if (value < 0) value = '';
    }

    const newFilter = { ...localFilter, [name]: value };

    setLocalFilter(oldVal => ({ ...oldVal, [name]: value }));
    if (type === 'select-one') {
      setFilter(newFilter);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilter(fixPriceValues(localFilter));
  };

  const handleBlur = e => {
    setFilter(fixPriceValues(localFilter));
  };

  const handleKeyPress = e => {
    const key = e.key;

    if (key === 'Enter') e.target.blur();
    else if (isNaN(key)) e.preventDefault();
  };

  const { category, minPrice, maxPrice, order } = localFilter;
  return (
    <form onSubmit={handleSubmit} className="filters">
      <div className="filter-group">
        <label>
          <p className="input-label">Категория</p>
          <select className="filter-input" name="category" onChange={handleChange} value={category}>
            <option value="any">Любая категория</option>
            <option value="immovable">Недвижимость</option>
            <option value="cameras">Фотоаппараты</option>
            <option value="auto">Автомобили</option>
            <option value="laptops">Ноутбуки</option>
          </select>
        </label>
      </div>

      <div className="filter-group">
        <label>
          <p className="input-label">Цена, мин.</p>
          <input
            className="filter-input filter-input--min-price"
            type="number"
            name="minPrice"
            placeholder="От"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            value={minPrice || ' '}
            min="0"
          />
        </label>
        <label>
          <p className="input-label">Цена, макс.</p>
          <input
            className="filter-input filter-input--max-price"
            type="number"
            name="maxPrice"
            placeholder="До"
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            value={maxPrice || ' '}
            min="0"
          />
        </label>
      </div>

      <div className="filter-group filter__order">
        <label>
          <p className="input-label">Сортировка</p>
          <select className="filter-input" name="order" onChange={handleChange} value={order}>
            <option value="rating">По популярности</option>
            <option value="price">По возрастанию цены</option>
          </select>
        </label>
      </div>
    </form>
  );
}
