import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial4 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonilaContent.slice(3, 6).map((item) => (
          <div className="testimonial-block" key={item.id}>
            <div className="inner-box">
              <h4 className="title">{item.feedback}</h4>
              <div className="text">{item.feedbackText}</div>
              <div className="info-box">
                <div className="thumb">
                  <img src={item.avatar} alt="testimonial" />
                </div>
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

export default Testimonial4;
