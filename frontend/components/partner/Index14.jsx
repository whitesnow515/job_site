import Block10 from "../block/Block10";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index5";
import Header from "./Header";
import { useTranslation } from "react-i18next";


const Index14 = () => {
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

      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2> {t("Was Ist Jobyz+ ?")} </h2>
                <div className="text">
                Mit einem Konto finden wir dir eine passende Stelle!
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base" data-aos="fade-up">
            <Block10 />
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      {/* <!-- End About Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index14;