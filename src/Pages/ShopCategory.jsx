import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Popup from '../Components/Popup/Popup';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSortOptionClick = (option) => {
    console.log('Sorting by:', option);
    if (option === 'category') {
      setCategories(categories.length > 0 ? [] : [...new Set(all_product.map(product => product.category))]);
    }
    if (option === 'size') {
      setSize(size.length > 0 ? [] : ['XL', 'L', 'M', 'XS', 'S']);
    }
    if (option === 'color') {
      setColor(color.length > 0 ? [] : ['Black', 'Red', 'Blue', 'Brown', 'White']);
    }
  };

  const handleSizeClick = (selected) => {
    setSelectedSize(selected === selectedSize ? null : selected);
  };

  return (
    <div className='shop-category'>
      <Popup />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-12
          </span> out of {all_product.length} Products
        </p>
        {/* <div className="shopcategory-sort">
          <button onClick={() => setSortOptionsVisible(!sortOptionsVisible)}>
            Sort by <img src={dropdown_icon} alt="" />
          </button>
          {sortOptionsVisible && (
            <div className="sort-options">
              <label onClick={() => handleSortOptionClick('category')}>
                Category
              </label>
              {categories.length > 0 && (
                <ul>
                  {categories.map(category => (
                    <li key={category} className="category-item">{category}</li>
                  ))}
                </ul>
              )}
              <label onClick={() => handleSortOptionClick('size')}>
                Size
              </label>
              {size.length > 0 && (
                <ul>
                  {size.map(size => (
                    <li key={size} className={selectedSize === size ? "size-item selected" : "size-item"} onClick={() => handleSizeClick(size)}>{size}</li>
                  ))}
                </ul>
              )}
              <label onClick={() => handleSortOptionClick('color')}>
                Color
              </label>
              {color.length > 0 && (
                <ul>
                  {color.map(color => (
                    <li key={color} className="color-item">{color}</li>
                  ))}
                </ul>
              )}
              <label onClick={() => handleSortOptionClick('new araivals')}>
                New Arrivals
              </label>
              <label onClick={() => handleSortOptionClick('price')}>
                Price
              </label>
              <label onClick={() => handleSortOptionClick('discounts')}>
                Discounts
              </label>
            </div>
          )}
        </div> */}
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if ((props.category === item.category) && (!selectedSize || item.size.includes(selectedSize))) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} color={item.color} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
