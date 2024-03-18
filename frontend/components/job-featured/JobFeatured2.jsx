import Link from "next/link";

import jobFeatured from "../../data/job-featured";

const JobFeatured2 = () => {
  return (
    <>
      {jobFeatured.slice(6, 11).map((item) => (
        <div
          className="job-block-two col-lg-12 col-md-12 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="item brand" />
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
                <li>
                  <span className="icon flaticon-clock-3"></span> {item.time}
                </li>
                {/* time info */}
                <li>
                  <span className="icon flaticon-money"></span> {item.salary}
                </li>
                {/* salary info */}
              </ul>
              {/* End .job-info */}
            </div>
            {/* End .content */}

            <ul className="job-other-info">
              {item.jobType.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            {/* End .job-other-info */}

            <button className="bookmark-btn">
              <span className="flaticon-bookmark"></span>
            </button>
          </div>
          {/* End inner-box */}
        </div>
        // End job-block
      ))}
    </>
  );
};

export default JobFeatured2;
