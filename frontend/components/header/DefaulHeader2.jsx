import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { useTranslation } from "react-i18next";

const DefaulHeader2 = () => {
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
          {/* <!-- Add Listing --> */}
          <Link href="/candidates-dashboard/cv-manager" className="upload-cv">
            { t ("Upload your CV")}
          </Link>
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three call-modal"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              {t("Login / Register")}
            </a>
            <Link
              href="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one"
            >
              { t ("Job Post")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
