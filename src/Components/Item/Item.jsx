import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name, new_price, old_price,category,color}) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt="" />
      </Link> 
      <p>{name}</p>
      
      <div className="item-prices">
        <div className="item-price-new">
            ${new_price}
        </div>
        <div className="item-price-old">
            ${old_price}
        </div>
        <div className="item-category">
            {category}
        </div>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default Item;
