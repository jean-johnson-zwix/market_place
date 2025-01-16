import './App.css';
import React from 'react';
import { Layout, Menu} from 'antd';
import ItemDisplay from './components/ItemDisplay'

const { Header, Content, Footer } = Layout;
const items = [
    {
        name: 'boAt Bluetooth Neckbandd Earphone',
        category: 'electronics',
        price: 1299,
        seller: 'Appario Retail Private Ltd',
        quantity: 2
    },
    {
        name: 'Wipro Wi-Fi Enabled Smart LED Buld',
        category: 'electronics',
        price: 1599,
        seller: 'Cloudtail India',
        quantity: 6
    },
    {
        name: 'Armani Mens Watch',
        category: 'accessories',
        price: 13495,
        seller: 'Cambium Retail',
        quantity: 1
    },
    {
      name: 'TP-Link Wifi Extender',
      category: 'electronics',
      price: 1889,
      seller: 'Amazon',
      quantity: 3
  },
  {
    name: 'NexiGo StreamCam',
    category: 'electronics',
    price: 3500,
    seller: 'NexiPC',
    quantity: 2
}
];

const App = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Buy</Menu.Item>
              <Menu.Item key="2">Sell</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <h1>ON SALE NOW!!</h1>
            <ItemDisplay items={items}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
};

export default App;