const StepsBlock = () => {
  return (
    <section className="steps-section layout-pt-60 layout-pb-60">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <img src="/images/index-11/text/image-1.png" alt="about" />
              </figure>
            </div>
          </div>
          {/* End .image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title -type-2">
                <h2>
                  Find Jobs with 3 easy
                  <br /> steps
                </h2>
                <div className="text">
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt. Labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation.
                </div>
                <ul className="steps-list">
                  <li>
                    <span className="count">01</span> Register an account to
                    start
                  </li>
                  <li>
                    <span className="count">02</span> Explore over thousands of
                    resumes
                  </li>
                  <li>
                    <span className="count">03</span> Find the most suitable
                    candidate
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
        </div>
      </div>
    </section>
  );
};

export default StepsBlock;
