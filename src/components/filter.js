import React, { useState } from 'react';

const Filter = ({ count, sort, size, sortProducts, filterProducts }) => {
  
  return (
    <div className='filter'>
          <div className="filter-result">{count} Products</div>
          <div className="filter-sort">Order {''}
              <select value={sort} onChange={sortProducts} name="" id="">
                  <option>Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
              </select>
          </div>
          <div className="filter-size">Filter {''}
            <select value={size} onChange={filterProducts} name="" id="">
                  <option value='All'>All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
            </select>
          </div>
    </div>
  )
}

export default Filter
