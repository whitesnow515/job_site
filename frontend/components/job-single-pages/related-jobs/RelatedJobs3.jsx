import Link from "next/link";
import jobs from "../../../data/job-featured";

const RelatedJobs3 = () => {
  return (
    <>
      {jobs.slice(20, 22).map((item) => (
        <div
          className="job-block-four col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <ul className="job-other-info">
              {item.jobType.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            <span className="company-logo">
              <img src={item.logo} alt="featured job" />
            </span>
            <span className="company-name">{item.company}</span>
            <h4>
              <Link href={`/job-single-v3/${item.id}`}>{item.jobTitle}</Link>
            </h4>
            <div className="location">
              <span className="icon flaticon-map-locator"></span>
              {item.location}
            </div>
          </div>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default RelatedJobs3;
