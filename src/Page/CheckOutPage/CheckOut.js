import React from 'react';

const CheckOut = ({cart}) => {
    console.log(cart);
    return (
        <div className='flex justify-center mb-12'>   
            <div className='w-7/12 bg-primary'>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead className='h-'>
                  <tr className=''>
                    <th className='flex'>
                    <p className='mx-4'>product</p> 
                    </th>
                    <th>Price</th> 
                    <th>Quantity</th>
                    <th>Subtotal</th>
          
                  </tr>
                </thead>
               
                <tbody>
                  {/* <!-- row 1 --> */}
                  {
       
                  }
      
                </tbody>  
              </table> 

            </div>
            <div className='bg-secondary w-3/12 ml-12'>summery</div>
        </div>
    );
};

export default CheckOut;