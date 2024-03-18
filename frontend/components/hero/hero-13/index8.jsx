import ImageBox from "./ImageBox";
import { useTranslation } from "react-i18next";

const Index = () => {
const { t } = useTranslation();

  return (
    <section className="banner-section -type-13" style={{height: "380px", backgroundImage: "url('/images/index-13/header/firmen.png')"}}>
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
                
                </h1>
                <div className="text">

                </div>
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
