import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import products from "./data.json"
import Filter from './components/filter';


const App = () => {
    const [product, setProduct] = useState(products.products)
    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')

    const count = product.length

    const filterProducts = (e) => {

        const productSize = products.products.filter(product => product.availableSizes.includes(e.target.value)
        )
   
        setSize(e.target.value)
        setProduct(productSize)
        console.log(product, e.target.value)
    }

     const sortProducts = (e) => {
        let event = e.target.value;
        setSort(event)
        const sortValue = product.slice().sort((a, b) => (
            sort === "lowest" ?
                 ((a.price < b.price) ? 1 : -1) :
            sort === "highest" ?
                ((a.price > b.price) ? 1 : -1) :
                ((a._id > b._id)? 1: -1)            
        ))
         setProduct(sortValue)
    }


  return (
    <div className='grid-container'>
        <header>
            <a href="http:/">React Shopping Cart</a>
          </header>
          <main>
              <div className="content">
                  <div className="main">
                      <Filter size={size} sort={sort} count={count} filterProducts={filterProducts} sortProducts={sortProducts} />
                      <Products product={product} />
                  </div>
                  <div className="sidebar">
                      CartItems
                  </div>
              </div>
          </main>
        <footer>All Rights Reserved</footer>
    </div>
  )
}

export default App;
