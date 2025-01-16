import React, { useState } from 'react';
import { Card, Badge, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import useCart from './hooks/useCart';

const ButtonGroup = Button.Group;

const Item = ({item, updateCart}) => {

    const[available, setAvailable] = useState(item.quantity);
    

    //CUSTOM HOOK
    // const[cartItems, addToCart] = useCart([]);

    const handleMinusClick = (quantity) => {
        if(quantity<item.quantity){
            setAvailable(quantity+1);
            const selectedItem = {name: item.name, price: item.price, quantity: 1};
            console.log("selected: ",selectedItem);
            updateCart(selectedItem, "remove");
        }
    }
    const handlePlusClick = (quantity) => {
        if(quantity>0){
            setAvailable(quantity-1);
            const selectedItem = {name: item.name, price: item.price, quantity: 1};
            console.log("selected: ",selectedItem);
            updateCart(selectedItem, "add");
        }
    }

    return (
        <Card title={item.name} bordered={false} style={{ width: 300, margin: '5px' }}>
            <p>CATEGORY: {item.category}</p>
            <p>SELLER: {item.seller}</p>
            <p>Rs. {item.price}</p>
            <Badge count={available} />
            <br/><br/>
            <ButtonGroup>
                <Button onClick={() => handleMinusClick(available)}>
                    <MinusOutlined/>
                </Button>
                <Button onClick={() => handlePlusClick(available)}>
                    <PlusOutlined/>
                </Button>
            </ButtonGroup>
        </Card>
    );
};

export default Item;