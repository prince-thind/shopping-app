import CartItem from './CartItem.js';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <h2 className='cart-items-heading'>Items in Cart: </h2>
        <Items />
        <div className='cart-total'> Cart Total: {totalValue}</div>
        <button onClick={proceedPayment}>Proceed to Payment</button>
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
