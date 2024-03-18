import Link from "next/link";

const FeaturedBlock3 = () => {
  const blockContent = [
    {
      id: 1,
      img: "/images/index-15/cities/1.png",
      city: "New York",
      jobNumber: "18",
    },
    {
      id: 2,
      img: "/images/index-15/cities/2.png",
      city: "Paris",
      jobNumber: "44",
    },
    {
      id: 3,
      img: "/images/index-15/cities/3.png",
      city: "London",
      jobNumber: "16",
    },
    {
      id: 4,
      img: "/images/index-15/cities/4.png",
      city: "Los Angeles",
      jobNumber: "25",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="feature-block">
            <div className="inner-box">
              <figure className="image">
                <img src={item.img} alt="featued" />
              </figure>
              <div className="overlay-box">
                <div className="content">
                  <h5>{item.city}</h5>
                  <span className="total-jobs">{item.jobNumber} Jobs</span>
                  <Link href="/job-list/job-list-v13" className="overlay-link"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedBlock3;
