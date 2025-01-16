import React, { useState} from 'react';
import {  Row, Col} from 'antd';

import Item from './Item';
import CartItems from './CartItems';

const ItemDisplay = ({items}) => {

    const[cartItems, setCartItems] = useState([]);
    const[cartUpdate, setcartUpdate] = useState(1);
    const updateCart = (item, operation) =>{
        console.log(item, operation);
        if(cartItems.length!==0){
            var duplicate=false;
            cartItems.forEach((value, index)=>{
                if(value.name===item.name){
                    console.log(value.name);
                    duplicate=true;
                    (operation==="add")?value.quantity=value.quantity+item.quantity:value.quantity=value.quantity-item.quantity;
                    if(operation==="remove"&&value.quantity<1){
                        cartItems.splice(index,index+1);
                    }  
                }
            });
        }
        if(!duplicate){
            cartItems.push(item);
        }
        
        console.log("cart: ",cartItems);
        setCartItems(cartItems);
        setcartUpdate(cartUpdate+1);
    }
    const renderedItemList = items.map((item, index) =>{
        return (
            <div 
                className="site-card-border-less-wrapper"
                key={item.name}>
                <Col className="gutter-row" span={6}>
                        <Item item={item} updateCart ={updateCart} />
                </Col>
          </div>
        );
    });
    return (
        <div >
            <Row gutter={16}>
                {renderedItemList}
            </Row>
            <h1>CART</h1>
            <CartItems cartItems={cartItems}/>
        </div>   
     );
};

export default ItemDisplay;