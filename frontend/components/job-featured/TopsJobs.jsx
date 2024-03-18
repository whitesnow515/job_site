import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const TopsJobs = () => {
  return (
    <>
      {jobFeatured.slice(0, 3).map((item) => (
        <div className="job-block-five" key={item.id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="item brand" />
              </span>
              <h4>
                <Link href={`/job-single-v4/${item.id}`}>{item.jobTitle}</Link>
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopsJobs;
