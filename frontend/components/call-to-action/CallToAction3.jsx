import Link from "next/link";

const CallToAction3 = () => {
  return (
    <section className="call-to-action-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title">
            <h2>Let employers find you</h2>
            <div className="text">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database.
            </div>
          </div>
          {/* End sec title */}

          <div className="btn-box">
            <Link
              href="/job-list/job-list-v7"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Search Job</span>
            </Link>
          </div>
          {/* End btn-box */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction3;
