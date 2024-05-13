import React from 'react'
import './Discount.css'
import offers_product from '../Assets/offers'
import TodayOffers from '../../TodayOffers/TodayOffers'


const Discount = () => {
  return (
    <div className='discount'>
       <h1>DISCOUNT AND OFFERS</h1>
      <hr />
      <div className="discount-item">
      {offers_product.map((todayoffers, i) => {
    return <TodayOffers 
                key={i} 
                id={todayoffers.id} 
                name={todayoffers.name} 
                image={todayoffers.image} 
                new_price={todayoffers.new_price} 
                old_price={todayoffers.old_price} 
                offer={todayoffers.offer}
                category={todayoffers.category || ''} 
            />
})}

      </div>
      
    </div>
  )
}

export default Discount
