const TableInvoice = () => {
  return (
    <table className="default-table invoice-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>VAT (20%)</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Standard Plan</td>
          <td>$443.00 </td>
          <td>$921.80</td>
          <td>$9243</td>
        </tr>
        <tr>
          <td>Extra Plan</td>
          <td>$413.00 </td>
          <td>$912.80 </td>
          <td>$5943</td>
        </tr>
        <tr>
          <td>
            <strong>Total Due</strong>
          </td>
          <td></td>
          <td></td>
          <td>
            <strong>$9,750</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInvoice;
