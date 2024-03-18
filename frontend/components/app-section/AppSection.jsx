const AppSection = () => {
  return (
    <div className="row">
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="bg-shape"></div>
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/mobile-app.png" alt="mobile app" />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <span className="sub-title">DOWNLOAD & ENJOY</span>
            <h2>
              Get the Jobyz Job
              <br /> Search App
            </h2>
            <div className="text">
              Search through millions of jobs and find the right fit. Simply
              <br /> swipe right to apply.
            </div>
          </div>
          <div className="download-btn">
            <a href="#">
              <img src="/images/icons/apple.png" alt="icon" />
            </a>
            <a href="#">
              <img src="/images/icons/google.png" alt="icon" />
            </a>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSection;
