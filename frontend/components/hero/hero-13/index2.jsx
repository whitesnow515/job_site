import SearchForm from "../../common/job-search/SearchForm3";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Index = () => {
const { t } = useTranslation();

  return (
    <section className="banner-section -type-13" style={{height: "380px", backgroundImage: "url('/images/index-13/header/jobyz+.png')"}}>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12" style={{width: "95%"}}>
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h1>
                Jobyz+ - Mitarbeiter direkt zu ihnen!
                </h1>
                <div className="text">
                  {t('Stöbere durch 102 289 offene Kanidaten in 11 902 Bereichen in der ganzen Schweiz.')}
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}

              <div className="bottom-box wow fadeInUp" data-wow-delay="1500ms">
                <div className="count-employers">
                  <span className="title">{t('10k+ Candidates')}</span>
                </div>
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="upload-cv"
                >
                  <span className="icon flaticon-file"></span> {t('Upload your CV')}
                </Link>
              </div>
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
