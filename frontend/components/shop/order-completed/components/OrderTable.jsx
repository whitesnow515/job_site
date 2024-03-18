const OrderTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <strong>Product</strong>
          </th>
          <th>
            <strong>Subtotal</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="cart-item">
          <td className="product-name">Hoodie x2</td>
          <td className="product-total">59.00</td>
        </tr>

        <tr className="cart-item">
          <td className="product-name">Seo Books x 1</td>
          <td className="product-total">67.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="cart-subtotal">
          <td>Subtotal</td>
          <td>
            <span className="amount">$178.00</span>
          </td>
        </tr>
        <tr className="cart-subtotal">
          <td>Shipping</td>
          <td>
            <span className="amount">$178.00</span>
          </td>
        </tr>
        <tr className="order-total">
          <td>Total</td>
          <td>
            <span className="amount">$9,218.00</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderTable;
