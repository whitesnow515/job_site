import Image from "next/image";
import Link from "next/link";

const About8 = () => {
  const listItem = [
    {
      id: 1,
      icon: "",
      title: "Awesome design",
      text: (
        <>
          Duis aute irure dolor reprehen derit in
          <br /> volu velit.
        </>
      ),
    },
    {
      id: 2,
      icon: "",
      title: "Easy Customize",
      text: (
        <>
          Duis aute irure dolor reprehen derit in
          <br /> volu velit.
        </>
      ),
    },
  ];
  return (
    <>
      {/* <!-- About Section --> */}
      <section
        id="section-3"
        className="about-section-two style-two layout-pt-60 layout-pb-60 js-tab-menu-content"
      >
        <div className="auto-container">
          <div className="row grid-base justify-content-between align-items-center">
            {/* <!-- Content Column --> */}
            <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 order-2 order-lg-1">
              <div className="content-column">
                <div className="inner-column -no-padding" data-aos="fade-right">
                  <div className="sec-title">
                    <h2 className="color-blue-dark fw-700">
                      Perform during your
                      <br /> interview
                    </h2>
                  </div>
                  {/* End sec-title */}

                  <div className="mt-30 mb-30">
                    {listItem.map((item) => (
                      <div className="icon-item" key={item.id}>
                        <div className="icon-wrap -red">
                          <Image
                            width={25}
                            height={26}
                            src={item.icon}
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* blcok item */}

                  <Link
                    href="/job-list-v4"
                    className="theme-btn -blue"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            {/* End .col */}

            {/* <!-- Image Column --> */}
            <div
              className="image-column -no-margin col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2"
              data-aos="fade-left"
            >
              <figure className="image-box -wide-right">
                <Image
                  width={665}
                  height={552}
                  src="/images/index-12/images/3.png"
                  alt="images"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About8;
