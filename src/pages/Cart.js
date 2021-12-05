import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Cart.css';
import CartItem from '../components/CartItem.js';
import Payment from '../components/Payment.js';

function Cart(props) {
  const totalValue = findTotal(props.items);

  return (
    <div className="cart-content">
      <CartCapacityLogic totalValue={totalValue}/>
    </div>
  );

  function CartCapacityLogic({totalValue}) {
    if (totalValue === 0) {
      return (
        <div className='empty-cart'>
          Cart is empty, Consider adding items from <Link to="/shop">shop</Link>.{' '}
        </div>
      );
    }
    return (
      <React.Fragment>
        <h2 className='material-box'>Cart Items </h2>
        <Items />
        <div className='cart-total material-box'> Cart Total: {props.items[1].currency}{totalValue}</div>
        <Payment />
      </React.Fragment>
    );
  }
  function Items() {
    return (
      <div className='cart-items'>
        {props.items
          .filter((item) => item.count > 0)
          .map((item) => {
            return <CartItem key={item.key} item={item} cartSub={props.cartSub} />;
          })}
      </div>
    );
  }

  function findTotal(items) {
    return items.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

}

export default Cart;
