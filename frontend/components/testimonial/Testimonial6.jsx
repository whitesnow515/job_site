import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial4 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
        {testimonilaContent.slice(0, 6).map((item) => (
          <div className="testimonial -type-1" key={item.id}>
            <div className="thumb">
              <img src={item.avatar} alt="testimonial" />
            </div>
            {/* End .thumb */}
            <div className="content">
              <h4>{item.feedback}</h4>
              <p>{item.feedbackText}</p>
            </div>
            {/* End .content */}
            <div className="author">
              <h4 className="name">{item.name}</h4>
              <span className="job">{item.designation}</span>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial4;
