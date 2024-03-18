import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index6";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import JobFeatured12 from "../job-featured/JobFeatured12";

const Index22 = () => {
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

      <section className="layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Freiestellen Jobyz</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End sec-title */}

          <div className="tabs-box">
            <JobFeatured12 />
          </div>
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Pricing Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index22;