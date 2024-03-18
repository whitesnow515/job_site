import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial5 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    center: true,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonilaContent.slice(0, 3).map((item) => (
          <div className="testimonial-block-four" key={item.id}>
            <div className="inner-box">
              <div className="thumb">
                <img src={item.avatar} alt="testimonial" />
              </div>
              <h4 className="title">{item.feedback}</h4>
              <div className="text">{item.feedbackText}</div>
              <div className="info-box">
                <h4 className="name">{item.name}</h4>
                <span className="designation">{item.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial5;
