import React from 'react';

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
                <th>{price}</th>
                <th>
                  <label>
                    {stock === 'In stock' ? <input type="checkbox" className="checkbox" /> : <input type="checkbox" className="checkbox" disabled/>}
                    
                  </label>
                </th>
              </tr>
        </>
    );
};

export default Product;