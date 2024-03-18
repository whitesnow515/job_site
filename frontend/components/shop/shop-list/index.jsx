import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import ShopHeader from "../../header/ShopHeader";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../common/Breadcrumb";
import ShopItems from "./components/ShopItems";
import Pagination from "./components/Pagination";

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

      <Breadcrumb title="Shop" meta="Shop" />
      {/* <!--End Page Title--> */}

      <div className="products-section">
        <div className="auto-container">
          <div className="row">
            <ShopItems />
          </div>
          {/* End .row */}

          <Pagination />
          {/* End .pagination */}
        </div>
        {/* End auto-container */}
      </div>
      {/* <!-- End Product Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
