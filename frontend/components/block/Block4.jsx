import Link from "next/link";

const Block4 = () => {
  return (
    <section className="jobseeker-section">
      <div className="outer-box">
        <div className="image-column">
          <figure className="image">
            <img
              src="/images/resource/jobseeker.png"
              alt="resources about block"
            />
          </figure>
        </div>
        {/* End imag-column */}

        <div className="content-column">
          <div className="inner-column wow fadeInUp">
            <div className="sec-title">
              <h2>I am Jobseeker</h2>
              <div className="text">
                One of our One of our jobs has some kind of flexibility jobs has
                some kind of flexibility option such as telecommuting, a
                part-time schedule or a flexible or flextime.
              </div>
              <Link href="/job-list/job-list-v4" className="theme-btn btn-style-one">
                Browse Job
              </Link>
            </div>
          </div>
        </div>
        {/* End .content-column */}
      </div>
    </section>
  );
};

export default Block4;
