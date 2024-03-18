import Link from "next/link";

const Subscribe2 = () => {
  return (
    <section className="subscribe-section-two -type-4">
      <div
        className="background-image"
        style={{ backgroundImage: "url(/images/index-15/cta-2/bg.png)" }}
      ></div>
      {/* End bg-image */}

      <div className="auto-container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-10" data-aos="fade-right">
            <div className="sec-title light mb-0 pb-20">
              <h2 className="text-white">
                Get Matched The Most Valuable Jobs, Just Drop Your Cv at Jobyz
              </h2>
              <div className="text text-white">
                The template is really nice and offers quite a large set of
                options. It’s beautiful and the coding is done quickly and
                seamlessly. Thank you!
              </div>

              <div className="mt-20">
                <Link
                  href="/candidates-dashboard/cv-manager"
                  className="btn-cv"
                >
                  <i className="icon fa fa-file-upload"></i>
                  Upload Your CV
                </Link>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5 md:mt-30">
            <div className="image" data-aos="fade-left">
              <img src="/images/index-15/cta-2/1.png" alt="image" />
            </div>
          </div>
          {/* End image col */}
        </div>
        {/* End .row */}
      </div>
      {/* End auto-container */}
    </section>
  );
};

export default Subscribe2;
