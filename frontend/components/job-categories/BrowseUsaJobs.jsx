import Link from "next/link";

const BrowseUsaJobs = () => {
  const jobListContent = [
    {
      id: 1,
      title: "Popular Job Categories",
      jobListItem: [
        { name: "Legal Jobs", link: "/job-list/job-list-v1" },
        { name: "Accounting Jobs", link: "/job-list/job-list-v1" },
        { name: "Engineering Jobs", link: "/job-list/job-list-v1" },
        { name: "Healthcare Jobs", link: "/job-list/job-list-v1" },
        { name: "Human Resources Jobs", link: "/job-list/job-list-v1" },
        { name: "Construction Jobs", link: "/job-list/job-list-v1" },
        { name: "Transportation Jobs", link: "/job-list/job-list-v1" },
        { name: "Marketing Jobs", link: "/job-list/job-list-v1" },
      ],
    },
    {
      id: 2,
      title: "Popular Job Titles",
      jobListItem: [
        { name: "Work From Home Jobs", link: "/job-list/job-list-v2" },
        { name: "Receptionist Jobs", link: "/job-list/job-list-v2" },
        { name: "Online Teaching Jobs", link: "/job-list/job-list-v2" },
        { name: "Medical Assistant Jobs", link: "/job-list/job-list-v2" },
        { name: "Delivery Driver Jobs", link: "/job-list/job-list-v2" },
        { name: "Security Guard Jobs", link: "/job-list/job-list-v2" },
        { name: "Transportation Jobs", link: "/job-list/job-list-v2" },
      ],
    },
    {
      id: 3,
      title: "Popular Job Categories",
      jobListItem: [
        { name: "NYC, NY Jobs", link: "/job-list/job-list-v3" },
        { name: "Houston, TX Jobs", link: "/job-list/job-list-v3" },
        { name: "Los Angeles, CA Jobs", link: "/job-list/job-list-v3" },
        { name: "Atlanta, GA Jobs", link: "/job-list/job-list-v3" },
        { name: "Las Vegas, NV Jobs", link: "/job-list/job-list-v3" },
        { name: "San Antonio, TX Jobs", link: "/job-list/job-list-v3" },
        { name: "Dallas, TX Jobs", link: "/job-list/job-list-v3" },
      ],
    },
    {
      id: 4,
      title: "Popular Job Categories",
      jobListItem: [
        { name: "Coca Cola Jobs", link: "/job-list/job-list-v4" },
        { name: "PepsiCo Jobs", link: "/job-list/job-list-v4" },
        { name: "Brookdale Senior Living Jobs", link: "/job-list/job-list-v4" },
        { name: "Manpower Jobs", link: "/job-list/job-list-v4" },
        { name: "Accenture Jobs", link: "/job-list/job-list-v4" },
        { name: "US Federal Government Jobs", link: "/job-list/job-list-v4" },
        { name: "Amazon Jobs", link: "/job-list/job-list-v4" },
      ],
    },
  ];

  return (
    <>
      {jobListContent.map((item) => (
        <div className="column col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <h4>{item.title}</h4>
          <ul className="links-list">
            {item.jobListItem.map((job, i) => (
              <li key={i}>
                <Link href={job.link}>{job.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default BrowseUsaJobs;
