import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const HeroJobFeatured = () => {
  return (
    <>
      {jobFeatured.slice(2, 3).map((item) => (
        <div
          className="info_block_first job-block"
          data-aos="fade-in"
          data-aos-delay="1500"
          data-aos-offset="-250"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="brand" />
              </span>
              <h4>
                <Link href={`/job-single-v1/${item.id}`}>{item.jobTitle}</Link>
              </h4>
              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.company}
                </li>
                {/* compnay info */}
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item.location}
                </li>
                {/* location info */}
              </ul>
              {/* End .job-info */}
              <ul className="job-other-info">
                {item.jobType.slice(0, 2).map((val, i) => (
                  <li key={i} className={`${val.styleClass}`}>
                    {val.type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroJobFeatured;
