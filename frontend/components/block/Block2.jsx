const Block2 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/process-1.png",
      title: (
        <>
          Register an account <br />
          to start
        </>
      ),
    },
    {
      id: 2,
      icon: "/images/resource/process-2.png",
      title: (
        <>
          Explore over thousands <br />
          of resumes
        </>
      ),
    },
    {
      id: 3,
      icon: "/images/resource/process-3.png",
      title: (
        <>
          Find the most suitable <br />
          candidate
        </>
      ),
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="process-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="icon-box">
            <img src={item.icon} alt="how it works" />
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>

        </div>
      ))}
    </>
  );
};

export default Block2;
