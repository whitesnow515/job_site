import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial3 = () => {
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick-arrow slick-next"
        : "slick-arrow slick-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <span className="flaticon-next"></span>
        </>
      ) : (
        <>
          <span className="flaticon-back"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {testimonilaContent.slice(6, 9).map((item) => (
          <div key={item.id}>
            <div className="slide-item">
              <div className="image-column">
                <figure className="image">
                  <img
                    src="/images/resource/testimonial-image.jpg"
                    alt="testimonial"
                  />
                </figure>
              </div>
              <div className="content-column">
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <h4 className="title">{item.feedback}</h4>
                    <div className="text">{item.feedbackText}</div>
                    <div className="info-box">
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
                {/* <!--Testimonial Block --> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial3;
