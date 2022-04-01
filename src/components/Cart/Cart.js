import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
// conditional rendering options

// 1. Element variable
// 2. ternary operator condition ? true : false
// 3. && operator (shorthand)
// 4. || 

    let command;

    if(cart.length === 0) {
        command = <p>Please add at least one item</p>
    }
    else if (cart.length === 1){
        command = <p>please add more</p>
    }
    else {
        command = <p><small>Thanks for adding</small></p>
    };

    // option one end here


    return (
        <div className=''>
            <h1>selected items: {cart.length}</h1>

            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </p>)
            }
            



            {cart.length === 0 || <p>YAY! You are buying</p>}


            {cart.length === 3 && <div>
                    <h1>Trigonal</h1>
                </div>}


            {command} 

            {cart.length !==4 ? <p>Keep adding</p> : <button>Remove all</button>}
        </div>
    );
};

export default Cart;