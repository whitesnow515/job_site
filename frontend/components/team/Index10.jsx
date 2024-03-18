import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index3";
import TeamOne from "../team/TeamOne";
import Header from "./Header";
import { useTranslation } from "react-i18next";



const index10 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      {/*<Header headerStyle="" />*/}
      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero13 />
      {/* End Hero Section */}

      {/* Start Team Area  */}
      <div className="rn-team-wrapper ptb--120 bg_color--1">
        <div className="rn-team-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h1>Our Skilled Team</h1>
                  <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
              </div>
            </div>
            <TeamOne column="col-lg-4" teamStyle="" item="4" />
          </div>
        </div>
      </div>
      {/* End Team Area  */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index10;