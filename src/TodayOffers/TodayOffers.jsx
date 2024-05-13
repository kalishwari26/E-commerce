import React from 'react';
import './TodayOffers.css';
import { Link } from 'react-router-dom';

const TodayOffers = ({ id, image, name, new_price, old_price ,offer}) => {
  return (
    <div className='todayoffers'>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link> 
      <p>{name}</p>
      <div className="todayoffers-prices">
        <div className="todayoffers-price-new">
            ${new_price}
        </div>
        <div className="todayoffers-price-old">
            ${old_price}
        </div>
        <div className="todayoffers-offers">
            {offer}% Offer
        </div>
      </div>
    </div>
  );
};

export default TodayOffers;

