import React from 'react';
import './Breadcrum.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  // if (!product || !product.category || !product.name) {
  //   return <div>No valid product data to display breadcrumb</div>;
  // }
  return (
    <div className='breadcrum'>
      HOME <img src={arrowIcon} alt="arrow" /> SHOP <img src={arrowIcon} alt="arrow" />{product.category} <img src={arrowIcon} alt="arrow" /> {product.name} 
    </div>
  )
}
export default Breadcrum;
