import {useState, useEffect } from 'react';
import ItemDisplay from '../ItemDisplay';

const useCart = (selectedItem) => {

    const [cartItems, setCartItems ] = useState([]);

    useEffect( () => {
        //addToCart(selectedItem);
    }, [cartItems]);

    const addToCart = () => {
        console.log("selected: ", selectedItem);
        setCartItems(...cartItems,selectedItem);
    }

    return [cartItems, addToCart];
};

export default useCart;