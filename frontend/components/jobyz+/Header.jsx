import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import HeaderLanContent from "../header/HeaderLanContent";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [navbar, setNavbar] = useState(false);

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

  return (
    // <!-- Main Header-->
    <header
      className={`main-header -type-11  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
      style={{display: `${navbar ? "none" : ""}`}}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo+.svg" alt="jobyz.ch" />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          <HeaderLanContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three btn-white-10 call-modal"
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

export default Header;

