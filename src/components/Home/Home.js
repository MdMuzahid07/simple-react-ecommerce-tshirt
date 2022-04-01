import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

    const [tshirts, setTshirt] = useTshirt();
    const [cart, setCart] = useState([]);


    // handle cart 
    const handleAddToCart = (selectedItem) => {

        const exists = cart.find(tShirt => tShirt.id === selectedItem.id);

        if(!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert("Item Added");
        }

        
    };

    // handle remove from cart

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt.id !== selectedItem.id);
        setCart(rest);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map((tshirt) => <Tshirt
                     key = {tshirt.id}
                      tshirt = {tshirt}
                      handleAddToCart = {handleAddToCart}
                      ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;