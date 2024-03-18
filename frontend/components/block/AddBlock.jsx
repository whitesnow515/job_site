import Link from "next/link";

const AddBlock = () => {
  const blockContent = [
    {
      id: 1,
      bgImageName: "ads-bg-1",
      title: (
        <>
          {" "}
          <span>Recruiting </span>Now
        </>
      ),
    },
    {
      id: 2,
      bgImageName: "ads-bg-2",
      title: (
        <>
          {" "}
          <span>Membership </span>Opportunities
        </>
      ),
    },
    {
      id: 3,
      bgImageName: "ads-bg-3",
      title: (
        <>
          {" "}
          <span>Post a </span>Vacancy
        </>
      ),
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="advrtise-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div
            className="inner-box"
            style={{
              backgroundImage: `url(/images/resource/${item.bgImageName}.png)`,
            }}
          >
            <h4>{item.title}</h4>
            <Link href="/register" className="theme-btn btn-style-one">
              View All
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBlock;
