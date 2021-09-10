import React from 'react'
import formatCurrency from '../utils';

const Products = ({products}) => {
  return (
    <div>
          <ul className="products">
              {products.map((product) => {
                  const { id, title, image, description, price } = product;
                  return (
                  <li key={id}>
                      <div className="product">
                          <a href={`# ${id}`}>
                              <img src={image} alt={title} />
                              <p>{title}</p>
                          </a>
                          <div className="product-price">
                              <div>{formatCurrency(price)}</div>
                              <button className="button primary">Add To Cart</button>
                          </div>
                      </div>
                      </li>
                  )
              })}
              {/* <li>
                  <div className='product'>
                      <a href={`# ${id}`}>
                          <img src={image} alt={title} />
                          <p>{title}</p>
                      </a>
                      <div className="product-price">
                          <div>
                              {price}
                          </div>
                          <button className='button primary'>Add To Cart</button>
                      </div>
                 </div>
          </li> */}
      </ul>
    </div>
  )
}

export default Products



// import React, { Component } from 'react'

// export default class Products extends Component {
//     render() {
//         return (
//             <div>
//                 <ul className='products'>
//                     {this.props.products.map(product => {
//                         return (
//                             <li key={product.id}>
//                              <div className="products">
//                                 <a href={`# ${product.id}`}>
//                                     <img src={product.image} alt={product.title} />
//                                      <p>{product.title}</p>
//                                 </a>
//                                 <div className="product-price">
//                                     <div>
//                                         {product.price}
//                                     </div>
//                                     <button className="button primary">Add To Cart</button>
//                                 </div>
//                               </div>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
