import Link from "next/link";

const CallToAction7 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/8.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Make a Difference with Your Online Resume!</h2>
          <div className="text">
            Your resume in minutes with JobHunt resume assistant is ready!
          </div>
        </div>
        {/* End sec-title */}

        <div className="btn-box">
          <Link href="/register" className="theme-btn btn-style-three">
            Create an Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction7;
