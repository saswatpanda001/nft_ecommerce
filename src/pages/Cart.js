import React from 'react';
import { Rate } from 'antd';
import "./Product.css";
import Header from '../components/Header';
import { useLocation } from 'react-router';
import Purchase from '../components/Purchase';
const Cart = () => {
  
//   let {state: book} = useLocation();
//   console.log(book)

  return (

  <div className="container">
    <Header />
    <h1> CART PAGE</h1>

    <div className="product-content">
      
    </div>

  </div>
  
)
}

export default Cart;

