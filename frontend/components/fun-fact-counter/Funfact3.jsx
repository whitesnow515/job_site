import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact3 = () => {
  const [focus, setFocus] = useState(false);

  const counterUpContent = [
    {
      id: 1,
      startCount: "0",
      endCount: "97216",
      meta: "Jobs",
      animationDelay: "700",
    },
    {
      id: 2,
      startCount: "0",
      endCount: "4782",
      meta: "Members",
      animationDelay: "800",
    },
    {
      id: 3,
      startCount: "0",
      endCount: "5322",
      meta: "Resume",
      animationDelay: "900",
    },
    {
      id: 4,
      startCount: "0",
      endCount: "6329",
      meta: "Company",
      animationDelay: "1000",
    },
  ];

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="counter-column col-lg-auto col-md-6 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="count-box">
            <span className="count-text">
              <CountUp
                start={focus ? val.startCount : null}
                end={val.endCount}
                duration={2}
              >
                {({ countUpRef }) => (
                  <InView
                    as="span"
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
            </span>
          </div>
          <h4 className="counter-title">{val.meta}</h4>
        </div>
      ))}
    </>
  );
};

export default Funfact3;
