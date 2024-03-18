import Link from "next/link";

const CallToAction10 = () => {
  return (
    <section
      className="call-to-action-two -type-4"
      style={{ backgroundImage: "url(/images/index-16/cta/bg.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Your Dream Jobs Are Waiting</h2>
          <div className="text">
            Over 1 million interactions, 50,000 success stories Make yours now.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list/job-list-v6" className="theme-btn btn-one">
            Search Job
          </Link>
          <Link href="/register" className="theme-btn btn-two">
            Apply Job Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction10;
