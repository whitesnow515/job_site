import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const JobFeatured6 = () => {
  return (
    <>
      {jobFeatured.slice(1, 18).map((item) => (
        <div
          className="job-block-four col-xl-3 col-lg-4 col-md-6 col-sm-12"
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
            <span className="company-name">Catalyst</span>
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

export default JobFeatured6;
