import Link from "next/link";
import jobFeatured from "../../data/job-featured";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLatestJob } from "../../features/job/jobSlice";

const JobFeatured9 = () => {
  const { latestJob } = useSelector((state) => state.job);
  const [jobSlider, setJobSlider] = useState([
    { id: 1, name: "Freelancer", value: "freelancer", isChecked: false },
    { id: 2, name: "Full Time", value: "full-time", isChecked: true },
    { id: 3, name: "Internship", value: "internship", isChecked: false },
  ]);

  const dispatch = useDispatch();

  // slide hanlder
  const slideHandler = (id) => {
    const data = jobSlider.map((slide) => {
      if (slide.id === id) {
        if (slide.isChecked) {
          slide.isChecked = false;
          dispatch(addLatestJob(slide.value));
        } else {
          slide.isChecked = true;
          dispatch(addLatestJob(slide.value));
        }
      }
      return {
        ...slide,
      };
    });
    setJobSlider(data);
  };
  return (
    <>
      <div className="mb-50">
        <ul className="switchbox -horizontal">
          {jobSlider?.map((slide) => (
            <li key={slide.id}>
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={slide.isChecked}
                  onChange={() => slideHandler(slide.id)}
                />
                <span className="slider round"></span>
                <span className="title">{slide.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* End filter switch box */}
      {jobFeatured.slice(latestJob?.length, 6).map((item) => (
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
            <ul className="job-other-info">
              {item?.jobType?.slice(0, 1).map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            <a href="#" className="theme-btn btn-dark-blue">
              Apply Job
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobFeatured9;
