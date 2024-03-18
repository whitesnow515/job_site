import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index7";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import Blog from "../blog/Blog2";


const Index29 = () => {
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

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Finde deine Firma</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index29;