import React from 'react';

interface Props {
  payment: number;
}

class Payment extends React.Component<Props, CalcState> {

  render () {
    return (
      <div className="Payment">
        <p>Monthly Payment: ${this.props.payment.toFixed(2)}</p>
      </div>
    );
  }
};

export default Payment;
