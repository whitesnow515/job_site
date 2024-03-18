import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index9";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import About6 from "../about/About6"
import About7 from "../about/About7"
import About8 from "../about/About8"
import About9 from "../about/About9";




const Index16 = () => {
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
      <About6 />

      <About7 />

      <About8 />

      <About9 />

      {/* <!-- End Job Categories --> */}



      {/* Start Service Area */}
      <section
        className="banner-section-three -type-17"
      >
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div
                  className="title-box"
                  data-wow-delay="500"
                  data-aos="fade-up"
                >
                  <h3>
                    Join us & Explore
                    <br /> Thousands of Jobs
                  </h3>
                  <div className="text">
                    Find Jobs, Employment & Career Opportunities
                  </div>
                </div>
                {/* End title-box */}

                <div
                  className="job-search-form"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                </div>
                {/* <!-- Job Search Form --> */}

                {/* <!-- End Popular Search --> */}
              </div>
            </div>
            {/* End .col */}

            <div className="image-column col-lg-5 col-md-12">
              <div className="image-box">
                <figure
                  className="main-image"
                  data-aos="fade-left"
                  data-aos-delay="1500"
                >
                </figure>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End row align-items-center */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End About Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index16;