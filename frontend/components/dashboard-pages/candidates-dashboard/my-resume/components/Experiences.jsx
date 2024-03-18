const Experiences = () => {
  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Work & Experience</h4>
        <button className="add-info-btn">
          <span className="icon flaticon-plus"></span> Add Work
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <div className="inner">
          <span className="name">S</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Product Designer</h3>
              <span>Spotify Inc.</span>
            </div>
            <div className="edit-box">
              <span className="year">2012 - 2014</span>
              <div className="edit-btns">
                <button>
                  <span className="la la-pencil"></span>
                </button>
                <button>
                  <span className="la la-trash"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante
            <br /> ipsum primis in faucibus.
          </div>
        </div>
      </div>

      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <div className="inner">
          <span className="name">D</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Sr UX Engineer</h3>
              <span>Dropbox Inc.</span>
            </div>
            <div className="edit-box">
              <span className="year">2012 - 2014</span>
              <div className="edit-btns">
                <button>
                  <span className="la la-pencil"></span>
                </button>
                <button>
                  <span className="la la-trash"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            ipsum tellus. Interdum et malesuada fames ac ante
            <br /> ipsum primis in faucibus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
