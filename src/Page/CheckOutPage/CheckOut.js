import React from 'react';

const CheckOut = ({cart}) => {
    console.log(cart);
    return (
        <div id='checkout'>
            <h1>{cart.name}</h1>
        </div>
    );
};

export default CheckOut;