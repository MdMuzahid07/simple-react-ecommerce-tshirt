import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {

    const {handleAddToCart, tshirt} = props;

    const {name, image, price, id} = tshirt;

    return (
        <div className='t-shirt'>
            <img src={image} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;