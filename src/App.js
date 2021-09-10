import React from 'react'
import Products from './components/Products';
import products from "./datat.json"

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: data.products, 
//             size: "",
//             sort: "",
//         }
//     }

//     render() {
//         return (
//            <div className='grid-container'>
//               <header>
//                 <a href="http://">React Shopping Cart</a>
//                 </header>
//                 <main>
//                     <div className="content">
//                         <div className="main">
//                             <Products products={this.state.products} />
//                         </div>
//                         <div className="sidebar">
//                             Cart Items
//                         </div>
//                     </div>
//                 </main>
//                <footer>All Rights Reserved</footer>
//             </div>
//         )
//     }

// }



const App = () => {
  return (
    <div className='grid-container'>
        <header>
            <a href="http:/">React Shopping Cart</a>
          </header>
          <main>
              <div className="content">
                  <div className="main">
                      <Products {...products} />
                      {/* {data.products.map((product) => {
                          return (
                              <Products key={product.id} {...product} />
                          )
                      })} */}
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
