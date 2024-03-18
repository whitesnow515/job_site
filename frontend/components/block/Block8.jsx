const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Register With Us",
      text: `The latest design trends meet hand-crafted templates in Sassio Collection.`,
    },
    {
      id: 2,
      icon: "icon-process",
      title: "Create Your Profile",
      text: `The latest design trends meet hand-crafted templates in Sassio Collection.`,
    },
    {
      id: 3,
      icon: "icon-task",
      title: "Upload Your Resume",
      text: `The latest design trends meet hand-crafted templates in Sassio Collection.`,
    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "Now Take a Rest",
      text: `The latest design trends meet hand-crafted templates in Sassio Collection.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-4">
            <div className="icon-wrap">
              <span className={`icon ${item.icon}`}></span>
            </div>

            <h5 className="title">{item.title}</h5>
            <p className="text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block8;
