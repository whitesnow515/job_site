const LoginRegBanner = () => {
  return (
    <section
      className="cta -type-2"
      style={{ backgroundImage: "url(/images/index-16/cta-2/bg.png)" }}
    >
      <div className="auto-container">
        <div className="row grid-base justify-content-between">
          <div className="col-lg-5 col-md-6">
            <div className="cta-item">
              <div className="icon-wrap">
                <div className="icon icon-case"></div>
              </div>
              {/* End icon-wrap */}

              <div className="content">
                <div className="title">I&apos;m an Employer</div>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry but also the leap into electronic
                  typesetting
                </div>
              </div>
              {/* End content */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5 col-md-6">
            <div className="cta-item -blue">
              <div className="content">
                <div className="title">I&apos;m an Candidates</div>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry but also the leap into electronic
                  typesetting
                </div>
              </div>
              {/* End .content */}

              <div className="icon-wrap">
                <div className="icon icon-contact"></div>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default LoginRegBanner;
