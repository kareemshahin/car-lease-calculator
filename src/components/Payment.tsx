import React from 'react';

interface Props {
  payment: number;
}

const Payment: React.FC<Props> = ({payment}) => {
  return (
    <div className="payment">
      <p>Monthly Payment:</p>
      <span id="monthly-payment-total">${payment.toFixed(2)}</span>
    </div>
  );
};

export default Payment;
