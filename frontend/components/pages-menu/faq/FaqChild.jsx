const FaqChild = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header">
            <button
              className="acc-btn accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
            >
              Why won&apos;t my payment go through?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I get a refund?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I redeem a coupon?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion block active-block">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button acc-btn collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Changing account name
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                <p>
                  Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                  pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                  vel fames interdum urna lobortis sagittis sed pretium. Aliquam
                  eget posuere sit enim elementum nulla vulputate magna. Morbi
                  sed arcu proin quis tortor non risus.
                </p>
                <p>
                  Elementum lectus a porta commodo suspendisse arcu, aliquam
                  lectus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqChild;
