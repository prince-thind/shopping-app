import CartItem from '../components/CartItem.js';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart(props) {
  const totalValue = findTotal(props.items);

  return (
    <div className="cart-content">
      <CartCapacityLogic />
    </div>
  );

  function CartCapacityLogic() {
    if (totalValue === 0) {
      return (
        <div className='empty-cart'>
          Cart is empty, Consider adding items from <Link to="/shop">shop</Link>{' '}
        </div>
      );
    }
    return (
      <React.Fragment>
        <h2 className='cart-item-heading'>Cart Items </h2>
        <Items />
        <div className='cart-total'> Cart Total: {props.items[1].currency}{totalValue}</div>
        <button className='payment-button' onClick={proceedPayment}>Proceed to Payment</button>
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
  function proceedPayment(items){
    console.log('redirected to payment portal');
  }
}

export default Cart;
