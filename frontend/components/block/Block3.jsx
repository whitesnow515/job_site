import Link from "next/link";

const Block3 = () => {
  return (
    <section className="recruiter-section">
      <div className="outer-box">
        <div className="image-column">
          <figure className="image">
            <img src="/images/resource/recruiter.png" alt="resource about" />
          </figure>
        </div>
        {/* End image-column */}

        <div className="content-column">
          <div className="inner-column" data-aos="fade-up">
            <div className="sec-title">
              <h2>I am Recruiter</h2>
              <div className="text">
                One of our One of our jobs has some kind of flexibility jobs has
                some kind of flexibility option such as telecommuting, a
                part-time schedule or a flexible or flextime.
              </div>
              <Link href="/login" className="theme-btn btn-style-one">
                Post New Job
              </Link>
            </div>
          </div>
        </div>
        {/* End .content-column */}
      </div>
    </section>
  );
};

export default Block3;
