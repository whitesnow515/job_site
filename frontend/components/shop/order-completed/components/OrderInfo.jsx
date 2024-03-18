const OrderInfo = () => {
  return (
    <ul className="order-info">
      <li>
        <span>Order Number</span>
        <strong>13119</strong>
      </li>

      <li>
        <span>Date</span>
        <strong>27/07/2021</strong>
      </li>

      <li>
        <span>Total</span>
        <strong>$40.10</strong>
      </li>

      <li>
        <span>Payment Method</span>
        <strong>Direct Bank Transfer</strong>
      </li>
    </ul>
  );
};

export default OrderInfo;
