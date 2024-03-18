const AboutBlock = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/index-14/icons/1.svg",
      title: "Search Miloins of Jobs",
      bgColor: "-purple",
      text: `There is no one universal solution in online marketing, that's.`,
    },
    {
      id: 2,
      icon: "/images/index-14/icons/2.svg",
      title: "Location Base Search",
      bgColor: "-orange",
      text: `There is no one universal solution in online marketing, that's.`,
    },
    {
      id: 3,
      icon: "/images/index-14/icons/3.svg",
      title: "Top Careers",
      bgColor: "-red",
      text: `There is no one universal solution in online marketing, that's.`,
    },
    {
      id: 4,
      icon: "/images/index-14/icons/4.svg",
      title: "Recruiter directory",
      bgColor: "-green",
      text: `There is no one universal solution in online marketing, that's.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-6" key={item.id}>
          <div className="icon-side -type-1">
            <div className={`icon-wrap ${item.bgColor}`}>
              <img src={item.icon} alt="image" />
            </div>

            <div className="content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutBlock;
