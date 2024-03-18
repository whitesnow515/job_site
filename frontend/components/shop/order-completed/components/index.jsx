import OrderInfo from "./OrderInfo";
import OrderTable from "./OrderTable";

const index = () => {
  return (
    <>
      <div className="upper-box">
        <span className="icon fa fa-check"></span>
        <h4>Your order is completed!</h4>
        <div className="text">Thank you. Your order has been received.</div>
      </div>
      {/* End upper-box */}

      <OrderInfo />
      {/* <!--Order Box--> */}

      <div className="order-box">
        <h3>Order details</h3>
        <OrderTable />
      </div>

      {/* <!--End Order Box--> */}
    </>
  );
};

export default index;
