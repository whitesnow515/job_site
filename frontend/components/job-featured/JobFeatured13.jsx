import Link from "next/link";
import jobFeatured from "../../data/job-featured";

const JobFeatured13 = () => {
  return (
    <>
      {jobFeatured.slice(1, 5).map((item) => (
        <div
          className="job-block-thirteen col-xl-3 col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box" style={{position:"relative"}}>
            <span className="company-bg">
              <img src="/images/resource/company-bg/default.jpg" alt="featured job" />
            </span>
            <span className="company-logo">
              <img src={item.logo} alt="featured job" />
            </span>
            <ul className="job-other-info">
              {item.jobType.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            <span className="company-name">Catalyst</span>
            <h4 style={{padding:"0 30px"}}>
              <Link href={`/job-single-v3/${item.id}`} style={{maxWidth:"200px"}}>{item.jobTitle}</Link>
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

export default JobFeatured13;
