import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { useDispatch, useSelector } from "react-redux";
import { reloadCart } from "../../features/shop/shopSlice";
import { useTranslation } from "react-i18next";


const ShopHeader = () => {
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.shop) || {};
  const [navbar, setNavbar] = useState(false);

  const dispatch = useDispatch();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  // re-load cart
  useEffect(() => {
    dispatch(reloadCart());
  }, [dispatch, reloadCart]);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.svg" alt="brand" />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <Link href="/shop/cart">
            <button className="menu-btn me-3">
              <span className="count">{cart?.length}</span>
              <span className="icon flaticon-shopping-cart" />
            </button>
          </Link>
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-one"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              {t("Login / Register")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
