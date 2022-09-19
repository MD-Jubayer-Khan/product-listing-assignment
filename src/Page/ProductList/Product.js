import React from 'react';
import cart from './shopping-cart.png'

const Product = ({product}) => {
    const {name, color, stock, price, img} = product;
    return (
        <>
            <tr>
              <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squire ml-2 w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold ml-10">{name}</div>
                    </div>
                  </div>
              </td>
                <td className='text-info font-bold'> <u>{color}</u> </td>
                <th>
                 { stock === 'In stock' ?  <p className='text-success'>{stock}</p> :  <p className='text-error'>{stock}</p>}
                </th>
                <th className='text-[#898989]'>${price}</th>
                <th className='ml-20'>
                  <input className='w-16 border bg-[#f2efef]' type="number" />
                  <button className='w-16 border ml-2 bg-[#eae3e3]'> <img className='w-6 mx-auto' src={cart}  alt=""/>  </button>
                  <label>
                    {stock === 'In stock' ? <input type="checkbox" className="checkbox ml-2" /> : <input type="checkbox" className="checkbox ml-2" disabled/>}
                    
                  </label>
                </th>
              </tr>
        </>
    );
};

export default Product;