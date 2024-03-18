const Block5 = () => {
  const blockContent = {
    title: "Find Jobs with 3 easy steps",
    descriptions: ` Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt. Labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.`,
    list: [
      {
        count: "1",
        text: `Register an account to
            start`,
      },
      {
        count: "2",
        text: `Explore over thousands of
            resumes`,
      },
      {
        count: "3",
        text: `Find the most suitable
            candidate`,
      },
    ],
  };
  return (
    <section className="steps-section pt-0">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <img src="/images/resource/steps-img.png" alt="resource" />
              </figure>
              {/* <!-- Count Employers --> */}
              <div className="count-employers" data-aos="fade-up">
                <span className="title">300k+ Employers</span>
                <figure className="image">
                  <img src="/images/resource/multi-peoples.png" alt="resource" />
                </figure>
              </div>
            </div>
          </div>
          {/* End image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title">
                <h2>{blockContent.title}</h2>
                <div className="text">{blockContent.descriptions}</div>
                <ul className="steps-list">
                  {blockContent.list.map((list, i) => (
                    <li key={i}>
                      <span className="count">{list.count}</span> {list.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
        </div>
      </div>
    </section>
  );
};

export default Block5;
