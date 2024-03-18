import AppSection3 from "../app-section/AppSection3";
import Block6 from "../block/Block6";
import Blog from "../blog/Blog";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/Index";
import JobFeatured13 from "../job-featured/JobFeatured13";
import TopCompany from "../top-company/TopCompany4";
import Header from "./Header";
import { useTranslation } from "react-i18next";


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

      <AppSection3 />

      <section className="job-section-four alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFeatured13 />
          </div>

          <button style={{ height: "50px", width: "330px", borderRadius: "500px", border: "1px solid #1967D2", marginLeft: "469px" }}>
            Alle Job-Empfehlungen anzeigen
          </button>
          {/* End .row */}

          <div className="btn-box">
          </div>
        </div>
      </section>

      <section className="ayout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h44 className="color-blue-dark fw-700">
                  Top Company Registered
                </h44>
                <div className="text">
                  Some of the companies we have helped recruit excellent
                  applicants over the years.
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <a href="#" className="button -arrow text-dark-blue">
                Browse
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="carousel-outer pt-50" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}


      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2> {t("Vereinfache deine Jobsuche")} </h2>
                <div className="text">
                  Mit einem Konto findest du noch schneller den passenden Job
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base" data-aos="fade-up">
            <Block6 />
          </div>

          <button style={{ height: "50px", width: "330px", borderRadius: "500px", border: "1px solid #1967D2", marginLeft: "469px" }}>
            Konto erstellen
          </button>

          <div className="text" style={{marginLeft: "445px"}}>
            Mit einem Konto findest du noch schneller den passenden Job
          </div>
        </div>
      </section>
      {/* <!-- End Work Section --> */}

      {/* <!-- End About Section --> */}



      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
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

      {/* <!-- End Registeration Banners --> */}

      {/* <!-- End App Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index2;