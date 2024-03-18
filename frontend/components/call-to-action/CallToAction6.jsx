import Link from "next/link";

const CallToAction6 = () => {
  return (
    <section className="call-to-action-three style-two">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title light">
            <h2>Gat a question?</h2>
            <div className="text">
              We are here to help. Check out our FAQs, send us an email or call
              us at 1 <br />
              <a href="#">(900) 777-7777.</a>
            </div>
          </div>
          {/* End sec-title */}

          <div className="btn-box">
            <Link href="/faq" className="theme-btn btn-style-three">
              Get Started
            </Link>
          </div>
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction6;
