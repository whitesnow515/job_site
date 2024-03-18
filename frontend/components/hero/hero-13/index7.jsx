import SearchForm6 from "../../common/job-search/SearchForm6";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";
import { useTranslation } from "react-i18next";



const Index = () => {
  const { t } = useTranslation();

  return (
    <section className="banner-section -type-13" style={{ height: "380px", backgroundImage: "url('/images/index-13/header/firmen.png')" }}>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12" style={{ width: "95%" }}>
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h1>
                  {t('Love what you do!')}
                </h1>
                <div className="text">
                  {t('Stöbere durch 102 289 offene Stellen in 11 902 Unternehmen in der ganzen Schweiz.')}
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <SearchForm6 />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}

              {/* <!-- End Bottom Box --> */}
            </div>
          </div>

          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
