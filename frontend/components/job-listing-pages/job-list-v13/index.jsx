import FooterDefault from "../../../components/footer/common-footer";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterJobBox from "./FilterJobBox";
import JobSearchForm from "./JobSearchForm";
import MapJobFinder from "../components/MapJobFinder";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="listing-maps style-two">
        <div className="listing-maps">
          <div style={{ height: "670px", width: "100%" }}>
            <MapJobFinder />
          </div>
        </div>
        {/* <!-- Map --> */}

        <div className="form-outer">
          <div className="auto-container">
            <JobSearchForm />
            {/* <!-- Job Search Form --> */}
          </div>
        </div>
      </div>
      {/* <!--End Map with job searchForm --> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <FilterJobBox />
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
