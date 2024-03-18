import Link from "next/link";

const CallToAction9 = () => {
  return (
    <section
      className="call-to-action-two overlay-black-60"
      style={{ backgroundImage: "url(/images/index-15/cta/bg.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="row grid-base justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-title light text-center">
              <h2>Make Recruiting Your Competitive Advantage</h2>
              <div className="text">
                Jobyz offers a way to completely optimize your entire
                recruiting process. Find better candidates, conduct more focused
                interviews, and make data-driven hiring decisions.
              </div>
            </div>
            {/* End sec-title */}

            <div className="btn-box">
              <Link href="/register" className="theme-btn btn-white-type-2">
                GET STARTED
              </Link>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction9;
