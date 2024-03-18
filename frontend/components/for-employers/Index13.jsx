import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index4";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import Pricing from "../pricing/Pricing";
import Pricing5 from "../pricing/Pricing5";

const Index2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero13 />
      {/* End Hero Section */}

      {/* <!-- End About Section --> */}

      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Unsere Angebote</h2>
            <div className="text">
            Finden Sie bei Jobyz das Insertionsangebot, welches zu Ihren Bedürfnissen passt.
            </div>
          </div>
          {/* End title */}
          <Pricing />
          {/* End .{/* <!--Pricing Tabs--> */}
        </div>
      </section>

      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Unsere Angebote</h2>
            <div className="text">
            Finden Sie bei Jobyz das Insertionsangebot, welches zu Ihren Bedürfnissen passt.
            </div>
          </div>
          {/* End title */}
          <Pricing5 />
          {/* End .{/* <!--Pricing Tabs--> */}
        </div>
      </section>

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index2;