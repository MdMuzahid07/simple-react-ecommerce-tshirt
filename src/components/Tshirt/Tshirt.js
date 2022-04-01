import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {

    const {name, image, price, id} = props.tshirt

    return (
        <div className='t-shirt'>
            <img src={image} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Tshirt;