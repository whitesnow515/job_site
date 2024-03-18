const Block9 = () => {
  const blockContent = [
    {
      id: 1,
      img: "/images/index-12/steps/1.png",
      serialNo: "01",
      title: "Free Resume Assessments",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 2,
      img: "/images/index-12/steps/2.png",
      serialNo: "02",
      title: "Job Fit Scoring",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
    {
      id: 3,
      img: "/images/index-12/steps/3.png",
      serialNo: "03",
      title: "Help Every Step of the Way",
      text: `Achieve virtually any design and layout from within the one template.`,
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
          <div className="step-item text-center">
            <div className="image">
              <img src={item.img} alt="image" />
            </div>
            <h3 className="title">
              <span className="text-red">{item.serialNo}</span> {item.title}
            </h3>
            <p className="text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block9;
