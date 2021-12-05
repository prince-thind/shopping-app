import { useState } from "react";
import "../styles/Payment.css";

function Payment() {
  const [paymentVisible, setPaymentVisible] = useState(false);

  return (
    <section>
      <button className="payment-button" onClick={proceedPayment}>
        Proceed to Payment
      </button>
      <PaymentModal
        visible={paymentVisible}
        setPaymentVisible={setPaymentVisible}
      />
    </section>
  );

  function proceedPayment() {
    setPaymentVisible(true);
  }
}

function PaymentModal({ visible, setPaymentVisible }) {
  if (visible)
    return (
      <section className="payment-modal flex-center">
        <div className="payment-main">
          <div className="payment-heading">
            <button
              className="payment-close"
              onClick={() => {
                setPaymentVisible(false);
              }}
            >
              X
            </button>
            <div className="payment-title">Payment</div>
          </div>
          <p>
            Thank you for using This dummy portal, your data has been sent to
            some 'supposed' server for processing! Have a great day valued user!
          </p>
          <button
            className="payment-understood"
            onClick={() => {
              setPaymentVisible(false);
            }}
          >
            Got it!
          </button>
        </div>
      </section>
    );
  else return null;
}

export default Payment;
