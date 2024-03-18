import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import CartTable from "./components/CartTable";
import Coupon from "./components/Coupon";
import CartTotal from "./components/CartTotal";
import ShopHeader from "../../header/ShopHeader";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <ShopHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Cart" meta="Cart" />
      {/* <!--End Page Title--> */}

      {/* <!--Cart Section--> */}
      <section className="cart-section">
        <div className="auto-container">
          <div className="row">
            <div className="column col-lg-8 col-md-12 col-sm-12">
              {/* <!--Cart Outer--> */}
              <div className="cart-outer">
                <div className="table-outer">
                  <CartTable />
                </div>
                {/* End table-outer */}

                <div className="cart-options clearfix">
                  <Coupon />
                </div>
                {/* End coupon */}
              </div>
              {/* End .cart-outer */}
            </div>
            {/* End .col-lg-8 */}

            <div className="column col-lg-4 col-md-12 col-sm-12">
              <CartTotal />
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* <!--End Cart Section--> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
