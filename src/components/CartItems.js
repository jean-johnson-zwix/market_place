import React from 'react';
import { Descriptions} from 'antd';

const CartItems = ({cartItems}) => {
    console.log("Cart Items", cartItems);
    var totalPrice=0;
    
    const renderedItemList = cartItems.map((item, index) =>{
        var item_tot_price=item.quantity*item.price;
        totalPrice=totalPrice+item_tot_price;
        return (
            <>
                <Descriptions.Item label="Name">{item.name}</Descriptions.Item>
                <Descriptions.Item label="Quantity">{item.quantity}</Descriptions.Item>
                <Descriptions.Item label="Price">Rs. {item_tot_price}</Descriptions.Item>
            </>
        );
    });
    return (
         <div className="bill">
            {/* <List
                itemLayout="horizontal"
                dataSource={cartItems}
                renderItem = {item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.quantity}
                        />
                    </List.Item>
                )}
            /> */}
            {/* <Table dataSource={dataSource} columns={columns} /> */}
            <Descriptions title="Bill Details">
            {renderedItemList}
            
            </Descriptions>
            <h4 style={{color:'red', fontSize:'2em'}}>Total Bill Amount: Rs. {totalPrice}</h4>
        </div>
        
    )
}

export default CartItems;