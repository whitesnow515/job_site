import Link from "next/link";
import jobFeatured from "../../data/job-featured";
import { useState } from "react";

const tab = ["Popular", "Recent", "Recent"];

const JobFeatured10 = () => {
    const [currentTab, setTab] = useState(1);
    return (
        <div className="default-tabs pt-50 tabs-box">
            <div className="tab-buttons-wrap">
                <ul className="tab-buttons -pills-condensed">
                    {tab.map((item, i) => (
                        <li
                            key={i}
                            onClick={() => setTab(i)}
                            className={`tab-btn ${
                                i === currentTab ? "active-btn" : ""
                            }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <!--Tabs Box--> */}

            <div className="row pt-50" data-aos="fade-up">
                {jobFeatured.slice(currentTab, 7).map((item) => (
                    <div
                        className="job-block col-lg-6 col-md-12 col-sm-12"
                        key={item.id}
                    >
                        <div className="inner-box">
                            <div className="content">
                                <span className="company-logo">
                                    <img src={item.logo} alt="item brand" />
                                </span>
                                <h4>
                                    <Link href={`/job-single-v1/${item.id}`}>
                                        {item.jobTitle}
                                    </Link>
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
                                        <span className="icon flaticon-clock-3"></span>{" "}
                                        {item.time}
                                    </li>
                                    {/* time info */}
                                    <li>
                                        <span className="icon flaticon-money"></span>{" "}
                                        {item.salary}
                                    </li>
                                    {/* salary info */}
                                </ul>
                                {/* End .job-info */}

                                <ul className="job-other-info">
                                    {item.jobType.map((val, i) => (
                                        <li
                                            key={i}
                                            className={`${val.styleClass}`}
                                        >
                                            {val.type}
                                        </li>
                                    ))}
                                </ul>
                                {/* End .job-other-info */}

                                <button className="bookmark-btn">
                                    <span className="flaticon-bookmark"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    // End job-block
                ))}
            </div>
            {/* End .row */}
        </div>
    );
};

export default JobFeatured10;
