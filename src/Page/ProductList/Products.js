import React, { useEffect, useState } from 'react';
import Product from './Product';
import resetArrow from './undo-arrow.png'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])

    return (
        <div className="overflow-x-auto w-full mt-12">
          <div className='flex place-content-between'>
          <div className='flex'>
          <select className="select select-bordered w-32 ml-12 mb-4">
               <option >category</option>{products.map(p => <option key={p.id}>- {p.category}</option>)} 
          </select>
          <div className='flex ml-3'>
          <img className='h-[18px] mt-2.5 ml-4' src={resetArrow} alt="" /> 
           <p className='text-xl font-bold mt-1.5 ml-2 text-info'>Reset</p>
          </div>

          </div>

            <div className='flex'>
            <div className="form-control mr-12">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-info mr-12'>ADD To Cart</button>
            </div>
          </div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead className='h-'>
              <tr className=''>
                <th className='flex'>
                <p className='mx-4'>Image</p>
                <p className='ml-12'>Name</p>  
                </th>

                <th>color</th>
                <th>Stock</th> 
                <th>price</th>
                <th>Buy</th>

              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {

                products.map(product => <Product key={product.id} product={product}></Product>)
              }

            </tbody>  
          </table>
        </div>
    );
};

export default Products;